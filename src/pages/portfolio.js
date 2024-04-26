import { fetchInstaFeed, getHomeSectionDetails, getMarketsSectionData, getSocialSectionBlogs, getSocialSectionDetails, getStudiosSectionData } from "@/api/home.js";
import { listPortfolios } from "@/api/listing";
import { getPortfolioSectionDetails } from "@/api/portfolio";
import PortfolioListing from "@/components/ProtfolioPageSections/PortfolioListing";
import MarketSection from "@/components/commonComponents/MarketSection";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded } from "@/utils/utilityFunctions";

export default function portfolio({ homeSectionDetails, portfolioSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed, portfolio }) {
  markPageLoaded();
  const data = {
    pageSize: 8,
    markets: marketsSectionData,
    portfolioSectionDetails,
    items: portfolio._items.map(item => item.data),
    studios: studios.filter(x => x.filters),
    totalCount: portfolio?._totalCount
  }

  const applyFilters = async ({ selectedStudios = [], selectedMarkets = [], disableLoader = false }) => {
    try {
      const response = await listPortfolios({ pageSize, studios: selectedStudios, markets: selectedMarkets, disableLoader });
      setPortfolioCollection(response._items.filter(item => item.data.portfolioRef._id !== undefined).map(item => item.data));
      setPortfolioResponse(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <PortfolioListing data={data} />
      <MarketSection data={marketsSectionData} homeSectionDetails={homeSectionDetails} />
      <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
    </>
  )
}

export const getServerSideProps = async () => {
  const [homeSectionDetails, portfolioSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed, portfolio] = await Promise.all([
    getHomeSectionDetails(),
    getPortfolioSectionDetails(),
    getMarketsSectionData(),
    getStudiosSectionData(),
    getSocialSectionDetails(),
    getSocialSectionBlogs(),
    fetchInstaFeed(),
    listPortfolios({ pageSize: 8, studios: [], markets: [] })
  ]);

  return {
    props: { homeSectionDetails, portfolioSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed, portfolio },
  };
}
