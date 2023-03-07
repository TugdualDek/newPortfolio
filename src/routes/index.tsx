import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ExpCard from "~/components/expCard/expCard";
import experiences from "../data/experience.json";

export default component$(() => {
  return (
    <div>
      {experiences.map((experience) => (
        <ExpCard {...experience} />
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
