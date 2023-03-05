import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProCard from "~/components/proCard/proCard";

export default component$(() => {
  const projects = [
    {
      title: "Portfolio",
      desc: "My portfolio",
      link: "https://tugdual.kerdrel.com",
    },
    {
      title: "Portfolio",
      desc: "My portfolio",
    },
  ];

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
