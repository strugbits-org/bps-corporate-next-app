import {
  getAllBlogs,
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
      />

      <SocialSection
        data={socialSectionDetails}
        posts={socialSectionBlogs}
        insta_feed={instaFeed}
      />
    </>
  );
};

export async function getStaticPaths() {
  const articles = await getAllBlogs();

  const paths = articles.map((article) => ({
    params: { id: article.slug },
  }));

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {
  try {
    const blogProductData = await getBlogProductData({
      slug: params.id,
    });
    if (!blogProductData || blogProductData.isHidden) {
      return {
        notFound: true,
      };
    }
    const [
      blogSectionDetails,
      blogPostData,
      blogTags,
      socialSectionDetails,
      socialSectionBlogs,
      instaFeed,
    ] = await Promise.all([
      getBlogSectionDetails(),
      getBlogPostData({ pageSize: 4, slug: params.id }),
      getBlogTags({ ids: blogProductData.blogRef.tags }),
      getSocialSectionDetails(),
      getSocialSectionBlogs(),
      fetchInstaFeed(),
    ]);
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
      revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
    };
  } catch (error) {
    console.error("Error:", error);
  }
};

export default Portfolio;
