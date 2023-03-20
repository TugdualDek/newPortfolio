import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />

        <link rel="preconnect" href="https://api.fonts.coollabs.io" />
        <link
          rel="preconnect"
          href="https://api.fonts.coollabs.io"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fonts.coollabs.io/css2?family=Ubuntu:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="me" href="https://mastodon.social/@ThugDrk" />
        <link
          rel="preload"
          as="image"
          href="/tugdual.webp"
          type="image/webp"
        ></link>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <script>AOS.init();</script>
        <script
          async
          defer
          src="https://scripts.withcabin.com/hello.js"
        ></script>
      </body>
    </QwikCityProvider>
  );
});
