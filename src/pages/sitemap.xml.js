import { getAllPagesMetaData } from "@/api";

const EXTERNAL_DATA_URL = typeof window !== 'undefined' ? window.location.origin : "";

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
      .map(({ slug }) => {
        return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
       </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {

}

export async function getServerSideProps({ res }) {
  const pages = await getAllPagesMetaData();
  const sitemap = generateSiteMap(pages.reverse());
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;