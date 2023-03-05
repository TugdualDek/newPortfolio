import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./proCard.css?inline";

export default component$(
  (props: { title: string; desc: string; link?: string }) => {
    useStylesScoped$(styles);

    return (
      <div class="container">
        <div class="card">
          <div class="image"></div>
          <div class="content">
            <span class="title">{props.title}</span>

            <p class="desc">{props.desc}</p>

            <a href={props.link ? props.link : "#"} class="action">
              Find out more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
);
