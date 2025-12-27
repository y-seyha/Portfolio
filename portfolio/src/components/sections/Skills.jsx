import React from "react";
import { skills } from "../../data/skills";
import {ICONS} from '../../data/icons'
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

  return <div></div>;
};

export default Skills;
