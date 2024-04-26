import { fetchInstaFeed, getDreamBigData, getSocialSectionBlogs, getSocialSectionDetails } from "@/api/home.js";
import { getAboutSlider, getAboutUsCardsSection, getAboutUsDreamTeamSection, getAboutUsIntroSection, getAboutUsRestOfFamily, getAboutUsSectionDetails } from "@/api/about";
import AboutBottomSection from "@/components/aboutPageSections/AboutBottomSection";
import AboutCardsSection from "@/components/aboutPageSections/AboutCardsSection";
import DreamBigSection from "@/components/commonComponents/DreamBigSection";
import SocialSection from "@/components/commonComponents/SocialSection";
import IntroSection from "@/components/aboutPageSections/IntroSection";
import SliderBanner from "@/components/commonComponents/SliderBanner";
import OurFamily from "@/components/aboutPageSections/OurFamily";
import OurDream from "@/components/aboutPageSections/OurDream";
import { markPageLoaded } from "@/utils/utilityFunctions";

const About = ({ aboutUsCardsSection, aboutUsIntroSection, aboutUsDreamTeamSection, aboutUsRestOfFamily, aboutSlider, aboutUsSectionDetails, dreamBigData, socialSectionDetails, socialSectionBlogs, instaFeed }) => {

    markPageLoaded();

    return (
        <>
            <IntroSection data={aboutUsIntroSection} />
            <AboutCardsSection data={aboutUsCardsSection} />
            <OurDream data={aboutUsDreamTeamSection} sectionDetails={aboutUsSectionDetails} />
            <OurFamily data={aboutUsRestOfFamily} sectionDetails={aboutUsSectionDetails} />
            <SliderBanner data={aboutSlider} type={false} sectionDetails={aboutUsSectionDetails} />
            <AboutBottomSection sectionDetails={aboutUsSectionDetails} />
            <DreamBigSection data={dreamBigData} />
            <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed}/>
        </>
    );
};

export const getServerSideProps = async () => {
    const [
        aboutUsCardsSection,
        aboutUsIntroSection,
        aboutUsDreamTeamSection,
        aboutUsRestOfFamily,
        aboutSlider,
        aboutUsSectionDetails,
        dreamBigData, socialSectionDetails, socialSectionBlogs, instaFeed
    ] = await Promise.all([
        getAboutUsCardsSection(),
        getAboutUsIntroSection(),
        getAboutUsDreamTeamSection(),
        getAboutUsRestOfFamily(),
        getAboutSlider(),
        getAboutUsSectionDetails(),
        getDreamBigData(),
        getSocialSectionDetails(),
        getSocialSectionBlogs(),
        fetchInstaFeed(),


    ]);

    return {
        props: {
            aboutUsCardsSection: aboutUsCardsSection,
            aboutUsIntroSection: aboutUsIntroSection,
            aboutUsDreamTeamSection: aboutUsDreamTeamSection,
            aboutUsRestOfFamily: aboutUsRestOfFamily,
            aboutSlider: aboutSlider,
            aboutUsSectionDetails: aboutUsSectionDetails,
            dreamBigData: dreamBigData,
            socialSectionDetails: socialSectionDetails,
            socialSectionBlogs: socialSectionBlogs,
            instaFeed: instaFeed
        },
    };
};

export default About;