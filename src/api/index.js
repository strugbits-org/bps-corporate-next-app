import axios from "axios";
import cache from 'node-cache';

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const _fetchCollection = async (payload) => {
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

const apiCache = new cache();

apiCache.on("flush", function () {
  console.log("All Data Flushed");
});
// apiCache.flushAll();

export const fetchCollection = async (payload) => {
  try {
    const cacheKey = payload.eq && payload.eq[1] ? payload.dataCollectionId.toString() + "_" + payload.eq[1] : payload.dataCollectionId.toString();
    const cachedData = apiCache.get(cacheKey);
    if (cachedData) {
      console.log("cache found", cachedData._items[0].dataCollectionId);
      return cachedData;
    } else {
      console.error("cache not found", cacheKey);
    }

    const response = await fetch(`${base_url}/corporate/query-data-items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    const ttl = 10 * 60;
    apiCache.set(cacheKey, data.data.data, ttl);
    return data.data.data;
  } catch (error) {
    console.error('Error fetching collection:', error);
    throw new Error('An error occurred while fetching data');
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