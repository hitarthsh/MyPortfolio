import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      content: "shahh0919@gmail.com",
      link: "mailto:shahh0919@gmail.com",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "+91 8488820605",
      link: "tel:+918488820605",
    },
    {
      icon: MapPinIcon,
      title: "Location",
      content: "Rajkot, Gujarat, India",
      link: "https://maps.google.com/?q=Rajkot,Gujarat,India",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute hidden sm:block">
        <div className="absolute top-20 -left-16 sm:-left-20 md:-left-24 lg:-left-32 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-primary-500/10 rounded-full blur-[50px] sm:blur-[64px] md:blur-[80px] lg:blur-[96px] opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70" />
        <div className="absolute bottom-20 -right-16 sm:-right-20 md:-right-24 lg:-right-32 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-secondary-500/10 rounded-full blur-[50px] sm:blur-[64px] md:blur-[80px] lg:blur-[96px] opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70" />
      </div>

      <div className="container relative z-10">
        <SectionTitle>
          <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 text-transparent bg-clip-text">
            Get in Touch
          </span>
        </SectionTitle>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Have a project in mind or want to discuss potential opportunities? I'd
          love to hear from you. Feel free to reach out through any of the
          following channels or use the contact form below.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.title === "Location" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-primary-500/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-200">
                  {info.title}
                </h3>
              </div>
              <p className="text-slate-400 group-hover:text-primary-400 transition-colors">
                {info.content}
              </p>
            </a>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-400 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary-500/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-400 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary-500/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary-500/50 transition-colors"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary-500/50 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="mt-4 text-green-400">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
