function generateSiteMap(origin, urlset) {
  let currentDate = new Date().toISOString().split('T')[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urlset.map((url) => {
    return `
       <sitemap>
           <loc>${url === "home" ? origin : `${origin}/${url}`}</loc>
           <lastmod>${currentDate}</lastmod>
       </sitemap>
     `;
  })
      .join('')}
   </sitemapindex>
 `;
}

function SiteMap() {

}

export async function getServerSideProps({ req, res }) {

  const host = req.headers.host || 'www.blueprintstudios.com';
  const protocol = req.headers['x-forwarded-proto'] ? req.headers['x-forwarded-proto'] : req.connection.encrypted ? 'https' : 'http';
  const origin = `${protocol}://${host}`;

  const urlset = [
    "pages-sitemap.xml",
    "services-sitemap.xml",
    "markets-sitemap.xml",
    "projects-sitemap.xml",
    "articles-sitemap.xml",
  ];
  const sitemap = generateSiteMap(origin, urlset);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;