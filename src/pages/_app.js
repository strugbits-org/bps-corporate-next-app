import Cookies from "@/components/common/Cookies";
import Loading from "@/components/common/Loading";
import { useRouter } from 'next/router'
// import Footer from "@/layout/footer/Footer";
import Navbar from "@/layout/header/Navbar";
import { getMarketsSectionData, getSearchSectionDetails, getStudiosSectionData } from "@/api/home.js";
import { getContactData, getFooterData, getSocialLinks } from "@/api/footer";
// import ContactUsModal from "@/components/Lightbox/modalComponents/ContactUsModal";
import { getContactUsContent } from "@/api/contact";
import { getAboutUsIntroSection } from "@/api/about";
// import AboutUsVideoModal from "@/components/Lightbox/modalComponents/AboutUsVideoModal";

export default function App({ Component, pageProps, studios, markets, searchContent, footerData, contactData, socialLinks, contactUsContent, aboutUsIntroSection }) {
  const router = useRouter();
  const pathname = router.pathname.trim() === "/" ? "home" : router.pathname.substring(1);
  const cleanPath = pathname.split("/")[0].trim();

  return (
    <>
      <Loading />
      <Cookies />
      {/* <ContactUsModal contactUsContent={contactUsContent} contactData={contactData} socialLinks={socialLinks} /> */}
      {/* <AboutUsVideoModal data={aboutUsIntroSection}/> */}
      <Navbar studios={studios} markets={markets} searchContent={searchContent} />
      <div id="main-transition">
        <div id={`pg-${cleanPath}`} className="wrapper" data-scroll-container>
          <main>
            <Component {...pageProps} />
            {/* <Footer footerData={footerData} contactData={contactData} socialLinks={socialLinks} /> */}
          </main>
        </div>
      </div>
    </>
  );
}

App.getInitialProps = async () => {
  const [studios, markets, searchContent, footerData, contactData, socialLinks, contactUsContent, aboutUsIntroSection] = await Promise.all([
    getStudiosSectionData(),
    getMarketsSectionData(),
    getSearchSectionDetails(),
    getFooterData(),
    getContactData(),
    getSocialLinks(),
    getContactUsContent(),
    getAboutUsIntroSection(),
  ]);

  return { studios, markets, searchContent, footerData, contactData, socialLinks, contactUsContent, aboutUsIntroSection };
};