import { getMarketCollection } from "@/api/market";

function generateSiteMap(origin, urlset) {

  let currentDate = new Date().toISOString().split('T')[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urlset.map((url) => {
    return `
       <url>
           <loc>${url === "home" ? origin : `${origin}/${url}`}</loc>
           <lastmod>${currentDate}</lastmod>
       </url>
     `;
  })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {

}

export async function getServerSideProps({ req, res }) {

  const host = req.headers.host || 'www.blueprintstudios.com';
  const protocol = req.headers['x-forwarded-proto'] ? req.headers['x-forwarded-proto'] : req.connection.encrypted ? 'https' : 'http';
  const origin = `${protocol}://${host}`;

  const markets = await getMarketCollection();
  const markets_routes = markets.map((x) => "market/" + x.slug);

  const sitemap = generateSiteMap(origin, markets_routes);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;