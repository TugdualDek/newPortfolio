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
      content: "Tugdual's Portfolio",
    },
  ],
};
