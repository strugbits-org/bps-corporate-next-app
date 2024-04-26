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

const Portfolio = ({
  singlePortfolio,
  portfolioSectionDetails,
  portfolio,
  socialSectionDetails,
  socialSectionBlogs,
  instaFeed,
}) => {
  const router = useRouter();
  markPageLoaded();
  return (
    <>
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
