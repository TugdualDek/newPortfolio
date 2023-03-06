import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  /* const projects = [
    {
      num: 1,
      title: "Portfolio",
      desc: "My portfolio",
      link: "https://tugdual.kerdrel.com",
    },
    {
      num: 2,
      title: "Portfolio",
      desc: "My portfolio",
    },
  ]; */

  return (
    <div>
      <h1 style="text-align: center; padding: 10px;">
        Here will be all my projects
      </h1>
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
