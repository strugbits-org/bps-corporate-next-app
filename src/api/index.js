import axios from "axios";
import nookies from 'nookies';

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
export const getAllPagesMetaData = async () => {
  try {
    const data = {
      "dataCollectionId": "PageSeoConfiguration",
      "includeReferencedItems": null,
      "returnTotalCount": null,
      "find": {},
      "contains": null,
      "eq": null,
      "limit": null
    }
    const response = await fetchCollection(data);
    return response._items.map((x) => x.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchDataWithCookies = async (context, cookieName, fetchDataFunction) => {
  console.log("cookieName", cookieName);
  const cookies = nookies.get(context);
  console.log("cookies", cookies);
  let data = cookies[cookieName] ? JSON.parse(cookies[cookieName]) : null;

  if (!data) {
    console.log("no cookies");
    data = await fetchDataFunction();
    console.log("data", data);
    nookies.set(context, cookieName, JSON.stringify(data), {
      maxAge: 2 * 60 * 60,
      path: '/',
    });
  }

  return data;
};