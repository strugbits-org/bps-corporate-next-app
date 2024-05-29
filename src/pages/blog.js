import { fetchInstaFeed, getMarketsSectionData, getSocialSectionBlogs, getSocialSectionDetails, getStudiosSectionData } from "@/api/home.js";
import { getBlogSectionDetails } from "@/api/blog";
import { listBlogs } from "@/api/listing";
import BlogListing from "@/components/blogPageSections/BlogListing";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded, pageLoadEnd, pageLoadStart, updatedWatched } from "@/utils/utilityFunctions";
import { useEffect, useState } from "react";

export default function Blog({ blogs, blogSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed }) {

  const [blogResponse, setBlogResponse] = useState(blogs);
  const [blogCollection, setBlogCollection] = useState([]);
  const pageSize = 8;
  const data = {
    pageSize,
    markets: marketsSectionData,
    blogSectionDetails,
    items: blogCollection,
    studios: studios.filter(x => x.filters),
    totalCount: blogResponse?._totalCount
  }

  const handleSeeMore = async ({ selectedStudios = [], selectedMarkets = [] }) => {
    const response = await listBlogs({ pageSize, skip: blogCollection.length, studios: selectedStudios, markets: selectedMarkets });
    setBlogCollection((prev) => [
      ...prev,
      ...response._items.map((item) => item.data),
    ]);
    setBlogResponse(response);
    updatedWatched();
  };

  const applyFilters = async ({ selectedStudios = [], selectedMarkets = [] }) => {
    try {
      pageLoadStart();
      const response = await listBlogs({ pageSize, studios: selectedStudios, markets: selectedMarkets });
      setBlogCollection(response._items.filter(item => item.data.blogRef && item.data.blogRef._id !== undefined).map(item => item.data));
      setBlogResponse(response);
      pageLoadEnd()
      updatedWatched();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setBlogCollection(blogs._items.filter(item => item.data.blogRef && item.data.blogRef._id !== undefined).map(item => item.data));
    markPageLoaded();
  }, [blogs]);

  return (
    <>
      <BlogListing data={data} seeMore={handleSeeMore} applyFilters={applyFilters} />
      <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
    </>
  )
}

export const getStaticProps = async () => {


  const [blogs, blogSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed] = await Promise.all([
    listBlogs({ pageSize: 8 }),
    getBlogSectionDetails(),
    getMarketsSectionData(),
    getStudiosSectionData(),
    getSocialSectionDetails(),
    getSocialSectionBlogs(),
    fetchInstaFeed(),
  ]);

  return {
    props: { blogs, blogSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed },
    revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
  };
}
