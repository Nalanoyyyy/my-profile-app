import React from "react";

const Home: React.FC = () => {
  return (
    <section className="space-y-5">
      <p className="text-xl font-normal text-gray-200">
        Lets Work <span className="text-[#FF6B00]">Together !</span>
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold leading-tight text-white">
        Hi From <span className="text-[#FF6B00]">Kritteera</span> ,
        <br />
        Interactive Designer &amp; Fullstack
        <br />
        Web Developer
      </h1>

      <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
        tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
        architecto earum voluptates obcaecati corrupti voluptatum.
      </p>

      <div className="pt-3 flex items-center gap-10">
        <div>
          <div className="text-3xl sm:text-4xl font-medium text-[#FF6B00]">3+</div>
          <div className="text-xs text-gray-400 mt-1 leading-snug">
            Years of
            <br />
            Experience
          </div>
        </div>

        <div>
          <div className="text-3xl sm:text-4xl font-medium text-[#FF6B00]">
            10+
          </div>
          <div className="text-xs text-gray-400 mt-1 leading-snug">
            Projects
            <br />
            Completed
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;