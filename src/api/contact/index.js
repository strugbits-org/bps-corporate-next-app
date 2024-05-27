import { fetchCollection } from "..";

export const getContactUsContent = async (enableCache) => {
    try {
        const data = {
            "dataCollectionId": "ContactUsContent",
            "includeReferencedItems": null,
            "returnTotalCount": null,
            "find": {},
            "contains": null,
            "eq": null,
            "limit": null
        }
        const response = await fetchCollection(data, enableCache ? "ContactUsContentDataCache" : null);
        return response._items.map((x) => x.data)[0];
    } catch (error) {
        throw new Error(error.message);
    }
}