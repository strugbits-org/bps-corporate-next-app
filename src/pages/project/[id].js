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
import { listPortfolios } from "@/api/listing";

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
      <PortfolioIntoSection data={singlePortfolio} />
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

export async function getStaticPaths() {
  const projects = await listPortfolios({ pageSize: "50" });

  const paths = projects._items.map((project) => ({
    params: { id: project.data.slug },
  }));

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {

  try {
    const singlePortfolio = await getSinglePortfolio(params.id);

    if (!singlePortfolio || singlePortfolio.isHidden) {
      return {
        notFound: true,
      };
    }

    const [
      portfolioSectionDetails,
      portfolio,
      socialSectionDetails,
      socialSectionBlogs,
      instaFeed,
    ] = await Promise.all([
      getPortfolioSectionDetails(),
      getPortfolio({ pageSize: 4, id: params.id }),
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
      revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
    };
  } catch (error) {
    console.error("Error:", error);
  }
};

export default Portfolio;
