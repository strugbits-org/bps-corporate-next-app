import { fetchInstaFeed, getMarketsSectionData, getSocialSectionBlogs, getSocialSectionDetails, getStudiosSectionData } from "@/api/home.js";
import { getBlogSectionDetails } from "@/api/blog";
import { listBlogs } from "@/api/listing";
import BlogListing from "@/components/blogPageSections/BlogListing";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded, updatedWatched } from "@/utils/utilityFunctions";
import { useEffect, useState } from "react";

export default function Blog({ blogSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed }) {

  const [blogResponse, setBlogResponse] = useState(null);
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

  const handleSeeMore = async ({ selectedStudios = [], selectedMarkets = [], disableLoader = false }) => {
    const response = await listBlogs({ pageSize, skip: blogCollection.length, studios: selectedStudios, markets: selectedMarkets, disableLoader });
    setBlogCollection((prev) => [
      ...prev,
      ...response._items.map((item) => item.data),
    ]);
    setBlogResponse(response);
    updatedWatched();
  };

  const applyFilters = async ({ selectedStudios = [], selectedMarkets = [], disableLoader = false }) => {
    try {
      const response = await listBlogs({ pageSize, studios: selectedStudios, markets: selectedMarkets, disableLoader });
      setBlogCollection(response._items.filter(item => item.data.blogRef && item.data.blogRef._id !== undefined).map(item => item.data));
      setBlogResponse(response);
      updatedWatched();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    applyFilters({ disableLoader: true });
    markPageLoaded();
  }, []);

  return (
    <>
      <BlogListing data={data} seeMore={handleSeeMore} applyFilters={applyFilters} />
      <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
    </>
  )
}

export const getServerSideProps = async () => {


  const [blogSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed] = await Promise.all([
    getBlogSectionDetails(),
    getMarketsSectionData(),
    getStudiosSectionData(),
    getSocialSectionDetails(),
    getSocialSectionBlogs(),
    fetchInstaFeed(),
  ]);

  console.log("blogSectionDetails", blogSectionDetails);
  return {
    props: { blogSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed },
  };
}
