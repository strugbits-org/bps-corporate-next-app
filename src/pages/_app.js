import Cookies from "@/components/common/Cookies";
import Loading from "@/components/common/Loading";
import { useRouter } from 'next/router'
// import Footer from "@/layout/footer/Footer";
import Navbar from "@/layout/header/Navbar";

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