import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register of plugins from gsap
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);

import Header from "@/components/Layout/Header";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
