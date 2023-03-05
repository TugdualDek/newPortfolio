import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import ExpCard from "~/components/expCard/expCard";

export default component$(() => {
  const experiences = [
    {
      logo: "/logo.webp",
      alt: "IsepInvest",
      title: "Developper at IsepInvest",
      subtitle: "Web and bot discord development",
      year: "October 2021 - ...",
    },
    {
      logo: "/isep.png",
      alt: "isep",
      title: "Student at Isep",
      subtitle:
        "International Integrated Cycle, First year of the Engineering Cycle",
      year: "2020 - 2025",
    },
    {
      logo: "/cvut.png",
      alt: "cvut",
      title: "Student at CVUT",
      subtitle: "Erasmus exchange at Czech Technical University in Prague",
      year: "february 2022 - june 2022",
    },
    {
      logo: "/adamantia.jpeg",
      alt: "adamantia",
      title: "Internship at Adamantia",
      subtitle:
        "Information system audit, IT awareness and process optimization",
      year: "june 2021 - july 2021",
    },
    {
      logo: "/la_roche.png",
      alt: "la_roche",
      title: "Lycée La Rochefoucauld",
      subtitle: "Baccalauréat S - Physics-Chemistry Specialty",
      year: "2017 - 2020",
    },
    {
      logo: "/catharines.jpg",
      alt: "catharines",
      title: "St Catharine's College",
      subtitle: "Computer Science International course",
      year: "july 2019",
    },
    {
      logo: "/sg.png",
      alt: "sg",
      title: "Internship at Société Générale",
      subtitle:
        "Innov8 laboratory, YoDa chatbot, Pepper robots, presentation of the agile method",
      year: "june 2018",
    },
  ];
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
