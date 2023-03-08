import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./button.css?inline";

export default component$((props: { text: string; to: string }) => {
  useStylesScoped$(styles);

  return (
    <div class="button-container">
      <a class="button" href={props.to}>
        {props.text}
      </a>
    </div>
  );
});
