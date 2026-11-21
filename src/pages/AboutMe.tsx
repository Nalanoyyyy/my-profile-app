import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="space-y-4">
      <p className="text-4xl font-medium text-gray-200">
        About <span className="text-[#FF6B00]">Me</span>
      </p>

      <h1 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-snug text-white max-w-xl">
        I find fulfillment in blending visual design with the power of coding
        to create meaningful experiences.
      </h1>

      <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed pt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
        tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
        architecto earum voluptates obcaecati corrupti voluptatum. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at
        neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum
        voluptates obcaecati corrupti voluptatum.
      </p>
    </section>
  );
};

export default AboutMe;