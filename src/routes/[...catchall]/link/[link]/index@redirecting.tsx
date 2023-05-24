import { component$, useBrowserVisibleTask$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import Loader from "~/components/loader/loader";

export default component$(() => {
  const location = useLocation();
  const nav = useNavigate();

  const linksAvailable = [
    {
      url: "https://www.linkedin.com/in/tugdual-de-kerdrel/",
      id: "linkedin",
    },
    {
      url: "https://tugdual.kerdrel.com/cv.pdf",
      id: "cv",
    },
    {
      url: "https://github.com/TugdualDek",
      id: "github",
    },
  ];

  useBrowserVisibleTask$(async () => {
    const urlId = location.params.link;

    // check if the urlId is in the list of available links
    const store = linksAvailable.find((link) => link.id === urlId);
    if (!store) {
      //go to the default page
      nav("/");
      return;
    } else {
      window.location.replace(store.url);
      //wait 5seconds before redirecting to the default page
      setTimeout(() => {
        nav("/");
      }, 5000);
    }
  });

  return (
    <div>
      <Loader />
    </div>
  );
});
