"use client";

import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import { CONTACT, MARQUEE_ITEMS } from "@/data/portfolio";

const WEB = "/images/web.png";
const SPIDER = "/images/spider.png";
const MASK_TOP = "/images/hero-mask-top.png";
const IDENTITY_BOTTOM = "/images/hero-identity-bottom.png";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const maskImageRef = useRef<HTMLImageElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const websRef = useRef<HTMLDivElement>(null);
  const topTrackRef = useRef<HTMLDivElement>(null);
  const bottomTrackRef = useRef<HTMLDivElement>(null);

  const pointerRef = useRef({ x: 500, y: 500, alpha: 1, size: 50 });

  const quickX = useRef<((value: number) => void) | null>(null);
  const quickY = useRef<((value: number) => void) | null>(null);
  const topTween = useRef<gsap.core.Tween | null>(null);
  const bottomTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "back.out(1.7)" } })
        .fromTo(
          websRef.current!.children,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 0.5,
            scale: 1,
            duration: 2,
            stagger: 0.4,
            ease: "power3.out",
          },
        )
        .fromTo(
          eyebrowRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 },
          "-=1.5",
        )
        .fromTo(
          headingRef.current,
          { x: -150, opacity: 0, skewX: -15 },
          { x: 0, opacity: 1, skewX: 0, duration: 1.2 },
          "-=1.0",
        )
        .fromTo(
          actionsRef.current!.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(2)",
          },
          "-=0.8",
        );

      gsap.to(websRef.current!.children, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "linear",
      });
      gsap.to(websRef.current!.children, {
        scale: 1.1,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      topTween.current = gsap.to(topTrackRef.current, {
        x: "-50%",
        repeat: -1,
        duration: 15,
        ease: "none",
      });
      gsap.set(bottomTrackRef.current, { x: "-50%" });
      bottomTween.current = gsap.to(bottomTrackRef.current, {
        x: "0%",
        repeat: -1,
        duration: 20,
        ease: "none",
      });

      gsap.to(".marquee-text", {
        y: -4,
        yoyo: true,
        repeat: -1,
        duration: 0.8,
        ease: "sine.inOut",
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const pointer = pointerRef.current;
    pointer.x = window.innerWidth / 2;
    pointer.y = window.innerHeight / 2;

    quickX.current = gsap.quickTo(pointer, "x", {
      duration: 0.3,
      ease: "power4.out",
    });
    quickY.current = gsap.quickTo(pointer, "y", {
      duration: 0.3,
      ease: "power4.out",
    });

    const render = () => {
      if (!maskImageRef.current) return;
      const { x, y, alpha, size } = pointer;
      const mask = `radial-gradient(circle ${size}px at ${x}px ${y}px, rgba(0,0,0,${alpha}) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,1) 100%)`;
      maskImageRef.current.style.webkitMaskImage = mask;
      maskImageRef.current.style.maskImage = mask;
    };

    gsap.ticker.add(render);
    return () => gsap.ticker.remove(render);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    quickX.current?.(event.clientX);
    quickY.current?.(event.clientY);
  };

  const handleMouseEnter = () => {
    gsap.to(pointerRef.current, {
      alpha: 0,
      size: 700,
      duration: 0.8,
      ease: "elastic.out(1, 0.7)",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pointerRef.current, {
      alpha: 1,
      size: 50,
      duration: 1.2,
      ease: "power4.inOut",
      overwrite: "auto",
    });
  };

  const slowMarquee = () => {
    if (!topTween.current || !bottomTween.current) return;
    gsap.to([topTween.current, bottomTween.current], {
      timeScale: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const resumeMarquee = () => {
    if (!topTween.current || !bottomTween.current) return;
    gsap.to([topTween.current, bottomTween.current], {
      timeScale: 1,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const renderTrack = (items: string[]) => (
    <>
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center h-full shrink-0">
          {items.map((item, index) => (
            <Fragment key={`${copy}-${index}`}>
              <span className="marquee-text mx-4 md:mx-6 text-sm md:text-base lg:text-xl font-black uppercase italic tracking-widest whitespace-nowrap shrink-0 drop-shadow-sm">
                {item}
              </span>
              <img
                src={index % 2 === 0 ? SPIDER : WEB}
                alt="Separator"
                className="mx-4 md:mx-6 h-full w-auto object-cover shrink-0 drop-shadow-md"
              />
            </Fragment>
          ))}
        </div>
      ))}
    </>
  );

  return (
    <main className="w-full flex flex-col bg-white overflow-hidden">
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-center cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={IDENTITY_BOTTOM}
          alt="Bottom Identity Layer"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-10"
        />
        <img
          ref={maskImageRef}
          src={MASK_TOP}
          alt="Top Mask Layer"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-20"
          style={{ WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }}
        />

        <div
          ref={websRef}
          className="absolute inset-0 pointer-events-none z-[25] overflow-hidden"
        >
          <img
            src={WEB}
            alt="Spider Web Top"
            className="absolute top-0 left-0 w-[400px] h-[400px] object-contain opacity-50 -translate-x-1/4 -translate-y-1/4 mix-blend-multiply"
          />
          <img
            src={WEB}
            alt="Spider Web Bottom"
            className="absolute bottom-0 right-0 w-[500px] h-[500px] object-contain opacity-50 translate-x-1/4 translate-y-1/4 mix-blend-multiply"
          />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 lg:left-24 z-30 flex flex-col gap-3 pointer-events-none drop-shadow-md max-w-lg w-full">
          <span
            ref={eyebrowRef}
            className="text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em] opacity-0"
          >
            Your Friendly Neighborhood Developer
          </span>
          <h1
            ref={headingRef}
            className="text-gray-900 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none opacity-0 italic uppercase"
            style={{ textShadow: "4px 4px 0px #ef4444, 7px 7px 0px #a31515" }}
          >
            SWATI
            <br />
            MUKHERJEE.
          </h1>
          <div
            ref={actionsRef}
            className="flex flex-wrap items-center gap-4 mt-6 pointer-events-auto"
          >
            <a
              href="#projects"
              className="relative overflow-hidden bg-[#a31515] hover:bg-[#7a0f0f] text-white px-8 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(163,21,21,0.4)] cursor-pointer uppercase border border-[#a31515]"
            >
              Explore Projects
            </a>
            <a
              href={CONTACT.resume}
              download
              className="flex items-center gap-2 text-white bg-gray-900 hover:bg-black px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] uppercase text-sm group"
            >
              <svg
                className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              swati_mukherjee_cv.pdf
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative w-full h-[20vh] md:h-[30vh] bg-white overflow-hidden flex items-center justify-center z-40"
        onMouseEnter={slowMarquee}
        onMouseLeave={resumeMarquee}
      >
        <div className="absolute w-[110vw] h-12 md:h-16 lg:h-20 bg-[#a31515] text-white border-y-[3px] border-black rotate-[4deg] -translate-y-4 md:-translate-y-6 shadow-[0_10px_20px_rgba(0,0,0,0.4)] z-20 flex items-center overflow-hidden scale-105">
          <div ref={topTrackRef} className="flex items-center h-full w-max">
            {renderTrack(MARQUEE_ITEMS)}
          </div>
        </div>
        <div className="absolute w-[110vw] h-12 md:h-16 lg:h-20 bg-[#111111] text-[#a31515] border-y-[3px] border-[#a31515] rotate-[-4deg] translate-y-4 md:translate-y-6 shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-10 flex items-center overflow-hidden scale-105">
          <div ref={bottomTrackRef} className="flex items-center h-full w-max">
            {renderTrack(MARQUEE_ITEMS)}
          </div>
        </div>
      </section>
    </main>
  );
}
