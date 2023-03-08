import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./loader.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="loader-container">
      <h1 class="loading">Redirecting</h1>
    </div>
  );
});
