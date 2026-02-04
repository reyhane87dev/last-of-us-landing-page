import React from 'react'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


function Final() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  useGSAP(()=>{
    gsap.set('.final-content',{
      opacity : 0,
    })

    gsap.timeline({
      scrollTrigger : {
        trigger : ".final",
        start : 'top 70%',
        end : "70% top",
        scrub : true,
      },
      ease : "power1.inOut"
    }).to('.final-content',{
      opacity : 1,
      duration : 1,
    }).to('.final-content',{opacity : 0,delay : 2})

  videoRef.current!.onloadedmetadata = () => {
    gsap.to(videoRef.current, {
      currentTime: videoRef.current!.duration - 4,
      ease: "none",
      scrollTrigger: {
        trigger: ".final",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  };

    },[])

  return (
    <section className="final" >
      <div className="final-content size-full" >
        <video ref={videoRef} className="size-full object-cover" playsInline muted preload="auto" src="/videos/last-vid-3.mp4" />
      </div>
    </section>
  )
}

export default React.memo(Final)

