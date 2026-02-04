import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import DoubleArrow from "./DoubleArrow";
import { useMaskSettings } from "./../utils";
import Intro from "./Intro";
function Hero() {
  const { initialMaskPos, initialMaskSize, maskSize, maskPos } =
    useMaskSettings();
  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".overlay-logo", { opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 2.5,
        },
        ease: "power1.inOut",
      })
      .to(".fade-out", {
        opacity: 0,
      })
      .to(
        ".scale-out",
        {
          scale: 1,
        },
        "< "
      )
      .to(
        ".mask-wrapper",
        {
          maskSize,
        },
        "<"
      )
      .to(
        ".mask-wrapper",
        {
          maskPosition: maskPos,
        },
        "<"
      )
      .to(".mask-wrapper", { opacity: 0 }, "-=0.2")
      .to(".overlay-logo", { opacity: 1 })
      .to(".entrance-message", {
        maskImage:
          "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
      });
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img src="/images/hero1.jpg" className="scale-out" />
        <DoubleArrow />
      </div>

      <div className="fake-logo-wrapper">
        <img className="overlay-logo" src="/images/white-us-logo.svg" />
      </div>
      <Intro />
    </section>
  );
}

export default React.memo(Hero);
