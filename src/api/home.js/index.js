import { fetchCollection, getInstaFeed } from "..";
import { listBlogs, listPortfolios } from "../listing";

export const getHeroSectionData = async () => {
    try {
        const options = {
            "dataCollectionId": "HomeTopSectionData",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(options);
        return response._items.map((x) => x.data)[0];
    } catch (error) {
        throw new Error(error.message);
    }
}
export const getTouchSectionData = async () => {
    try {
        const options = {
            "dataCollectionId": "GetInTouchSection",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(options);
        return response._items.map((x) => x.data)[0];
    } catch (error) {
        throw new Error(error.message);
    }
}
export const getStudiosSectionData = async () => {
    try {
        const data = {
            "dataCollectionId": "StudiosSection",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(data);
        return response._items.map((x) => x.data).sort((a, b) => a.orderNumber - b.orderNumber);
    } catch (error) {
        throw new Error(error.message);
    }
}
export const getHomeSectionDetails = async () => {
    try {
        const data = {
            "dataCollectionId": "HomeSectionDetails",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(data);
        return response._items.map((x) => x.data)[0];
    } catch (error) {
        throw new Error(error.message);
    }
}
export const getPortfolioCollection = async () => {
    try {
        const response = await listPortfolios({ pageSize: 4, disableLoader: true });
        return response._items.map(x => x.data);
    } catch (error) {
        throw new Error(error.message);
    }
}
export const getPeopleReviewSliderData = async () => {
    try {
        const data = {
            "dataCollectionId": "PeopleReviewSlider",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(data);
        return response._items.map((x) => x.data).sort((a, b) => a.orderNumber - b.orderNumber);
    } catch (error) {
        throw new Error(error.message);
    }
}
export const getMarketsSectionData = async () => {
    try {
        const data = {
            "dataCollectionId": "MarketSection",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(data);
        return response._items.map((x) => x.data).sort((a, b) => a.orderNumber - b.orderNumber);
    } catch (error) {
        throw new Error(error.message);
    }
}
export const getRentalStoreFancyTitle = async () => {
    try {
        const data = {
            "dataCollectionId": "HomeRentalStoreSubtitleStyled",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(data);
        return response._items.map((x) => x.data).sort((a, b) => a.orderNumber - b.orderNumber);
    } catch (error) {
        throw new Error(error.message);
    }
}
export const getRentalStoreData = async () => {
    try {
        const data = {
            "dataCollectionId": "RentalStore",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(data);
        return response._items.map(x => x.data).sort((a, b) => (a.newimagetag === b.newimagetag) ? 0 : a.newimagetag ? -1 : 1);
    } catch (error) {
        throw new Error(error.message);
    }
}
export const getDreamBigData = async () => {
    try {
        const data = {
            "dataCollectionId": "DreamBigSection",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(data);
        return response._items.map(x => x.data)[0];
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getSocialSectionBlogs = async () => {
    try {
        const response = await listBlogs({ pageSize: 9, disableLoader: true });
        return response._items.filter(item => item.data.blogRef._id !== undefined).map(item => item.data);
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getSocialSectionDetails = async () => {
    try {
        const data = {
            "dataCollectionId": "SocialSectionDetails",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(data);
        return response._items.map((x) => x.data)[0];
    } catch (error) {
        throw new Error(error.message);
    }
}

export const fetchInstaFeed = async () => {
    try {
        const response = await getInstaFeed();
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}


export const getSearchSectionDetails = async () => {
  try {
    const data = {
      dataCollectionId: "SearchSectionDetails",
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




  