import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="space-y-3">
      <h1 className="text-4xl sm:text-4xl font-bold text-white">
        Featured <span className="text-[#FF6B00]">Projects</span>
      </h1>

      <div className="space-y-1">
        <h2 className="text-xs sm:text-sm font-bold text-white">
          Manage Task App - fullstack web development
        </h2>
        <p className="text-[11px] sm:text-xs text-gray-400 max-w-lg leading-relaxed">
          Here&apos;s my latest project built with Next.js and Laravel, using
          TailwindCSS on the front-end. Watch the video to see the responsive
          landing page in action!
        </p>
      </div>

      {/* ใส่รูปผลงานที่ Export จาก Figma หรือ Screenshot ผลงานของคุณใน public/project-preview.png */}
      <div className="pt-2">
        <div className="w-full max-w-md rounded-xl overflow-hidden border border-[#2E2E2E] bg-white">
          <img
            src="/image3.png" // วางรูปผลงานของคุณไว้ที่โฟลเดอร์ public/project-preview.png
            alt="Featured Project Preview"
            className="w-full h-44 sm:h-48 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;