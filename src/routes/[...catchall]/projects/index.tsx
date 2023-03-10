import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import projects from "../../../data/projects.json";
import ProCard from "~/components/proCard/proCard";

export default component$(() => {

  return (
    <div>
      {projects.map((project) => (
        <ProCard {...project} />
      ))}
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
      content: "Portfolio, Tugdual, Audren, Kerdrel, Tugdual Audren de Kerdrel, portfolio, tugdual, kerdrel, audren de kerdrel, tugdual de kerdrel",
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
      content: "2qhNW2IQzYiy95HrkS8zaNSq3ygfQYq7aox6JqYezlE"
    }
  ],
};