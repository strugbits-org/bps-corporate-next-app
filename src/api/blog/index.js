import { fetchCollection } from "..";

export const getBlogSectionDetails = async () => {
    try {
        const data = {
            "dataCollectionId": "BlogSectionDetails",
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