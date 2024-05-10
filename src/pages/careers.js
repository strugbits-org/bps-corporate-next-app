import { getAboutUsCardsSection } from '@/api/about';
import { getCareersIntroSection, getCareersJobsBoard, getCareersPageContent, getWhoWorksSection } from '@/api/careers';
import { fetchInstaFeed, getSocialSectionBlogs, getSocialSectionDetails } from '@/api/home.js';
import AboutCardsSection from '@/components/aboutPageSections/AboutCardsSection';
import { IntroSection } from '@/components/careerPageSections/IntroSection';
import { JobsSection } from '@/components/careerPageSections/JobsSection';
import PeopleReviewSLider from '@/components/commonComponents/PeopleReviewSlider';
import SocialSection from '@/components/commonComponents/SocialSection';
import { markPageLoaded } from '@/utils/utilityFunctions'

export default function Careers({ careersPageContent, careersIntroSection, whoWorksSection, aboutUsCardsSection, socialSectionBlogs, socialSectionDetails, instaFeed }) {
    markPageLoaded();
    return (
        <>
            <IntroSection data={careersIntroSection} />
            <PeopleReviewSLider data={whoWorksSection} homeSectionDetails={careersPageContent} actionButton={false} />
            <AboutCardsSection data={aboutUsCardsSection} />
            {/* <JobsSection jobslist={careersJobsBoard} content={careersPageContent} /> */}
            <JobsSection jobslist={[]} content={careersPageContent} />
            <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
        </>
    )
}

export const getServerSideProps = async () => {
    const [careersPageContent, careersIntroSection, whoWorksSection, aboutUsCardsSection, socialSectionBlogs, socialSectionDetails, instaFeed] = await Promise.all([
        getCareersPageContent(),
        getCareersIntroSection(),
        getWhoWorksSection(),
        getAboutUsCardsSection(),
        getSocialSectionBlogs(),
        getSocialSectionDetails(),
        fetchInstaFeed(),
        // getCareersJobsBoard(),
    ]);

    return {
        props: { careersPageContent, careersIntroSection, whoWorksSection, aboutUsCardsSection, socialSectionBlogs, socialSectionDetails, instaFeed },
    };
};