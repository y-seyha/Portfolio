import React from "react";
import { skills } from "../../data/skills";
import { ICONS } from "../../data/icons";
import * as Icons from "lucide-react";
import Fadein from "../Animation/Fadein";

const Skills = () => {
  //skills
  const skillCategory = {
    "Fronted Development": [
      skills.find((s) => s.name === "HTML"),
      skills.find((s) => s.name === "CSS"),
      skills.find((s) => s.name === "JavaScript"),
      skills.find((s) => s.name === "React"),
      skills.find((s) => s.name === "Tailwindcss"),
    ].filter(Boolean),
    "Backend & API": [
      skills.find((s) => s.name === "NodeJS"),
      skills.find((s) => s.name === "ExpressJS"),
      skills.find((s) => s.name === "REST APIs"),
    ].filter(Boolean),
    "Tools and Others": [
      skills.find((s) => s.name === "Git & GitHub"),
      skills.find((s) => s.name === "Vite"),
      skills.find((s) => s.name === "Vitest"),
      skills.find((s) => s.name === "Postman"),
    ].filter(Boolean),
  };

  //Percentage
  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };
    return levels[level] || 50;
  };

  //Level Color
  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[8DFF69]/20 border-[8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    };
    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };

  return (
    <section
      id="skills"
      className="relative py-20 bg-black overflow-hidden cursor-pointer"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Fadein delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Icons.Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary font-medium">
                My Expertise
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
              Skills & Technology
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A comprehensive overview of my technology skills and proficiency
              level
            </p>
          </div>
        </Fadein>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategory).map(
            ([category, categorySkills], categoryIndex) => (
              <Fadein key={category} delay={categoryIndex * 0.2}>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl hover:border-primary/30 transition-all duration-300 group shadow-md hover:shadow-lg p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary/30 to-primary/10 rounded"></div>
                    <h3 className="text-lg font-semibold text-white">
                      {category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon;
                      const proficiency = getProficiencyLevel(skill.level);

                      return (
                        <div key={skill.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            {/* Skill Info */}
                            <div className="flex items-center gap-3">
                              <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                <IconComponent className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm text-white font-medium">
                                  {skill.name}
                                </div>
                                <div className="text-xs text-white/50">
                                  {skill.experience}
                                </div>
                              </div>
                            </div>

                            {/* Skill Level Badge */}
                            <span
                              className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          {/* Skill Bar */}
                          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/30 to-primary/80 transition-all duration-1000 ease-out rounded-full"
                              style={{ width: `${proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 group-hover:to-primary/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </Fadein>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
