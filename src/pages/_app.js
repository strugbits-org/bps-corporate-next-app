import Cookies from "@/components/common/Cookies";
import Loading from "@/components/common/Loading";
import { useRouter } from 'next/router'
// import Footer from "@/layout/footer/Footer";
import Navbar from "@/layout/header/Navbar";
import { getMarketsSectionData, getStudiosSectionData } from "@/api/home.js";

export default function App({ Component, pageProps, studios, markets }) {
  const router = useRouter();
  const pathname = router.pathname.trim() === "/" ? "home" : router.pathname.substring(1);
  const cleanPath = pathname.split("/")[0].trim();

  return (
    <>
      <Loading />
      <Cookies />
      <Navbar studios={studios} markets={markets} />
      <div id="main-transition">
        <div id={`pg-${cleanPath}`} className="wrapper" data-scroll-container>
          <main>
            <Component {...pageProps} />
            {/* <Footer /> */}
          </main>
        </div>
      </div>
    </>
  );
}

App.getInitialProps = async () => {
  const [studios, markets] = await Promise.all([
    getStudiosSectionData(),
    getMarketsSectionData(),
  ]);

  return { studios, markets };
};