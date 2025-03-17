import React from "react";
// Remove Header import since it's already in the layout
// import Header from "../components/Header";

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white animate-fade-in">
          Terms and Conditions
        </h1>

        <div className="prose prose-slate max-w-none prose-invert">
          <section className="mb-8 animate-slide-up">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-300">
              By accessing and using this website, you accept and agree to be
              bound by the terms and conditions of this agreement.
            </p>
          </section>

          <section className="mb-8 animate-slide-up delay-100">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              2. Use License
            </h2>
            <p className="text-slate-300">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Hitarth Shah's website for
              personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8 animate-slide-up delay-200">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              3. Disclaimer
            </h2>
            <p className="text-slate-300">
              The materials on Hitarth Shah's website are provided on an 'as is'
              basis. Hitarth Shah makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section className="mb-8 animate-slide-up delay-300">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              4. Limitations
            </h2>
            <p className="text-slate-300">
              In no event shall Hitarth Shah or his suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Hitarth Shah's website.
            </p>
          </section>

          <section className="mb-8 animate-slide-up delay-400">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              5. Accuracy of Materials
            </h2>
            <p className="text-slate-300">
              The materials appearing on Hitarth Shah's website could include
              technical, typographical, or photographic errors. Hitarth Shah
              does not warrant that any of the materials on his website are
              accurate, complete, or current.
            </p>
          </section>

          <section className="mb-8 animate-slide-up delay-500">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Links</h2>
            <p className="text-slate-300">
              Hitarth Shah has not reviewed all of the sites linked to his
              website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by
              Hitarth Shah of the site.
            </p>
          </section>

          <section className="mb-8 animate-slide-up delay-600">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              7. Modifications
            </h2>
            <p className="text-slate-300">
              Hitarth Shah may revise these terms of service for his website at
              any time without notice. By using this website, you are agreeing
              to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8 animate-slide-up delay-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              8. Governing Law
            </h2>
            <p className="text-slate-300">
              These terms and conditions are governed by and construed in
              accordance with the laws of India and you irrevocably submit to
              the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
