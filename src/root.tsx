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
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
