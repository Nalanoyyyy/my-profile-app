import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface MyCardProps {
  brandPrefix?: string;
  brandRest?: string;
  studentId?: string;
  roleTitle?: string;
  avatarSrc?: string;
}

const MyCard: React.FC<MyCardProps> = ({
  brandPrefix = "K",
  brandRest = "ritteera", // ปรับเป็นชื่อของคุณ
  studentId = "STU ID: 6552410004", // ปรับเป็นรหัสประจำตัวของคุณ
  roleTitle = "Fullstack Web Developer",
  avatarSrc = "/profile.png", // วางรูปตัวเองไว้ที่โฟลเดอร์ public/my-avatar.jpg
}) => {
  return (
    <aside className="w-full lg:w-[270px] shrink-0 bg-[#1B1B1B] border border-[#2A2A2A] rounded-3xl p-5 flex flex-col justify-between shadow-xl">
      {/* Header Name */}
      <div className="mb-3">
        <h2 className="text-xl font-medium tracking-wider text-white">
          <span className="text-[#FF6B00]">{brandPrefix}</span>
          {brandRest}
        </h2>
      </div>

      {/* Profile Image */}
      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#262626] mb-4">
        <img
          src={avatarSrc}
          alt="My Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Student ID & Role */}
      <div className="text-center mb-4">
        <p className="text-xs font-semibold tracking-wider text-gray-200 uppercase">
          {studentId}
        </p>
        <p className="text-xs text-gray-400 mt-1">{roleTitle}</p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-3 mb-5 text-white">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="w-7 h-7 rounded-full flex items-center justify-center hover:text-[#FF6B00] transition-colors"
        >
          <FaFacebookF size={14} />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
          className="w-7 h-7 rounded-full flex items-center justify-center hover:text-[#FF6B00] transition-colors"
        >
          <FaXTwitter size={14} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="w-7 h-7 rounded-full flex items-center justify-center hover:text-[#FF6B00] transition-colors"
        >
          <FaInstagram size={14} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="w-7 h-7 rounded-full flex items-center justify-center hover:text-[#FF6B00] transition-colors"
        >
          <FaLinkedinIn size={14} />
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Google"
          className="w-7 h-7 rounded-full flex items-center justify-center hover:text-[#FF6B00] transition-colors"
        >
          <FaGoogle size={14} />
        </a>
      </div>

      {/* CTA Button */}
      <Link
        to="/contactme"
        className="w-full py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#e55f00] text-white text-xs font-bold tracking-widest uppercase text-center transition-colors"
      >
        HIRE ME !
      </Link>
    </aside>
  );
};

export default MyCard;