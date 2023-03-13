import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Mail } from "../icons/mail";
import { Linkedin } from "../icons/linkedin";
import styles from "./button.css?inline";
import { Download } from "../icons/download";

export default component$(
  (props: { text: string; to: string; image: string; id: string }) => {
    useStylesScoped$(styles);

    console.log(props.image);

    return (
      <div class="button-container">
        <form action={props.to}>
          <button>
            <div class="svg-wrapper-1">
              <div class={"svg-wrapper"}>
                {props.id == "mail" ? (
                  <Mail />
                ) : props.id == "linkedin" ? (
                  <Linkedin size={30} color="white" />
                ) : (
                  <Download size={30} color="white" />
                )}
              </div>
            </div>
            <span>{props.text}</span>
          </button>
        </form>
      </div>
    );
  }
);
