import HeroSection from "@/components/homePageSections/HeroSection";
import { fetchInstaFeed, getDreamBigData, getHeroSectionData, getHomeSectionDetails, getMarketsSectionData, getPeopleReviewSliderData, getPortfolioCollection, getRentalStoreData, getRentalStoreFancyTitle, getSocialSectionBlogs, getSocialSectionDetails, getStudiosSectionData, getTouchSectionData } from "@/api/home.js";
import FormConcept from "@/components/homePageSections/FormConcept";
import GetTouchSection from "@/components/homePageSections/GetTouchSection";
import StudioSection from "@/components/commonComponents/StudioSection";
import OurProjectSection from "@/components/homePageSections/OurProjectSection";
import PeopleReviewSLider from "@/components/commonComponents/PeopleReviewSlider";
import MarketSection from "@/components/commonComponents/MarketSection";
import RentalStoreSection from "@/components/homePageSections/RentalStoreSection";
import DreamBigSection from "@/components/commonComponents/DreamBigSection";
import SocialSection from "@/components/commonComponents/SocialSection";
import { handleCollectionLoaded } from "@/utils/pageLoadingAnimation";
// import { handleCollectionLoaded } from "@/utils/pageLoadingAnimation";
// import { handleCollectionLoaded } from "@/utils/pageLoadingAnimation";
// import { changeProgress, handleCollectionLoaded } from "@/utils/pageLoadingAnimation";

export default function Home({ heroSectionData, getInTouchData, studiosSectionData, homeSectionDetails, portfolioCollection, peopleReviewSliderData, marketsSectionData, rentalStoreData, rentalStoreFancyTitle, dreamBigData, socialSectionBlogs, socialSectionDetails, instaFeed }) {
  const changeProgress = (percent) => {
    document.body.style.setProperty("--percentage", percent / 100);
    document.body.style.setProperty("--percentage2", `${percent}%`);
    const elProg = document.querySelector('[data-load-progress]');
    if (elProg) elProg.dataset.loadProgress = percent;
  }

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const body = document.body;
      if (body.classList.contains('menu-active')) body.classList.remove('menu-active');
      window.scrollTo({ top: 0 });
      body.classList.add("page-enter-active");
      body.classList.remove("page-leave-active");

      changeProgress(100);

      window.scrollTo({ top: 0 });
      document.body.dataset.load = "first-leaving";
      setTimeout(() => {
        document.body.dataset.load = "first-done";
      }, 1200);
      document.body.classList.add("first-load-done");


    }, 2000);

    setTimeout(() => {
      document.querySelector(".initScript").click();
      document.querySelector(".updateWatchedTrigger").click();

    }, 2000);
  }

  // setTimeout(() => {
  //   handleCollectionLoaded();
  // }, 1000);

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

  // loadData();
  // handleCollectionLoaded();
  // const progressPercent = Math.ceil(collectionLoaded / collectionsCount * 100);
  // changeProgress(100);

  return {
    props: {
      homeSectionDetails: homeSectionDetails,
      heroSectionData: heroSectionData,
      getInTouchData: getInTouchData,
      studiosSectionData: studiosSectionData,
      portfolioCollection: portfolioCollection,
      peopleReviewSliderData: peopleReviewSliderData,
      marketsSectionData: marketsSectionData,
      rentalStoreData: rentalStoreData,
      rentalStoreFancyTitle: rentalStoreFancyTitle,
      dreamBigData: dreamBigData,
      socialSectionBlogs: socialSectionBlogs,
      socialSectionDetails: socialSectionDetails,
      instaFeed: instaFeed,
    },
  };
}
