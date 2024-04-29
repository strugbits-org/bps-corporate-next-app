import {
  fetchInstaFeed,
  getSocialSectionBlogs,
  getSocialSectionDetails,
} from "@/api/home.js";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded } from "@/utils/utilityFunctions";
import { useRouter } from "next/router";
import PortfolioIntoSection from "@/components/portfolioDetailPageSections/PortfolioIntoSection";
import {
  getPortfolio,
  getPortfolioSectionDetails,
  getSinglePortfolio,
} from "@/api/portfolio";
import GallerySection from "@/components/portfolioDetailPageSections/GallerySection";
import ExploreProjectsSection from "@/components/portfolioDetailPageSections/ExploreProjectsSection";
import Head from "next/head";

const Portfolio = ({
  singlePortfolio,
  portfolioSectionDetails,
  portfolio,
  socialSectionDetails,
  socialSectionBlogs,
  instaFeed,
  meta_data
}) => {
  const router = useRouter();
  markPageLoaded();
  return (
    <>
      <Head>
        <title>{meta_data.title + (singlePortfolio.seoDesc.title || singlePortfolio.portfolioRef.title)}</title>
        <meta name="description" content={singlePortfolio.seoDesc.description} />
        <meta property="og:title" content={meta_data.title + (singlePortfolio.seoDesc.title || singlePortfolio.portfolioRef.title)} />
        <meta property="og:description" content={singlePortfolio.seoDesc.description} />
      </Head>
      <PortfolioIntoSection data={singlePortfolio} slug={router.query.id} />
      <GallerySection
        data={singlePortfolio}
        portfolioSectionDetails={portfolioSectionDetails}
      />
      <ExploreProjectsSection
        id={router.query.id}
        portfolioCollection={portfolio}
        portfolioSectionDetails={portfolioSectionDetails}
      />
      <SocialSection
        data={socialSectionDetails}
        posts={socialSectionBlogs}
        insta_feed={instaFeed}
      />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const [
    singlePortfolio,
    portfolioSectionDetails,
    portfolio,
    socialSectionDetails,
    socialSectionBlogs,
    instaFeed,
  ] = await Promise.all([
    getSinglePortfolio(context.query.id),
    getPortfolioSectionDetails(),
    getPortfolio(4, context.query.id),
    getSocialSectionDetails(),
    getSocialSectionBlogs(),
    fetchInstaFeed(),
  ]);
  return {
    props: {
      singlePortfolio,
      portfolioSectionDetails,
      portfolio,
      socialSectionDetails,
      socialSectionBlogs,
      instaFeed,
    },
  };
};

export default Portfolio;
