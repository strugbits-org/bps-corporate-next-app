import { fetchInstaFeed, getDreamBigData, getHomeSectionDetails, getPeopleReviewSliderData, getSocialSectionBlogs, getSocialSectionDetails, getStudiosSectionData } from '@/api/home.js';
import { getServiceData, getServicesSectionDetails, getServicesSlider } from '@/api/services';
import DreamBigSection from '@/components/commonComponents/DreamBigSection';
import PeopleReviewSLider from '@/components/commonComponents/PeopleReviewSlider';
import SliderBanner from '@/components/commonComponents/SliderBanner';
import SocialSection from '@/components/commonComponents/SocialSection';
import StudioSection from '@/components/commonComponents/StudioSection';
import ServiceIntro from '@/components/serviceDetailPageSections/ServiceIntro';
import { SubSectionServices } from '@/components/serviceDetailPageSections/SubSectionServices';
import { markPageLoaded } from '@/utils/utilityFunctions'
import Head from 'next/head';

const Services = ({ homeSectionDetails, serviceData, servicesSectionDetails, servicesSlider, peopleReviewSliderData, studiosSectionData, dreamBigData, socialSectionDetails, socialSectionBlogs, instaFeed, meta_data }) => {
  markPageLoaded();
  return (
    <>
      <Head>
        <title>{meta_data.title + serviceData.cardName}</title>
        <meta name="description" content={serviceData.cardDescription} />
        <meta property="og:title" content={meta_data.title + serviceData.cardName} />
        <meta property="og:description" content={serviceData.cardDescription} />
      </Head>
      <ServiceIntro data={serviceData} />
      <SubSectionServices data={serviceData} />
      <SliderBanner data={servicesSlider} type={true} sectionDetails={servicesSectionDetails} />
      <PeopleReviewSLider data={peopleReviewSliderData} homeSectionDetails={homeSectionDetails} />
      <StudioSection studioData={studiosSectionData} homeSectionDetails={homeSectionDetails} />
      <DreamBigSection data={dreamBigData} />
      <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
    </>
  )
}

export const getServerSideProps = async (context) => {
  try {
    const serviceData = await getServiceData(context.query.id);

    if (!serviceData) {
      return {
        notFound: true,
      };
    }
    const [homeSectionDetails, servicesSectionDetails, servicesSlider, peopleReviewSliderData, studiosSectionData, dreamBigData, socialSectionDetails, socialSectionBlogs, instaFeed] = await Promise.all([
      getHomeSectionDetails(),
      getServicesSectionDetails(),
      getServicesSlider(serviceData._id,context.query.id),
      getPeopleReviewSliderData(),
      getStudiosSectionData(),
      getDreamBigData(),
      getSocialSectionDetails(),
      getSocialSectionBlogs(),
      fetchInstaFeed(),
    ]);
    return {
      props: { homeSectionDetails, serviceData, servicesSectionDetails, servicesSlider, peopleReviewSliderData, studiosSectionData, dreamBigData, socialSectionDetails, socialSectionBlogs, instaFeed },
    };

  } catch (error) {
    console.log("Error:", error);
      console.error("Error:", error);
  }
}

export default Services;