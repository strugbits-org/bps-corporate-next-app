import Cookies from "@/components/common/Cookies";
import Loading from "@/components/common/Loading";
import { useRouter } from 'next/router'
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "@/layout/footer/Footer";
import Navbar from "@/layout/header/Navbar";
import { getMarketsSectionData, getSearchSectionDetails, getStudiosSectionData } from "@/api/home.js";
import { getContactData, getFooterData, getSocialLinks } from "@/api/footer";
import ContactUsModal from "@/components/Lightbox/modalComponents/ContactUsModal";
import { getContactUsContent } from "@/api/contact";
import { getAboutUsIntroSection } from "@/api/about";
import AboutUsVideoModal from "@/components/Lightbox/modalComponents/AboutUsVideoModal";
import { getPageMetaData } from "@/api";
import Head from "next/head";

export default function App({ Component, pageProps, studios, markets, searchContent, footerData, contactData, socialLinks, contactUsContent, aboutUsIntroSection, meta_data }) {
  const router = useRouter();
  const pathname = router.pathname.trim() === "/" ? "home" : router.pathname.substring(1);
  const page_name = pathname.split("/")[0].trim();

  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT
  return (
    <>
      <Head>
        {!pathname.includes("/") && meta_data && (
          <>
            <title>{meta_data.title}</title>
            <meta name="description" content={meta_data.description} />
            <meta property="og:title" content={meta_data.title} />
            <meta property="og:description" content={meta_data.description} />
          </>)}
        {environment === "PRODUCTION" ?
          (meta_data?.noFollowTag && <meta name="robots" content="noindex,nofollow" />)
          : <meta name="robots" content="noindex,nofollow" />}
      </Head>
      <Loading />
      <Cookies />
      <ContactUsModal contactUsContent={contactUsContent} contactData={contactData} socialLinks={socialLinks} />
      <AboutUsVideoModal data={aboutUsIntroSection} />
      <Navbar studios={studios} markets={markets} searchContent={searchContent} />
      <div id="main-transition">
        <div id={`pg-${page_name}`} className="wrapper" data-scroll-container>
          <main>
            <Component {...pageProps} meta_data={meta_data} />
            <SpeedInsights />
            <Footer footerData={footerData} contactData={contactData} socialLinks={socialLinks} />
          </main>
        </div>
      </div>
    </>
  );
}

App.getInitialProps = async (context) => {
  const router = context.router;
  const pathname = router.pathname.trim() === "/" ? "home" : router.pathname.substring(1);
  const page_name = pathname.split("/")[0].trim();

  const [studios, markets, searchContent, footerData, contactData, socialLinks, contactUsContent, aboutUsIntroSection, meta_data] = await Promise.all([
    getStudiosSectionData(),
    getMarketsSectionData(),
    getSearchSectionDetails(),
    getFooterData(),
    getContactData(),
    getSocialLinks(),
    getContactUsContent(),
    getAboutUsIntroSection(),
    getPageMetaData(page_name),
  ]);


  return { studios, markets, searchContent, footerData, contactData, socialLinks, contactUsContent, aboutUsIntroSection, meta_data };
};