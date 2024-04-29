import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const fetchCollection = async (payload) => {
  try {
    let data = JSON.stringify(payload);
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      base_url + "/corporate/query-data-items",
      data,
      { headers }
    );
    return response.data.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCollectionSp = async (payload) => {
  try {
    let data = JSON.stringify(payload);
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      base_url + "/corporate/query-data-items-excludeditems",
      data,
      { headers }
    );
    return response.data.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchBlogTags = async (payload) => {
  try {
    let data = JSON.stringify(payload);
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(base_url + "/corporate/blog-tags", data, {
      headers,
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postForm = async (name, payload) => {
  try {
    let data = JSON.stringify(payload);
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      base_url + "/corporate/post-data/" + name,
      data,
      { headers }
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getInstaFeed = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.get(base_url + "/corporate/instagram/feeds", {
      headers,
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPageMetaData = async (path) => {
  try {
    const data = {
      "dataCollectionId": "PageSeoConfiguration",
      "includeReferencedItems": null,
      "returnTotalCount": null,
      "find": {},
      "contains": null,
      "eq": ["slug", path],
      "limit": null
    }
    const response = await fetchCollection(data);
    return response._items.map((x) => x.data)[0];
  } catch (error) {
    throw new Error(error.message);
  }
};