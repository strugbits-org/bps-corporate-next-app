import { fetchInstaFeed, getMarketsSectionData, getSocialSectionBlogs, getSocialSectionDetails, getStudiosSectionData } from "@/api/home.js";
import { getBlogSectionDetails } from "@/api/blog";
import { listBlogs } from "@/api/listing";
import BlogListing from "@/components/blogPageSections/BlogListing";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded } from "@/utils/utilityFunctions";

export default function blog({ blogSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed, blog }) {
  markPageLoaded();
  const data = {
    pageSize: 8,
    markets: marketsSectionData,
    blogSectionDetails,
    items: blog._items.map(item => item.data),
    studios: studios.filter(x => x.filters),
    totalCount: blog?._totalCount
  }

  const applyFilters = async ({ selectedStudios = [], selectedMarkets = [], disableLoader = false }) => {
    try {
      const response = await listBlogs({ pageSize, studios: selectedStudios, markets: selectedMarkets, disableLoader });
      setBlogCollection(response._items.filter(item => item.data.blogRef && item.data.blogRef._id !== undefined).map(item => item.data));
      setBlogResponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <BlogListing data={data} />
      <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
    </>
  )
}

export const getServerSideProps = async () => {


  const [blogSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed, blog] = await Promise.all([
    getBlogSectionDetails(),
    getMarketsSectionData(),
    getStudiosSectionData(),
    getSocialSectionDetails(),
    getSocialSectionBlogs(),
    fetchInstaFeed(),
    listBlogs({ pageSize: 8, studios: [], markets: [] })
  ]);

  return {
    props: { blogSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed, blog },
  };
}
