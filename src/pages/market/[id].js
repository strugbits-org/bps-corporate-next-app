import {
  fetchInstaFeed,
  getDreamBigData,
  getHomeSectionDetails,
  getMarketsSectionData,
  getPeopleReviewSliderData,
  getSocialSectionBlogs,
  getSocialSectionDetails,
  getStudiosSectionData,
} from "@/api/home.js";

import {
  fetchPortfolio,
  getMarketCollection,
  getMarketSection,
  getMarketsPostPageSectionDetails,
} from "@/api/market";

import MarketTopSection from "@/components/marketDetialPageSections/MarketTopSection";
import ExplorePortfolio from "@/components/marketDetialPageSections/ExplorePortfolio";
import PeopleReviewSLider from "@/components/commonComponents/PeopleReviewSlider";
import HowWeDoSection from "@/components/marketDetialPageSections/HowWeDoSection";
import DreamBigSection from "@/components/commonComponents/DreamBigSection";
import MarketSection from "@/components/commonComponents/MarketSection";
import SocialSection from "@/components/commonComponents/SocialSection";
import StudioSection from "@/components/commonComponents/StudioSection";
import { markPageLoaded } from "@/utils/utilityFunctions";
import { useRouter } from "next/router";
import Head from "next/head";

const Market = ({
  marketSection,
  marketsPostPageSectionDetails,
  portfolioData,
  homeSectionDetails,
  peopleReviewSliderData,
  marketsSectionData,
  studiosSectionData,
  dreamBigData,
  socialSectionDetails,
  socialSectionBlogs,
  instaFeed,
  meta_data
}) => {
  markPageLoaded();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{meta_data.title + marketSection.cardname}</title>
        <meta name="description" content={marketSection.description} />
        <meta property="og:title" content={meta_data.title + marketSection.cardname} />
        <meta property="og:description" content={marketSection.description} />
      </Head>
      <MarketTopSection data={marketSection} />
      <HowWeDoSection
        data={marketSection}
        marketSectionDetails={marketsPostPageSectionDetails}
      />
      <ExplorePortfolio
        marketSectionDetails={marketsPostPageSectionDetails}
        portfolioCollection={portfolioData}
        slug={router.query.id}
      />
      <PeopleReviewSLider
        data={peopleReviewSliderData}
        homeSectionDetails={homeSectionDetails}
      />
      <MarketSection
        data={marketsSectionData}
        homeSectionDetails={homeSectionDetails}
      />
      <StudioSection
        studioData={studiosSectionData}
        homeSectionDetails={homeSectionDetails}
      />
      <DreamBigSection data={dreamBigData} />
      <SocialSection
        data={socialSectionDetails}
        posts={socialSectionBlogs}
        insta_feed={instaFeed}
      />
    </>
  );
};

export async function getStaticPaths() {
  const markets = await getMarketCollection();

  const paths = markets.map((market) => ({
    params: { id: market.slug },
  }));

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {
  try {
    const marketSection = await getMarketSection(params.id);
    if (!marketSection) {
      return {
        notFound: true,
      };
    }
    const [
      marketsPostPageSectionDetails,
      marketCollection,
      portfolioData,
      homeSectionDetails,
      peopleReviewSliderData,
      marketsSectionData,
      studiosSectionData,
      dreamBigData,
      socialSectionDetails,
      socialSectionBlogs,
      instaFeed,
    ] = await Promise.all([
      getMarketsPostPageSectionDetails(),
      getMarketCollection(),
      fetchPortfolio({ id: marketSection._id }),
      getHomeSectionDetails(),
      getPeopleReviewSliderData(),
      getMarketsSectionData(),
      getStudiosSectionData(),
      getDreamBigData(),
      getSocialSectionDetails(),
      getSocialSectionBlogs(),
      fetchInstaFeed(),
    ]);
    return {
      props: {
        marketSection,
        marketsPostPageSectionDetails,
        marketCollection,
        portfolioData,
        homeSectionDetails,
        peopleReviewSliderData,
        marketsSectionData,
        studiosSectionData,
        dreamBigData,
        socialSectionDetails,
        socialSectionBlogs,
        instaFeed,
      },
      revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
    };
  } catch (error) {
    console.error("Error:", error);
  }
};

export default Market;