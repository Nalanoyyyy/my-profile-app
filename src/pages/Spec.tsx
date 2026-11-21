import React from "react";
import { HiCodeBracket } from "react-icons/hi2";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineDraw } from "react-icons/md";

interface SpecItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const specializations: SpecItem[] = [
  {
    title: "Front end-developer",
    description:
      "Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.",
    icon: <HiCodeBracket size={18} className="text-[#FF6B00]" />,
  },
  {
    title: "UI/UX Designer",
    description:
      "UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.",
    icon: <BsGlobe size={17} className="text-[#FF6B00]" />,
  },
  {
    title: "Graphic designer",
    description:
      "As a graphic designer, I transform ideas into visually striking and impactful designs.",
    icon: <MdOutlineDraw size={18} className="text-[#FF6B00]" />,
  },
];

const Spec: React.FC = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl sm:text-4xl font-bold text-white">
        My <span className="text-[#FF6B00]">Specializations</span>
      </h1>

      <div className="space-y-3">
        {specializations.map((spec) => (
          <div
            key={spec.title}
            className="rounded-xl border border-[#FF6B00]/50 bg-[#1F1F1F]/60 px-4 py-3 flex items-start justify-between gap-4 hover:border-[#FF6B00] transition-colors"
          >
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-white">
                {spec.title}
              </h2>
              <p className="text-[11px] sm:text-xs text-gray-400 mt-1 leading-relaxed">
                {spec.description}
              </p>
            </div>
            <div className="shrink-0 mt-0.5">{spec.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spec;