import React, { useState } from "react";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    address: "",
    content: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ส่งข้อความเรียบร้อยแล้วครับ");
  };

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-4xl sm:text-4xl font-bold text-white">
          Contact <span className="text-[#FF6B00]">Me</span>
        </h1>
        <p className="text-lg text-gray-300 mt-1">Let&apos;s get in touch!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#FF6B00] mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border-b border-[#3A3A3A] focus:border-[#FF6B00] outline-none py-1.5 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#FF6B00] mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-transparent border-b border-[#3A3A3A] focus:border-[#FF6B00] outline-none py-1.5 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#FF6B00] mb-1">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-transparent border-b border-[#3A3A3A] focus:border-[#FF6B00] outline-none py-1.5 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#FF6B00] mb-1">
              Adress
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full bg-transparent border-b border-[#3A3A3A] focus:border-[#FF6B00] outline-none py-1.5 text-xs text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#FF6B00] mb-1">
            Content
          </label>
          <textarea
            rows={2}
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            className="w-full bg-transparent border-b border-[#3A3A3A] focus:border-[#FF6B00] outline-none py-1.5 text-xs text-white resize-none"
          />
        </div>

        <label className="flex items-center gap-2 text-[11px] text-gray-300 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) =>
              setFormData({ ...formData, newsletter: e.target.checked })
            }
            className="accent-[#FF6B00]"
          />
          <span>I would like to receive the newsletter.</span>
        </label>

        <div>
          <button
            type="submit"
            className="w-full sm:w-52 py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#e55f00] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;