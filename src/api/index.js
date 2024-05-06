import cache from 'node-cache';

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

const apiCache = new cache();
const ttl = 10 * 60;

apiCache.on("flush", function () {
  console.log("All Data Flushed");
});
// apiCache.flushAll();

export const fetchCollection = async (payload, disableCache = false) => {
  try {
    const cacheKey = payload.eq && payload.eq[1] ? payload.dataCollectionId.toString() + "_" + payload.eq[1] : payload.dataCollectionId.toString();
    const cachedData = apiCache.get(cacheKey);
    if (cachedData && !disableCache) {
      // console.log("cache found", cacheKey);
      return cachedData;
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
    apiCache.set(cacheKey, data.data.data, ttl);
    return data.data.data;
  } catch (error) {
    console.error('Error fetching collection:', error);
    throw new Error('An error occurred while fetching data');
  }
};

export const fetchCollectionSp = async (payload, disableCache = false) => {
  try {
    const collectionId = payload.dataCollectionId.toString();
    const cacheKey =
      payload.cacheKey ? collectionId + "_" + payload.cacheKey
        : payload.limit === 8 ? collectionId + "_listing_"
          : collectionId;

    const cachedData = apiCache.get(cacheKey);
    if (cachedData && !disableCache) {
      // console.log("cache found", cacheKey);
      return cachedData;
    }

    const response = await fetch(`${base_url}/corporate/query-data-items-excludeditems`, {
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
    apiCache.set(cacheKey, data.data.data, ttl);
    return data.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchBlogTags = async (payload) => {
  try {
    const cacheKey = "blogTags_" + payload.slug;
    const cachedData = apiCache.get(cacheKey);
    if (cachedData) {
      // console.log("cache found", cacheKey);
      return cachedData;
    }
    const response = await fetch(`${base_url}/corporate/blog-tags`, {
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
    apiCache.set(cacheKey, data.data, ttl);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postForm = async (name, payload) => {
  try {
    const response = await fetch(`${base_url}/corporate/post-data/${name}`, {
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
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getInstaFeed = async () => {
  try {
    const cacheKey = "instaFeed";
    const cachedData = apiCache.get(cacheKey);

    if (cachedData) {
      // console.log("cache found", cacheKey);
      return cachedData;
    }

    const response = await fetch(`${base_url}/corporate/instagram/feeds`);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    apiCache.set(cacheKey, data.data.data, ttl);
    return data.data.data;
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