import { fetchCollection } from "..";
import { listBlogs, listPortfolios } from "../listing";

export const getContactUsContent = async () => {
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
        const response = await fetchCollection(data);
        return response._items.map((x) => x.data)[0];
    } catch (error) {
        throw new Error(error.message);
    }
}