import { fetchCollection } from "..";

export const getPortfolioSectionDetails = async () => {
    try {
        const data = {
            "dataCollectionId": "PortfolioSectionDetails",
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