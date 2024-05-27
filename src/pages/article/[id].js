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
import { listBlogs } from "@/api/listing";
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

export async function getStaticPaths() {
  const articles = await listBlogs({ pageSize: "50", cacheKey: "static_articles_paths_" });

  const paths = articles._items.map((article) => ({
    params: { id: article.data.slug },
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
      getBlogTags({ ids: blogProductData.blogRef.tags, slug: params.id }),
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
      revalidate: 60 * 5,
    };
  } catch (error) {
    console.error("Error:", error);
  }
};

export default Portfolio;
