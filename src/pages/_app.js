// import "@/assets/js/app.css";
import Cookies from "@/components/common/Cookies";
import Loading from "@/components/common/Loading";
import { useRouter } from 'next/router'
// import Footer from "@/layout/footer/Footer";
import Navbar from "@/layout/header/Navbar";
// import { getHomeSectionDetails } from "@/api/home.js";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pathname = router.pathname.trim() === "/" ? "home" : router.pathname.substring(1);
  const cleanPath = pathname.split("/")[0].trim();

  return (
    <>
      <Loading />
      <Cookies />
      <Navbar />
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

// export const getServerSideProps = async () => {
//   const [homeSectionDetails] = await Promise.all([
//     getHomeSectionDetails(),
//   ]);
//   console.log("homeSectionDetails", homeSectionDetails);
//   // handleCollectionLoaded();
//   // const progressPercent = Math.ceil(collectionLoaded / collectionsCount * 100);
//   // changeProgress(100);

//   return {
//     props: {
//       homeSectionDetails: homeSectionDetails,
//     },
//   };
// }