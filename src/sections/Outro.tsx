import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
function Outro() {
  useGSAP(() => {
    gsap.set(".final-message", { opacity: 0,y : -300});
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".final-message",
          start: "center center",
          end: "center center",
          scrub: true,
        },
        duration: 2,
        ease: "power1.inOut",
      })
      .to(".final-content", { opacity: 0 })
      .to(".final-message", { opacity: 1 ,y : 0});
  }, []);

  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <div>
          <h2 className="gradient-title">"Revenge won't bring you peace"</h2>
        </div>
        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="w-20 md:w-32" alt="" />
          <img src="/images/x-logo.svg" className="w-40 md:w-52" alt="" />
        </div>
      </div>
    </section>
  );
}

export default React.memo(Outro);
