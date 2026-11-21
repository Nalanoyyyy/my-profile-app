import React from "react";

interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
}

const timelineData: TimelineItem[] = [
  {
    period: "2022 - Present",
    title: "UI/UX Designer",
    subtitle: "Freelance",
  },
  {
    period: "",
    title: "Fullstack Web Developer",
    subtitle: "Freelance",
  },
  {
    period: "2022 - 2025",
    title: "Bachelor Degree in Technology Digital and Innovation",
    subtitle: "Southeast Asia University",
  },
  {
    period: "2016 - 2022",
    title: "High school",
    subtitle: "Matthayom Wat Nongkhaem School",
  },
];

const EduExp: React.FC = () => {
  return (
    <section className="space-y-5">
      <h1 className="text-4xl sm:text-4xl font-bold text-white">
        Education &amp; <span className="text-[#FF6B00]">Experience</span>
      </h1>

      <div className="space-y-4">
        {timelineData.map((item, idx) => (
          <div key={idx} className="space-y-0.5">
            {item.period && (
              <p className="text-xs font-semibold text-[#FF6B00]">
                {item.period}
              </p>
            )}
            <h2 className="text-sm sm:text-base font-bold text-white">
              {item.title}
            </h2>
            <p className="text-xs text-gray-400">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EduExp;