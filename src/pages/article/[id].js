import {
  getBlogPostData,
  getBlogProductData,
  getBlogSectionDetails,
  getBlogTags,
} from "@/api/blog";
import {
  fetchInstaFeed,
  getSocialSectionBlogs,
  getSocialSectionDetails,
} from "@/api/home.js";
import PostDetails from "@/components/blogDetailPageSections/PostDetails";
import RecentPosts from "@/components/blogDetailPageSections/RecentPosts";
import SocialSection from "@/components/commonComponents/SocialSection";
import { markPageLoaded } from "@/utils/utilityFunctions";
import Head from "next/head";
import { useRouter } from "next/router";

const Portfolio = ({
  blogSectionDetails,
  blogProductData,
  blogPostData,
  blogTags,
  socialSectionDetails,
  socialSectionBlogs,
  instaFeed,
  meta_data
}) => {
  const router = useRouter();
  markPageLoaded();

  return (
    <>
      <Head>
        <title>{meta_data.title + (blogProductData.seoDesc.title || blogProductData.blogRef.title)}</title>
        <meta name="description" content={blogProductData.seoDesc.description} />
        <meta property="og:title" content={meta_data.title + (blogProductData.seoDesc.title || blogProductData.blogRef.title)} />
        <meta property="og:description" content={blogProductData.seoDesc.description} />
      </Head>
      <PostDetails
        data={blogProductData}
        blogSectionDetails={blogSectionDetails}
        tags={blogTags}
      />
      <RecentPosts
        posts={blogPostData}
        blogSectionDetails={blogSectionDetails}
        id={router.query.id}
      />

      <SocialSection
        data={socialSectionDetails}
        posts={socialSectionBlogs}
        insta_feed={instaFeed}
      />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const [
    blogSectionDetails,
    blogProductData,
    blogPostData,
    socialSectionDetails,
    socialSectionBlogs,
    instaFeed,
  ] = await Promise.all([
    getBlogSectionDetails(),
    getBlogProductData({ slug: context.query.id }),
    getBlogPostData({ pageSize: 4, disableLoader: false, excludeItem: null }),
    getSocialSectionDetails(),
    getSocialSectionBlogs(),
    fetchInstaFeed(),
  ]);
  const blogTags = await getBlogTags({ ids: blogProductData.blogRef.tags });
  return {
    props: {
      blogSectionDetails,
      blogProductData,
      blogPostData,
      blogTags,
      socialSectionDetails,
      socialSectionBlogs,
      instaFeed,
    },
  };
};

export default Portfolio;
