import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Mail } from "../icons/mail";
import { Linkedin } from "../icons/linkedin";
import styles from "./button.css?inline";

export default component$(
  (props: { text: string; to: string; image: string; id: string }) => {
    useStylesScoped$(styles);

    console.log(props.image);

    return (
      <div class="button-container">
        <form action={props.to}>
          <button>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                {props.id == "mail" ? <Mail /> : <Linkedin size={24} />}
              </div>
            </div>
            <span>{props.text}</span>
          </button>
        </form>
      </div>
    );
  }
);
