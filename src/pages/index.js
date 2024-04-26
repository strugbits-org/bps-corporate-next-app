import { fetchInstaFeed, getDreamBigData, getHeroSectionData, getHomeSectionDetails, getMarketsSectionData, getPeopleReviewSliderData, getPortfolioCollection, getRentalStoreData, getRentalStoreFancyTitle, getSocialSectionBlogs, getSocialSectionDetails, getStudiosSectionData, getTouchSectionData } from "@/api/home.js";
import HeroSection from "@/components/homePageSections/HeroSection";
import FormConcept from "@/components/homePageSections/FormConcept";
import GetTouchSection from "@/components/homePageSections/GetTouchSection";
import StudioSection from "@/components/commonComponents/StudioSection";
import OurProjectSection from "@/components/homePageSections/OurProjectSection";
import PeopleReviewSLider from "@/components/commonComponents/PeopleReviewSlider";
import MarketSection from "@/components/commonComponents/MarketSection";
import RentalStoreSection from "@/components/homePageSections/RentalStoreSection";
import DreamBigSection from "@/components/commonComponents/DreamBigSection";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded } from "@/utils/utilityFunctions";

export default function Home({ heroSectionData, getInTouchData, studiosSectionData, homeSectionDetails, portfolioCollection, peopleReviewSliderData, marketsSectionData, rentalStoreData, rentalStoreFancyTitle, dreamBigData, socialSectionBlogs, socialSectionDetails, instaFeed }) {
  markPageLoaded();

  return (
    <>
      <HeroSection data={heroSectionData} />
      <FormConcept data={heroSectionData} />
      <GetTouchSection data={getInTouchData} />
      <StudioSection studioData={studiosSectionData} homeSectionDetails={homeSectionDetails} />
      <OurProjectSection portfolioCollection={portfolioCollection} homeSectionDetails={homeSectionDetails} />
      <PeopleReviewSLider data={peopleReviewSliderData} homeSectionDetails={homeSectionDetails} />
      <MarketSection data={marketsSectionData} homeSectionDetails={homeSectionDetails} />
      <RentalStoreSection data={rentalStoreData} homeSectionDetails={homeSectionDetails} rentalStoreSubtitle={rentalStoreFancyTitle} />
      <DreamBigSection data={dreamBigData} />
      <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
    </>
  );
}

export const getServerSideProps = async () => {
  const [homeSectionDetails, heroSectionData, getInTouchData, studiosSectionData, portfolioCollection, peopleReviewSliderData, marketsSectionData, rentalStoreData, rentalStoreFancyTitle, dreamBigData, socialSectionDetails, socialSectionBlogs, instaFeed] = await Promise.all([
    getHomeSectionDetails(),
    getHeroSectionData(),
    getTouchSectionData(),
    getStudiosSectionData(),
    getPortfolioCollection(),
    getPeopleReviewSliderData(),
    getMarketsSectionData(),
    getRentalStoreData(),
    getRentalStoreFancyTitle(),
    getDreamBigData(),
    getSocialSectionDetails(),
    getSocialSectionBlogs(),
    fetchInstaFeed(),
  ]);
  
  return {
    props: { homeSectionDetails, heroSectionData, getInTouchData, studiosSectionData, portfolioCollection, peopleReviewSliderData, marketsSectionData, rentalStoreData, rentalStoreFancyTitle, dreamBigData, socialSectionBlogs, socialSectionDetails, instaFeed, },
  };
}
