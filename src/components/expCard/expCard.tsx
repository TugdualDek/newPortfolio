import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./expCard.css?inline";

export default component$(
  (props: {
    num: number;
    logo: string;
    alt: string;
    title: string;
    subtitle: string;
    year: string;
    side: string;
  }) => {
    useStylesScoped$(styles);

    return (
      <div class="card" key={props.num}>
        <div class="card-content" data-aos={"fade-" + props.side}>
          <div class="imgText">
            <picture>
              <source srcSet={props.logo + ".webp"} type="image/webp" />
              <img src={props.logo + ".png"} alt={props.alt} class="image" title={props.alt} />
            </picture>

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
