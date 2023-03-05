import { component$, useStylesScoped$ } from "@builder.io/qwik";
import tugdual from "tugdual.jpg";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="hero-container">
        <div class="hero">
          <img src={tugdual} alt="Tugdual Audren de Kerdrel" class="image" />
          <h1>
            Tugdual <br />
            Audren de Kerdrel
          </h1>
        </div>
        <div class="subtitle">
          <p>
            Student at{" "}
            <span>
              <a href="https://isep.fr" target="_blank">
                Isep
              </a>
            </span>{" "}
            | Developper at{" "}
            <span>
              <a href="https://isepinvest.fr" target="_blank">
                IsepInvest
              </a>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
});
