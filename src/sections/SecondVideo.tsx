import React from 'react'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'


function SecondVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useGSAP(()=>{
    gsap.set('.abby',{
      opacity : 0,
      marginTop : '-60vh'
    })

    gsap.timeline({
      scrollTrigger : {
        trigger : ".abby",
        start : "top top",
        end : "bottom top",
        scrub : true,
        pin : true,
        onEnterBack : ()=>{
          videoRef.current!.currentTime = 0;
          videoRef.current!.play();
        },
        onEnter : ()=>{
          videoRef.current!.currentTime = 0;
          videoRef.current!.play();
        },
      }
    }).to('.abby',{
      opacity : 1,
      duration : 1,
      ease : "power1.inOut"
    })
  })

  return (
    <section className="abby" >
     <div className="h-dvh" >
        <video className="second-vd" src="/videos/last-vid-2.mp4" ref={videoRef} playsInline preload="auto" muted />
     </div>
    </section>
  )
}

export default React.memo(SecondVideo)