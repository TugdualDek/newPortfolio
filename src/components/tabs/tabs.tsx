import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./tabs.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    /* Make three tabs with a Link to / /projects and /contact */

    <div class="tabs">
      <div class={"tab "}>
        <Link
          href="/"
          class="tablinks tab"
          style="color: black; text-decoration: none;"
        >
          <span class="tablinks">About</span>
        </Link>
      </div>
      <div class={"tab "}>
        <Link
          href="/projects"
          class="tablinks tab"
          style="color: black; text-decoration: none;"
        >
          <span class="tablinks">Projects</span>
        </Link>
      </div>
      <div class={"tab "}>
        <Link
          href="/contact"
          class="tablinks tab"
          style="color: black; text-decoration: none;"
        >
          <span class="tablinks">Contact</span>
        </Link>
      </div>
    </div>
  );
});
