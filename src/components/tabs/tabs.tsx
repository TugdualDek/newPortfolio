import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
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
            "color: black; text-decoration: none; width: 100%; height: 100%;" +
            (location.url.pathname == "/"
              ? "color: var(--blue); font-weight: bold;"
              : "")
          }
        >
          <span class={"tablinks "}>About</span>
        </Link>
      </div>
      <div
        class={"tab " + (location.url.pathname == "/projects/" ? "active" : "")}
      >
        <Link
          href="/projects"
          class="tablinks tab"
          style={
            "color: black; text-decoration: none; width: 100%; height: 100%;" +
            (location.url.pathname == "/projects/"
              ? "color: var(--blue); font-weight: bold;"
              : "")
          }
        >
          <span class={"tablinks "}>Projects</span>
        </Link>
      </div>
      <div
        class={"tab " + (location.url.pathname == "/contact/" ? "active" : "")}
      >
        <Link
          href="/contact"
          class="tablinks tab"
          style={
            "color: black; text-decoration: none; width: 100%; height: 100%;" +
            (location.url.pathname == "/contact/"
              ? "color: var(--blue); font-weight: bold;"
              : "")
          }
        >
          <span class={"tablinks "}>Contact</span>
        </Link>
      </div>
    </div>
  );
});
