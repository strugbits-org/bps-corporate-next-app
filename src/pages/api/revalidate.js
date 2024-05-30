import { getAllPagesMetaData } from "@/api";
import { getAllBlogs } from "@/api/blog";
import { getStudiosSectionData } from "@/api/home.js";
import { getMarketCollection } from "@/api/market";
import { listAllPortfolios } from "@/api/portfolio";

export default async function handler(req, res) {
    if (req.query.secret === undefined || req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }
    try {
        const routes = [];
        const success = [];
        const failed = [];

        const [
            pages,
            studios,
            markets,
            portfolios,
            blogs
        ] = await Promise.all([
            getAllPagesMetaData(),
            getStudiosSectionData(),
            getMarketCollection(),
            listAllPortfolios(),
            getAllBlogs()
        ]);

        const subpages = new Set(["/market", "/services", "/project", "/article"]);
        const page_routes = pages.map(page => page.slug === "home" ? "/" : "/" + page.slug).reverse().filter(route => !subpages.has(route));
        routes.push(...page_routes);

        const studios_routes = studios.map(studio => "/services/" + studio.slug);
        routes.push(...studios_routes);

        const markets_routes = markets.map(market => "/market/" + market.slug);
        routes.push(...markets_routes);

        const portfolios_routes = portfolios.map((x) => "/project/" + x.slug);
        routes.push(...portfolios_routes);

        const blogs_routes = blogs.map((x) => "/article/" + x.slug);
        routes.push(...blogs_routes);


        await Promise.all(
            routes.map(async route => {
                try {
                    await res.revalidate(route);
                    success.push(route);
                } catch (error) {
                    failed.push(route);
                    console.error(`Failed to revalidate path: ${route}`, error);
                }
            })
        );

        return res.json({ success, failed });
    } catch (err) {
        console.log("error", err);
        return res.status(500).send('Error revalidating');
    }
}