import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("⚠️ Please fill in all fields!");
      return;
    }
    setError("");
    setSending(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError("⚠️ Something went wrong. Please try again or email me directly.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "amitn7906@gmail.com",
      href: "mailto:amitn7906@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/amit-singh-negi-46219a40b",
      href: "https://www.linkedin.com/in/amit-singh-negi-46219a40b",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "https://github.com/Amit-singh-negi",
      href: "https://github.com/Amit-singh-negi",
    },
    { icon: "📍", label: "Location", value: "India", href: null },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#7e9e95] to-[#e9f1ee] py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#2f6f63]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#2f6f63]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2f6f63] text-sm font-semibold tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact <span className="text-[#2f6f63]">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#2f6f63] to-[#7fae9f] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Let us work together
            </h3>
            <p className="text-slate-500 mb-10 leading-relaxed">
             I am passionate about bringing ideas to life through clean code 
and great design. Drop me a message and let's build something incredible together.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-700 hover:text-[#2f6f63] transition text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-700 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
              {sent && (
                <div className="mb-6 px-4 py-3 bg-[#2f6f63]/10 border border-[#2f6f63]/30 rounded-xl text-[#2f6f63] text-sm text-center">
                  Message sent! I will get back to you soon.
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label className="text-slate-500 text-sm mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Amit Singh"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#2f6f63] outline-none rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 transition"
                  />
                </div>

                <div>
                  <label className="text-slate-500 text-sm mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="amit@example.com"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#2f6f63] outline-none rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 transition"
                  />
                </div>

                <div>
                  <label className="text-slate-500 text-sm mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#2f6f63] outline-none rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 transition resize-none"
                  />
                </div>

                {error && (
                  <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm text-center">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={sending}
                  className="w-full py-3 bg-[#2f6f63] hover:bg-[#234f46] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 active:scale-95"
                >
                  {sending ? "Sending..." : "Send Message 🚀"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
