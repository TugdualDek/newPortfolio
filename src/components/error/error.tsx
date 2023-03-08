import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./error.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="error-container">
      <div id="error">
        <div class="fof">
          <h1>Error 404</h1>
          <p>Page not found</p>
        </div>
      </div>
    </div>
  );
});
