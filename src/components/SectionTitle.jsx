import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold text-center text-slate-800 mb-6 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-16 after:bg-primary">
      {children}
    </h2>
  );
};

export default SectionTitle;
