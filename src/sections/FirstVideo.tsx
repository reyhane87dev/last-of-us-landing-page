import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function FirstVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.set(".first-vd-wrapper", {
      marginTop: "-150vh",
      opacity: 0,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".first-vd-wrapper",
          start: "top top",
          end: "+=180% top",
          scrub: true,
          pin: true,
          onEnterBack: () => {
            videoRef.current!.currentTime = 0;
            videoRef.current!.play();
          },
        },
        delay: 1,
        ease: "power1.inOut",
      })
      .to(".hero-section", {
        opacity: 0,
        onComplete: () => {
          videoRef.current!.play();
        },
      })
      .to(".first-vd-wrapper", { opacity: 1, duration: 1 });
  });

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          className="first-vd"
          src="/videos/last-vid.mp4"
          ref={videoRef}
          playsInline
          preload="auto"
          muted
        />
      </div>
    </section>
  );
}

export default React.memo(FirstVideo);
