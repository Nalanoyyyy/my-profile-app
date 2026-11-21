import React from "react";
import { FaReact, FaHtml5, FaJs, FaGithub } from "react-icons/fa";
import { SiFigma, SiNextdotjs } from "react-icons/si";

interface SkillItem {
  name: string;
  percent: string;
  icon: React.ReactNode;
  active?: boolean;
}

const skillsData: SkillItem[] = [
  {
    name: "React",
    percent: "60%",
    icon: <FaReact size={28} className="text-cyan-400" />,
    active: true,
  },
  {
    name: "Figma",
    percent: "85%",
    icon: <SiFigma size={24} className="text-white" />,
  },
  {
    name: "HTML/CSS",
    percent: "80%",
    icon: <FaHtml5 size={26} className="text-white" />,
  },
  {
    name: "Next.js",
    percent: "80%",
    icon: <SiNextdotjs size={26} className="text-white" />,
  },
  {
    name: "Java Script",
    percent: "60%",
    icon: <FaJs size={26} className="text-white" />,
  },
  {
    name: "GitHub",
    percent: "90%",
    icon: <FaGithub size={26} className="text-white" />,
  },
];

const Skills: React.FC = () => {
  return (
    <section className="space-y-5">
      <h1 className="text-4xl sm:text-4xl font-bold text-white">
        My <span className="text-[#FF6B00]">Skills</span>
      </h1>

      <div className="flex flex-wrap items-start gap-6 sm:gap-8">
        {skillsData.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-2">
            <div
              className={`w-20 h-24 rounded-full border flex flex-col items-center justify-center gap-2 transition-colors ${
                skill.active
                  ? "border-[#FF6B00] bg-[#1F1F1F]"
                  : "border-[#333333] bg-[#1B1B1B]"
              }`}
            >
              {skill.icon}
              <span
                className={`text-xs font-semibold ${
                  skill.active ? "text-[#FF6B00]" : "text-gray-300"
                }`}
              >
                {skill.percent}
              </span>
            </div>
            <span className="text-xs text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;