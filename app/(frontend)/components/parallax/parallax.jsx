"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from 'next/image'

import sliderImage from '@/app/assets/images/slide-pic-1.webp';
import planet01 from '@/app/assets/images/planet-3.webp';
import planet02 from '@/app/assets/images/planet-5.webp';
import planet03 from '@/app/assets/images/planet-6.webp';


gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerLayout = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressScroll, setProgressScroll] = useState(0);
  const [selfProgress, setSelfProgress] = useState(1);


  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(".section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${container.offsetWidth}`, // Dynamic height based on container width
        onUpdate: (self) => {

          let progress = container.offsetWidth * self.progress;
          setProgressScroll(progress);

          let opacity = self.progress;
          setSelfProgress(opacity);

          const index = Math.round(self.progress * (sections.length - 1));
          setActiveIndex(index);
        },
      },
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);


  return (
    <div className="">
      <div className="relative w-full">
        <div
          ref={containerRef}
          className="scroll-container pt-[88px]"
          style={{ overflow: "hidden", position: "relative", height: "120vh" }}
        >
          <div className="sections">
            <div className="absolute top-0 right-0 left-0 bottom-0 pt-[104px] z-10 overflow-hidden">
              <div className="relative max-w-[1440px] mx-auto h-screen w-full">
                <div
                  className="absolute top-0 left-0 px-20 z-10"
                  style={
                    {
                      transform: `translateX(-${progressScroll / 3.5}px)`,
                      opacity: `${1 - (selfProgress * 2.5)}`
                    }
                  }
                >
                  <div className={`pt-[104px] w-[505px] max-w-full`}>
                    <h1 className=" text-[80px] font-bold leading-[88px] ">
                      Join the <br /> intergalactic <br /> battle.
                    </h1>
                    <h5 className="text-[32px] text-[#7f8596] mt-4 font-bold font-archivo">
                      Play-to-Earn NFT Marketplace
                    </h5>
                    <div className="mt-8">
                      <Link className="flex items-center justify-center w-max max-w-full min-h-14 px-[30px] bg-[#e45f35] rounded-xl font-bold hover:bg-[#2d73ff] transition-all" href={'/'}>
                        Get a character
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute top-5 bottom-5 right-0 left-0 h-full max-h-[880px] z-0 max-w-[1360px] mx-auto flex justify-end">
                  <div className="w-1/2 h-full"
                    style={{
                      width: `${50 + (selfProgress * 100) > 100 ? 100 : 50 + (selfProgress * 100)}%`,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <div
                        className="absolute bottom-1/4 -left-[180px] z-10"
                        style={{
                          transform: `translateX(-${(selfProgress * 2) * 100}%)`,
                          opacity: `${1 - (selfProgress * 2.5)}`
                        }}
                      >
                        <Image src={planet01} alt='' className="w-full h-auto" />
                      </div>

                      <div
                        className="absolute top-[9%] -left-[17.5%] z-10 max-w-[230px]"
                        style={{
                          transform: `translateX(-${(selfProgress * 2) * 100}%)`,
                          opacity: `${1 - (selfProgress * 2.5)}`
                        }}
                      >
                        <Image src={planet02} alt='' className="w-full h-auto" />
                      </div>

                      <div
                        className="absolute top-[31%] -right-[7.5%] z-10 max-w-[150px]"
                        style={{
                          transform: `translate(-${(selfProgress * 5) * 100}%, ${(selfProgress * 5) * 100}%)`,
                          opacity: `${1 - (selfProgress * 2.5)}`
                        }}
                      >
                        <Image src={planet03} alt='' className="w-full h-auto" />
                      </div>
                      <div className="relative w-full h-full rounded-3xl overflow-hidden">
                        <div className="absolute top-0 bottom-0 left-0 min-w-full w-max z-0 "
                          style={{
                            transform: `translateX(-${(163 - (163 * (selfProgress * 2))) < 1 ? 0 : 163 - (163 * (selfProgress * 2))}px)`,
                          }}
                        >
                          <Image src={sliderImage} alt='' className="w-full h-full rounded-3xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-5 bottom-5 right-0 left-0 min-h-[580px] max-h-[880px] z-0 max-w-[700px] mx-auto text-center pt-[88px]">
                  <div
                    className="block transition-all"
                    style={{
                      transform: `translateY(${activeIndex == 1 ? 0 : 30}%)`,
                      opacity: `${activeIndex == 1 ? 1 : 0}`
                    }}
                  >
                    <p className="text-[80px] font-archivo font-bold leading-tight -tracking-[0.03em]">
                      Protect your planet. Earn 2x money.
                    </p>
                    <p className="text-[32px] -tracking-[0.02em] font-archivo font-bold mt-3">
                      Play-to-Earn NFT Marketplace
                    </p>
                    <div className="mt-8">
                      <Link className="flex items-center justify-center w-max max-w-full mx-auto min-h-14 px-[30px] bg-[#e45f35] rounded-xl font-bold hover:bg-[#2d73ff] transition-all" href={'/'}>
                        See how it work
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section bg-green-700"></div>
          </div>


          <style jsx>{`
        .scroll-container {
          width: 100%;
        }

        .sections {
          display: flex;
          width: calc(100% * 3); /* Adjust based on number of sections */
        }

        .section {
          flex: 1;
          min-width: 100vw;
          height: 100vh;
        }

      `}</style>
        </div>
      </div>
    </div >
  );
};

export default ScrollTriggerLayout;
