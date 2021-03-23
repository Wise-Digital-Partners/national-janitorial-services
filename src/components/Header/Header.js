import React from "react";

const Header = ({ ...props }) => {
   const HeadingTag = props.headingLevel;
   return (
      <div>
         {props.headingLevel && props.heading ? (
            <header className={`${props.maxWidth} ${props.textAlignment} ${props.margin}`}>
               {props.heading ? <HeadingTag>{props.heading}</HeadingTag> : null}
               {props.subtext ? <p className={`${props.subtextSize}`}>{props.subtext}</p> : null}
            </header>
         ) : null}
      </div>
   );
};

export default Header;
