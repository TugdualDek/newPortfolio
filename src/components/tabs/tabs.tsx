import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { Arrow } from "../icons/arrow";
import { Linux } from "../icons/linux";
import { School } from "../icons/school";
import styles from "./tabs.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const location = useLocation();

  return (
    /* Make three tabs with a Link to / /projects and /contact */

    <div class="tabs">
      <div
        class={"tab " + (location.url.pathname == "/" ? "active" : "")}
        id="tab1"
      >
        <Link
          href="/"
          class="tablinks tab"
          style={
            "color: var(--black); text-decoration: none; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; flex: 1 1 auto;" +
            (location.url.pathname == "/"
              ? "color: var(--blue); font-weight: bold;"
              : "")
          }
        >
          <School
            size={24}
            color={location.url.pathname == "/" ? "var(--blue);" : ""}
            filled={location.url.pathname == "/" ? true : false}
          />{" "}
          <span class={"tablinks "}> About</span>
        </Link>
      </div>
      <div
        class={"tab " + (location.url.pathname == "/projects/" ? "active" : "")}
      >
        <Link
          href="/projects"
          class="tablinks tab"
          style={
            "color: var(--black); text-decoration: none; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; flex: 1 1 auto;" +
            (location.url.pathname == "/projects/"
              ? "color: var(--blue); font-weight: bold;"
              : "")
          }
        >
          <Linux
            size={24}
            color={location.url.pathname == "/projects/" ? "var(--blue);" : ""}
            filled={location.url.pathname == "/projects/" ? true : false}
          />{" "}
          <span class={"tablinks "}> Projects</span>
        </Link>
      </div>
      <div
        class={"tab " + (location.url.pathname == "/contact/" ? "active" : "")}
      >
        <Link
          href="/contact"
          class="tablinks tab"
          style={
            "color: var(--black); text-decoration: none; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; flex: 1 1 auto;" +
            (location.url.pathname == "/contact/"
              ? "color: var(--blue); font-weight: bold;"
              : "")
          }
        >
          <Arrow
            size={24}
            color={location.url.pathname == "/contact/" ? "var(--blue);" : ""}
            filled={location.url.pathname == "/contact/" ? true : false}
          />{" "}
          <span class={"tablinks "}> Contact</span>
        </Link>
      </div>
    </div>
  );
});
