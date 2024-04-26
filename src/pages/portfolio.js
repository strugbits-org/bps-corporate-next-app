import { fetchInstaFeed, getHomeSectionDetails, getMarketsSectionData, getSocialSectionBlogs, getSocialSectionDetails } from "@/api/home.js";
import MarketSection from "@/components/commonComponents/MarketSection";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded } from "@/utils/utilityFunctions";

export default function portfolio({ homeSectionDetails, marketsSectionData, socialSectionDetails, socialSectionBlogs, instaFeed }) {
  markPageLoaded();
  return (
    <>
      <div>portfolio</div>
      <MarketSection data={marketsSectionData} homeSectionDetails={homeSectionDetails} />
      <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
    </>
  )
}

export const getServerSideProps = async () => {
  const [homeSectionDetails, marketsSectionData, socialSectionDetails, socialSectionBlogs, instaFeed] = await Promise.all([
    getHomeSectionDetails(),
    getMarketsSectionData(),
    getSocialSectionDetails(),
    getSocialSectionBlogs(),
    fetchInstaFeed()
  ]);

  return {
    props: { homeSectionDetails, marketsSectionData, socialSectionDetails, socialSectionBlogs, instaFeed },
  };
}
