import { fetchInstaFeed, getHomeSectionDetails, getMarketsSectionData, getSocialSectionBlogs, getSocialSectionDetails, getStudiosSectionData } from "@/api/home.js";
import { listPortfolios } from "@/api/listing";
import { getPortfolioSectionDetails } from "@/api/portfolio";
import PortfolioListing from "@/components/ProtfolioPageSections/PortfolioListing";
import MarketSection from "@/components/commonComponents/MarketSection";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded, pageLoadEnd, pageLoadStart, updatedWatched } from "@/utils/utilityFunctions";
import { useEffect, useState } from "react";

export default function Portfolio({ portfolios, homeSectionDetails, portfolioSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed }) {

  const [portfolioResponse, setPortfolioResponse] = useState(portfolios);
  const [portfolioCollection, setPortfolioCollection] = useState([]);

  const pageSize = 8;
  const data = {
    pageSize: 8,
    markets: marketsSectionData,
    portfolioSectionDetails,
    items: portfolioCollection,
    studios: studios.filter(x => x.filters),
    totalCount: portfolioResponse?._totalCount
  }

  const handleSeeMore = async ({ selectedStudios = [], selectedMarkets = [], disableLoader = false }) => {
    const response = await listPortfolios({ pageSize, skip: portfolioCollection.length, studios: selectedStudios, markets: selectedMarkets, disableLoader });
    setPortfolioCollection(prev => [...prev, ...response._items.map(item => item.data)]);
    setPortfolioResponse(response);
    updatedWatched();
  }

  const applyFilters = async ({ selectedStudios = [], selectedMarkets = [] }) => {
    try {
      pageLoadStart();
      const response = await listPortfolios({ pageSize, studios: selectedStudios, markets: selectedMarkets });
      setPortfolioCollection(response._items.filter(item => item.data.portfolioRef._id !== undefined).map(item => item.data));
      pageLoadEnd()
      updatedWatched();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setPortfolioCollection(portfolios._items.filter(item => item.data.portfolioRef._id !== undefined).map(item => item.data));
    markPageLoaded();
  }, [portfolios]);

  return (
    <>
      <PortfolioListing data={data} applyFilters={applyFilters} seeMore={handleSeeMore} />
      <MarketSection data={marketsSectionData} homeSectionDetails={homeSectionDetails} />
      <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
    </>
  )
}

export const getStaticProps = async () => {
  const [portfolios, homeSectionDetails, portfolioSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed] = await Promise.all([
    listPortfolios({ pageSize: 8 }),
    getHomeSectionDetails(),
    getPortfolioSectionDetails(),
    getMarketsSectionData(),
    getStudiosSectionData(),
    getSocialSectionDetails(),
    getSocialSectionBlogs(),
    fetchInstaFeed(),
  ]);

  return {
    props: { portfolios, homeSectionDetails, portfolioSectionDetails, marketsSectionData, studios, socialSectionDetails, socialSectionBlogs, instaFeed },
    revalidate: 60 * 5,
  };
}
