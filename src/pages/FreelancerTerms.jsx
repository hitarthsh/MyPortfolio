import React, { useEffect } from "react";
// Remove Header import since it's already in the layout
// import Header from "../components/Header";

export default function FreelancerTerms() {
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
          Freelancer Terms and Conditions
        </h1>

        <div className="prose prose-slate max-w-none prose-invert">
          <section className="mb-8 animate-slide-up">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              1. Services and Deliverables
            </h2>
            <p className="text-slate-300">
              As a freelance web developer, I agree to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>
                Provide web development services as specified in project
                agreements
              </li>
              <li>Deliver work within agreed timelines</li>
              <li>
                Maintain professional communication throughout the project
              </li>
              <li>Provide regular updates on project progress</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-100">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              2. Project Scope and Changes
            </h2>
            <p className="text-slate-300">
              Any changes to the project scope must be:
            </p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>Documented in writing</li>
              <li>Agreed upon by both parties</li>
              <li>Include updated timeline and cost estimates</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-200">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              3. Payment Terms
            </h2>
            <p className="text-slate-300">Payment terms include:</p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>Initial deposit of 30% for new projects</li>
              <li>Milestone payments as specified in project agreements</li>
              <li>Final payment upon project completion and client approval</li>
              <li>
                Payment methods: Bank transfer or digital payment platforms
              </li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-300">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              4. Intellectual Property
            </h2>
            <p className="text-slate-300">Upon full payment:</p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>Client receives full ownership of the final deliverables</li>
              <li>I retain the right to display the work in my portfolio</li>
              <li>Client must credit my work when appropriate</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-400">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              5. Confidentiality
            </h2>
            <p className="text-slate-300">I agree to:</p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>Maintain client confidentiality</li>
              <li>Not disclose project details to third parties</li>
              <li>Protect sensitive information and data</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-500">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              6. Support and Maintenance
            </h2>
            <p className="text-slate-300">Post-delivery support includes:</p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>30 days of bug fixes and minor adjustments</li>
              <li>Documentation of the delivered work</li>
              <li>Basic training on website management</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-600">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              7. Termination
            </h2>
            <p className="text-slate-300">
              Either party may terminate the agreement:
            </p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>With written notice of 14 days</li>
              <li>Upon breach of terms</li>
              <li>With payment for completed work</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              8. Liability
            </h2>
            <p className="text-slate-300">
              I maintain professional liability insurance and agree to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-slate-300">
              <li>Work within professional standards</li>
              <li>Maintain necessary licenses and certifications</li>
              <li>Follow industry best practices</li>
            </ul>
          </section>

          <section className="mb-8 animate-slide-up delay-800">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              9. Contact Information
            </h2>
            <p className="text-slate-300">
              For any questions regarding these terms, please contact Hitarth
              Shah:
            </p>
            <p className="mt-2 text-slate-300">
              Email: info@hitarthshah.com
              <br />
              Phone: (+91) 8488820605
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
