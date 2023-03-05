import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./expCard.css?inline";

export default component$(
  (props: {
    logo: string;
    alt: string;
    title: string;
    subtitle: string;
    year: string;
  }) => {
    useStylesScoped$(styles);

    return (
      <div class="card">
        <div class="card-content">
          <div class="imgText">
            <img src={props.logo} alt={props.alt} class="image" />
            <div class="text">
              <span class="titre">{props.title}</span>
              <span class="sousTtitre">{props.subtitle}</span>
            </div>
          </div>
          <div class="year">
            <span>{props.year}</span>
          </div>
        </div>
      </div>
    );
  }
);
