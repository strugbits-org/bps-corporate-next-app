import { fetchBlogTags, fetchCollection } from "..";
import { listBlogs } from "../listing";

export const getBlogSectionDetails = async () => {
  try {
    const data = {
      dataCollectionId: "BlogSectionDetails",
      includeReferencedItems: null,
      returnTotalCount: null,
      find: {},
      contains: null,
      eq: null,
      limit: null,
    };
    const response = await fetchCollection(data);
    return response._items.map((x) => x.data)[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getBlogProductData = async ({ slug }) => {
  try {
    const data = {
      dataCollectionId: "BlogProductData",
      includeReferencedItems: [
        "blogRef",
        "author",
        "tags",
        "locationFilteredVariant",
        "storeProducts",
        "studios",
        "gallery",
        "media",
        "markets",
      ],
      returnTotalCount: null,
      find: {},
      contains: null,
      eq: ["slug", slug],
      limit: null,
    };
    const response = await fetchCollection(data);
    return response._items.map((x) => x.data)[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getBlogPostData = async ({
  pageSize,
  slug
}) => {
  try {
    const response = await listBlogs({ pageSize, cacheKey: "recent_posts_" + slug, slug });
    const data = response._items
      .filter((item) => item.data.blogRef._id !== undefined)
      .map((item) => item.data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getBlogTags = async ({ ids, slug }) => {
  try {
    const data = { ids: ids, slug };
    const response = await fetchBlogTags(data);
    return response._items;
  } catch (error) {
    throw new Error(error.message);
  }
};
