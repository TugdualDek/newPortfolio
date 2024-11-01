import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="hero-container">
        <div class="hero" data-aos="fade-up" data-aos-delay="300">
          <img
            src="/assets/tugdual.webp"
            alt="Tugdual Audren de Kerdrel"
            class="image"
          />
          <h1>
            Tugdual <br />
            Audren de Kerdrel
          </h1>
        </div>
        <div class="subtitle" data-aos="fade-down" data-aos-delay="600">
          <p>
            Student at{" "}
            <span>
              <a href="https://isep.fr" target="_blank">
                Isep
              </a>
            </span>{" "}
            | SysAdmin at{" "}
            <span>
              <a href="https://bilendi.fr" target="_blank">
                Bilendi
              </a>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
});
