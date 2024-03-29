import React from "react";

const Header = ({ headingLevel, heading, subtext, subtextSize, textMaxWidth, textAlignment, textMargin }) => {
   const HeadingTag = headingLevel;
   return (
      <div>
         {headingLevel && heading ? (
            <header className={`${textMaxWidth || ""} ${textAlignment || ""} ${textMargin || ""}`}>
               {heading ? <HeadingTag>{heading}</HeadingTag> : null}
               {subtext ? <p className={`mb-0 ${subtextSize}`}>{subtext}</p> : null}
            </header>
         ) : null}
      </div>
   );
};

export default Header;
