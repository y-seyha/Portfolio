import React, { useState } from "react";
import { Download, Code2, Sparkles } from "lucide-react";
import { ICONS } from "../../data/icons";
import {
  PERSONAL_INFO,
  ABOUT_STATS,
  ABOUT_KNOWLEDGE,
} from "../../utils/contains";
import Fadein from "../Animation/Fadein";
import RadialGradientBackground from "../background/RadialGradientBackground";
import { skills } from "../../data/skills";

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* left column  */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <Fadein delay={60}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border-primary/30 bg-primary/10 rounded-full w-fit">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white font-medium">
                    Full-Stack Developer
                  </span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </Fadein>

              <Fadein delay={100}>
                <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Crafting Digital Experience
                </h2>
              </Fadein>

              <Fadein delay={200}>
                <div className="flex flex-col gap-4">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base text-white/70 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Fadein>
            </div>

            <Fadein delay={300}>
              <div className="grid grid-cols-3 gap-8 mb-20">
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-1 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/2 rounded-full ">
                      <div className="text-3xl font-normal text-white mb-2 font-mono">
                        {stat.value}
                      </div>
                      <p className="text-sm text-white/60 leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Fadein>

            <Fadein delay={400}>
              <button
                onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
              >
                <Download className="w-5 h-5 group:hover:translate-y-0.5 transition-transform duration-300" />
                Download Resume
              </button>
            </Fadein>
          </div>

          {/* Right column */}
          <Fadein delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 ml-auto">
              {ABOUT_KNOWLEDGE.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Fadein key={index} delay={index * 100}>
                    <div
                      className="bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col gap-3 hover:bg-primary/20 transition-all duration-300
                          w-full h-[250px] lg:w-[220px] lg:h-[250px] flex-shrink-0"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/30 rounded-full">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-lg">
                        {skill.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed flex-grow">
                        {skill.description}
                      </p>
                    </div>
                  </Fadein>
                );
              })}
            </div>
          </Fadein>
        </div>

        {/* //Skills Grid  */}
        <Fadein delay={500}>
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-normal text-white mb-2">
                Tech Stack & Expertise
              </h3>
              <p className="text-sm text-white/60">
                Technology I work with to build amazing website
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
              {skills.map((skill, index) => {
                const Icon = ICONS[skill.name];

                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                  >
                    {Icon && <Icon className="text-3xl text-primary" />}

                    <div className="text-sm text-white/80 font-medium text-center">
                      {skill.name}
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </Fadein>
      </div>
    </section>
  );
};

export default About;
