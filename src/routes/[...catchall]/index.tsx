import { component$, useBrowserVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import ExpCard from "~/components/expCard/expCard";
import experiences from "../../data/experience.json";

export default component$(() => {
  const location = useLocation();
  const nav = useNavigate();

  const possibleRoutes = ["/", "/projects", "/contact", "/404", "/link"];

  useBrowserVisibleTask$(async () => {
    const url = location.url.pathname;

    //check if the url is in the list of available routes or begin with /link
    const route = possibleRoutes.find(
      (route) => route === url || url.startsWith("/link")
    );
    if (!route) {
      //go to the 404 page
      nav("/404");
      return;
    } else {
      nav(url);
    }
  });

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
