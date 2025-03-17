import React, { useEffect } from "react";
// Remove Header import since it's already in the layout
// import Header from "../components/Header";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white animate-fade-in">
          Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none prose-invert">
          <section className="mb-8 animate-slide-up">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              1. Information We Collect
            </h2>
            <p className="text-slate-300">
              We collect information that you provide directly to us, including
              but not limited to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Project details and requirements</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-100">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-300">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>Provide and maintain our services</li>
              <li>Communicate with you about your projects</li>
              <li>Send you technical information and updates</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-200">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              3. Information Sharing
            </h2>
            <p className="text-slate-300">
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors and consultants</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-300">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              4. Data Security
            </h2>
            <p className="text-slate-300">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8 animate-slide-up delay-400">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              5. Your Rights
            </h2>
            <p className="text-slate-300">You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-500">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              6. Cookies
            </h2>
            <p className="text-slate-300">
              We use cookies and similar tracking technologies to track activity
              on our website and hold certain information. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </p>
          </section>

          <section className="mb-8 animate-slide-up delay-600">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              7. Changes to This Policy
            </h2>
            <p className="text-slate-300">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8 animate-slide-up delay-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              8. Contact Us
            </h2>
            <p className="text-slate-300">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-2 text-slate-300">
              Email: shahh0919@gmail.com
              <br />
              Phone: (+91) 8488820605
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
