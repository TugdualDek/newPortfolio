import { component$, Slot } from "@builder.io/qwik";

import Header from "../components/header/header";
import Tabs from "../components/tabs/tabs";

export default component$(() => {
  return (
    <>
      <main class="section">
        <Header />
        <Tabs />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
