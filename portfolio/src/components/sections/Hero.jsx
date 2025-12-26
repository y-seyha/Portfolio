import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../../utils/contains";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../Animation/Fadein";
import RadialGradientBackground from "../background/RadialGradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="hero" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left colums */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5px px-[18px] py-[11px] mb-8 bg-linear=to-r from-primary/10 via-primary/15 to-primary/20 border broder-primary-20 rounded-full ">
                <Star className="w-4 h-4 text-white fill-white " />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                Full Stack Developer
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550px] mb-8">
                Building modern website.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button onClick={() => scrollToSection("contact")} className="">
                <div className="mb-10 relative z-10 bg-white text-[#212121] rounded-[17px] px-[13px] py-[13px] text-base font-medium border border-white">
                  Get in Touch
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((state, index) => (
                  <div
                    key={index}
                    className="text-left border-r border-white/50 pr-10 last:border-r-0"
                  >
                    <div className="text-2xl font-normal text-primary mb-[8px] font-mono">
                      {state.value}
                    </div>
                    <p className="text-sm text-white leading-tight">
                      {state.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right column */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
