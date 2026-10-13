import React from "react";

const CitablePassage = ({ itemType, className, children }) => (
  <section className={`citable-knowledge-passage ${className || "bg-gray-50 py-14 md:py-20"}`} itemScope itemType={itemType}>
    <div className="container">
      <div className="max-w-4xl">{children}</div>
    </div>
  </section>
);

export default CitablePassage;
