import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
      <link rel="modulepreload" href="/js/app2.js" />
        <link rel="modulepreload" href="/js/all.js" />
        <link rel="modulepreload" href="/js/search.js" />
        <link rel="modulepreload" href="/js/forms.js" />
        <link rel="modulepreload" href="/js/chat.js" />
        <link rel="preload" as="style" href="/js/utils.css" />
        <link rel="preload" as="style" href="/js/app.css" />

        <script type="module" src="/js/app2.js"></script>
        <script type="module" src="/js/search.js"></script>
        <script type="module" src="/js/forms.js"></script>
        <script type="module" src="/js/chat.js"></script>
        <link rel="stylesheet" href="/js/utils.css" />
        <link rel="stylesheet" href="/js/app.css" />
      </head>
      <body data-scroll-direction="initial" data-search-container>
        <span className="updateWatchedTrigger d-none"></span>
        <span className="triggerSplitWordAnimation d-none"></span>
        <span className="initScript d-none"></span>
        <span className="stickyAnimationTrigger d-none"></span>

        {/* <link rel="modulepreload" href="/js/app2.js" />
        <link rel="modulepreload" href="/js/all.js" />
        <link rel="modulepreload" href="/js/search.js" />
        <link rel="modulepreload" href="/js/forms.js" />
        <link rel="modulepreload" href="/js/chat.js" />
        <link rel="preload" as="style" href="/js/utils.css" />
        <link rel="preload" as="style" href="/js/app.css" />

        <script type="module" src="/js/app2.js"></script>
        <script type="module" src="/js/search.js"></script>
        <script type="module" src="/js/forms.js"></script>
        <script type="module" src="/js/chat.js"></script>
        <link rel="stylesheet" href="/js/utils.css" />
        <link rel="stylesheet" href="/js/app.css" /> */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
