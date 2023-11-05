import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button/button";

export default component$(() => {
  return (
    <div>
      <h1 style="text-align: center;">Do not hesitate any longer!</h1>
      <Button
        text="Send me a mail"
        to="mailto:contact@tugdual.com"
        image=""
        id="mail"
      />
      <Button
        text="Go on Linkedin"
        to="https://tugdual.kerdrel.com/link/linkedin"
        image=""
        id="linkedin"
      />
      <Button
        text="See my resume"
        to="https://tugdual.kerdrel.com/link/cv"
        image=""
        id="download"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Tugdual Audren de Kerdrel",
  meta: [
    {
      name: "description",
      content: "Portfolio of Tugdual Audren de Kerdrel",
    },
    {
      name: "keywords",
      content:
        "Portfolio, Tugdual, Audren, Kerdrel, Tugdual Audren de Kerdrel, portfolio, tugdual, kerdrel, audren de kerdrel, tugdual de kerdrel",
    },
    {
      name: "robots",
      content: "all",
    },
    {
      name: "author",
      content: "Tugdual Audren de Kerdrel",
    },
    {
      name: "language",
      content: "en",
    },
    {
      name: "revisit-after",
      content: "1 days",
    },
    {
      name: "google-site-verification",
      content: "2qhNW2IQzYiy95HrkS8zaNSq3ygfQYq7aox6JqYezlE",
    },
    {
      name: "msvalidate.01",
      content: "2962FD7871C539F0A2E8DFDB82D1B89D",
    },
  ],
};
