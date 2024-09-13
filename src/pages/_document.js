import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="/js/googleTagManager.js"></script>
        <link rel='shortcut icon' href='/favicon.png' />
        <link rel="modulepreload" href="/js/app2.js" />
        <link rel="modulepreload" href="/js/all.js" />
        <link rel="modulepreload" href="/js/search.js" />
        <link rel="modulepreload" href="/js/forms.js" />
        <link rel="modulepreload" href="/js/chat.js" />
        <link rel="preload" as="style" href="/js/utils.css" />
        <link rel="preload" as="style" href="/js/app.css" />
        <link rel="preload" as="style" href="/js/custom.css" />

        <script async type="module" src="/js/app2.js"></script>
        <script async type="module" src="/js/search.js"></script>
        <script async type="module" src="/js/forms.js"></script>
        <script async type="module" src="/js/chat.js"></script>
        <link rel="stylesheet" href="/js/utils.css" />
        <link rel="stylesheet" href="/js/app.css" />
        <link rel="stylesheet" href="/js/custom.css" />
      </Head>
      <body data-scroll-direction="initial" data-search-container>
        <span className="updateWatchedTrigger d-none"></span>
        <span className="initScript d-none"></span>
        <span className="activateChat d-none"></span>
        <Main />
        <NextScript />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBJ97DL"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt=""
            src="https://ct.pinterest.com/v3/?event=init&tid=2613816880133&noscript=1" />
        </noscript>
      </body>
    </Html>
  );
}
