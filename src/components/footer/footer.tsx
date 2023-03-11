import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Github } from "../icons/github";
import { Linkedin } from "../icons/linkedin";
import { Mastodon } from "../icons/mastodon";
import styles from "./footer.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div class="footer-container">
        <div class="footer">
          <div class="footer-left">
            <h2>Tugdual Audren de Kerdrel</h2>
          </div>
          <div class="footer-right">
            <div class="item">
              <a href="https://tugdual.kerdrel.com/link/linkedin">
                <Linkedin size={30} color="blue" />
              </a>
            </div>
            <div class="item">
              <a href="https://tugdual.kerdrel.com/link/github">
                <Github />
              </a>
            </div>
            <div class="item">
              <a href="https://mastodon.social/@ThugDrk" target="_blank">
                <Mastodon />
              </a>
            </div>
            <div class="item">
              <Link
                href="/contact"
                style="color: white; padding: 15px; text-decoration: none; border-radius: 8px; background-color: var(--black);"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
