import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useGSAP(() => {});

  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <img src="/images/hero2.png" className="size-full object-cover " />
      </div>

      <div className="flex-center bottom-12 absolute gap-10">
        <img src="/images/ps-logo.svg" className="md:w-32 w-20" />
        <img src="/images/x-logo.svg" className="md:w-52 w-40" />
      </div>
    </section>
  );
}

export default React.memo(Hero);
