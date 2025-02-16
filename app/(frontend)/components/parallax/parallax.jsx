"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from 'next/image'

import sliderImage from '@/app/assets/images/used/pinnochio_bnr10.jpg';
import planet01 from '@/app/assets/images/used/char_circle01.png';
import planet02 from '@/app/assets/images/used/char_cat.png';
import planet03 from '@/app/assets/images/used/char_duck01.png';
import planet04 from '@/app/assets/images/used/char_circle01.png';
import plane01 from '@/app/assets/images/used/char_pinno03.png';


gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerLayout = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressScroll, setProgressScroll] = useState(0);
  const [selfProgress, setSelfProgress] = useState(1);
  const [widthSlider, setWidthSlider] = useState(0)
  const [lengthSlider, setLengthSlider] = useState(0)


  useEffect(() => {
    const paralaxOptions = () => {
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

            setLengthSlider(sections.length);

            setWidthSlider(container.offsetWidth);

          },
        },
      });
    }

    paralaxOptions();

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  // console.log(progressScroll - ((widthSlider - widthSlider / 3)));



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
                    <h1 className=" text-[68px] font-bold leading-[76px] ">
                      <span className="text-[#e45f35]">Welcome</span> <br />all dear <br /> Pinnochio's.
                    </h1>
                    <h5 className="text-[22px] text-[#7f8596] mt-4 font-bold font-archivo">
                      Come into our fantasy world, we will fly together
                    </h5>
                    <div className="mt-8">
                      <Link className="flex items-center justify-center w-max max-w-full min-h-14 px-[30px] bg-[#e45f35] rounded-xl font-bold hover:bg-[#2d73ff] transition-all" href={'/'}>
                        Get a About Me
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
                        className="absolute max-w-[210px] bottom-1/4 -left-[100px] z-10"
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
                      <div className="relative w-full h-full rounded-3xl overflow-hidden transition-opacity"
                        style={{
                          transform:
                            `translateY(${(progressScroll - (widthSlider / 2) > 0) ? -(progressScroll - (widthSlider / 2)) * 0.05 : 0}%) scale(${(progressScroll - (widthSlider / 2) > 0) ? 1 - (selfProgress - 0.5) : 1})`,
                          opacity: `${activeIndex < 2 ? 1 : 0}`
                        }}
                      >
                        <div className="absolute top-0 bottom-0 left-0 min-w-full w-max z-0 "
                          style={{
                            transform: `translateX(-${(120 - (120 * (selfProgress * 2))) < 1 ? 0 : 120 - (120 * (selfProgress * 2))}px)`,
                          }}
                        >
                          <Image src={sliderImage} alt='' className="w-full h-full rounded-3xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 bottom-5 right-10 left-10 min-h-[580px] max-h-[880px] z-0 max-w-[780px] px-14 mx-auto pt-[88px]">
                  <div
                    className="block transition-opacity text-center"
                    style={{
                      transform: `translateY(${(progressScroll / 2 > 0) ? ((progressScroll - (widthSlider / 2)) * 0.15 < 0) ? -(((progressScroll - (widthSlider / 2)) * 0.15) * 0.35) : -((progressScroll - (widthSlider / 2)) * 0.1) : 0}%) scale(${(progressScroll - (widthSlider / 2) > 0) ? 1 - (selfProgress - 0.5) : 1})`,
                      opacity: `${activeIndex == 1 ? 1 : 0}`
                    }}
                  >
                    <p className="text-[72px] font-archivo font-bold leading-tight -tracking-[0.03em]">
                      <span className="text-[#e45f35]">Help</span> Pinnochio <br /> not to lie anymore
                    </p>
                    <p className="text-[21px] -tracking-[0.02em] font-archivo font-bold mt-3">
                      Because we will never lie to you all.
                    </p>
                    <div className="mt-8">
                      <Link className="flex items-center justify-center w-max max-w-full mx-auto min-h-14 px-[30px] bg-[#e45f35] rounded-xl font-bold hover:bg-[#2d73ff] transition-all" href={'/'}>
                        See our Story
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute top-5 bottom-5 right-0 left-0 min-h-[580px] w-full mx-auto text-center pt-[88px]">
                  <div
                    className="relative w-full h-full block transition-opacity"
                    style={{
                      transform: `translateY(${(-(widthSlider / 4) + ((progressScroll - (widthSlider - widthSlider / 4)))) * 0.75}px)`,
                      opacity: `${progressScroll - ((widthSlider - widthSlider / 4)) > 0 ? 1 : 0}`
                    }}
                  >
                    <div
                      className="absolute z-10 top-[7%] left-0 max-w-[230px]"
                      style={{
                        transform: `translateX(0%)`,
                      }}
                    >
                      <Image src={planet02} alt='' className="w-full h-auto" />
                    </div>

                    <div
                      className="absolute top-[39%] left-[22%] max-w-[180px]"
                      style={{
                        transform: `translateX(0%)`,
                      }}
                    >
                      <Image src={planet03} alt='' className="w-full h-auto" />
                    </div>

                    <div
                      className="absolute top-[24%] right-[8%] max-w-[260px]"
                      style={{
                        transform: `rotate(${78 - (progressScroll / widthSlider * (360)) * 0.3}deg)`,
                      }}
                    >
                      <Image src={planet04} alt='' className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-5 bottom-5 right-0 left-0 min-h-[580px] max-h-[880px] z-0 max-w-[700px] mx-auto text-center pt-[88px]">
                  <div
                    className="block transition-opacity"
                    style={{
                      transform: `translateY(${(-(widthSlider / 4) + ((progressScroll - (widthSlider - widthSlider / 4)))) * 0.5}px)`,
                      opacity: `${progressScroll - ((widthSlider - widthSlider / 4)) > 0 ? 1 : 0}`
                    }}
                  >
                    <div className="pt-5">
                      <p className="text-[80px] font-archivo font-bold leading-tight -tracking-[0.03em]">
                        Land now to join <br /> the funny battle.
                      </p>
                      <h5 className="text-[32px] text-[#7f8596] mt-4 font-bold font-archivo">
                        Play-to-Earn NFT Marketplace
                      </h5>
                      <div className="mt-8">
                        <Link className="flex items-center justify-center w-max max-w-full mx-auto min-h-14 px-[30px] bg-[#e45f35] rounded-xl font-bold hover:bg-[#2d73ff] transition-all" href={'/'}>
                          Download and Playe
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="block transition-opacity"
                    style={{
                      transform: `translateY(${((widthSlider / 4) - ((progressScroll - (widthSlider - widthSlider / 4)))) * 0.25}px)`,
                      opacity: `${progressScroll - ((widthSlider - widthSlider / 4)) > 0 ? 1 : 0}`
                    }}
                  >
                    <div className="pt-10">
                      <div className="w-full max-w-[375px] m-auto">
                        <Image src={plane01} alt='' className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-5 right-0 left-0  mx-auto text-center pt-[88px]">
                  <div className="relative w-full min-h-[660px] max-h-[880px]">
                    <div className="absolute bottom-12 left-0 block px-20">
                      <p className="text-white text-sm flex items-center gap-x-4">
                        <span className="font-bold">0{activeIndex + 1}</span>
                        <span className="block h-[1px] w-[70px] bg-white"></span>
                        <span className="font-bold">0{lengthSlider}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
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
