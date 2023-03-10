import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./proCard.css?inline";

export default component$(
  (props: {
    num: number;
    sens: string;
    title: string;
    desc: string[];
    tags: string[];
    link?: string;
    img: string;
  }) => {
    useStylesScoped$(styles);

    return (
      <div class="card" key={props.num}>
        <div
          class={"card-content " + props.sens}
          data-aos={"fade-" + props.sens}
        >
          <div class="card-left">
            <h2>{props.title}</h2>
            {props.desc.length > 0 && (
              <div class="desc">
                <p>
                  {props.desc.map((descs) => (
                    <>
                      <span>{descs}</span>
                      <br />
                    </>
                  ))}
                </p>
              </div>
            )}
            {props.link && (
              <>
                <span>
                  <strong>Link : </strong>
                  <a href={props.link} target="_blank">
                    {props.title}
                  </a>
                </span>
              </>
            )}
            <br />
            {props.tags.length > 0 && (
              <div class="tags-container">
                {props.tags.map((tag) => (
                  <span class="tag">{tag} </span>
                ))}
              </div>
            )}
          </div>
          <div class="card-right">
            <img src={props.img} alt={props.title} class="image-projet" />
          </div>
        </div>
      </div>
    );
  }
);
