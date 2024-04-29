import { fetchInstaFeed, getSocialSectionBlogs, getSocialSectionDetails } from "@/api/home.js";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded } from "@/utils/utilityFunctions";
import { useEffect, useState } from "react";

export default function Custom404() {
  const [socialSectionDetails, setSocialSectionDetails] = useState(null);
  const [socialSectionBlogs, setSocialSectionBlogs] = useState([]);
  const [instaFeed, setInstaFeed] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const [socialSectionDetails, socialSectionBlogs, instaFeed] = await Promise.all([
        getSocialSectionDetails(),
        getSocialSectionBlogs(),
        fetchInstaFeed(),
      ]);
      setSocialSectionDetails(socialSectionDetails);
      setSocialSectionBlogs(socialSectionBlogs);
      setInstaFeed(instaFeed);
      markPageLoaded();
    }
    fetchData();
  }, [])

  return (
    <>
      <section class="section-error-404">
        <div class="container-title">
          <h1 class="fs--900 blue-1 split-chars" data-aos="d:loop"><span>404</span></h1>
          <span class="fs--20 fw-600 text-uppercase" data-aos="fadeIn .8s ease-in-out .6s">PAGE NOT FOUND</span>
        </div>
      </section>
      <SocialSection data={socialSectionDetails} posts={socialSectionBlogs} insta_feed={instaFeed} />
    </>
  );
}
