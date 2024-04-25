import { fetchCollection } from "..";
import { listPortfolios } from "../listing";

export const getAboutUsCardsSection = async () => {
    try {
        const data = {
            "dataCollectionId": "AboutUsCardsSection",
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
}

export const getAboutUsIntroSection = async () => {
    try {
        const data = {
            "dataCollectionId": "AboutUsIntroSection",
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

export const getAboutUsDreamTeamSection = async () => {
    try {
        const data = {
            "dataCollectionId": "AboutUsDreamTeamSection",
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

export const getAboutUsRestOfFamily = async () => {
    try {
        const data = {
            "dataCollectionId": "AboutUsRestOfFamily",
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
}

export const getAboutSlider = async () => {
    try {
        const options = {
            pageSize: 3,
            disableLoader: true,
        };

        const portfolio = await listPortfolios(options);
        return portfolio._items.map(item => item.data);

    } catch (error) {
        throw new Error(error.message);
    }
}

export const getAboutUsSectionDetails = async () => {
    try {
        const data = {
            "dataCollectionId": "AboutUsSectionDetails",
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

