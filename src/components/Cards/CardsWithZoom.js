import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Cards = ({ ...props }) => {
   const CardHeadingTag = props.cardHeadingLevel;
   return (
      <div className={`${props.className}`}>
         <div className={`grid ${props.columns} ${props.columnGap}`}>
            {props.cards.map((card) => {
               return (
                  <div className="group relative" key={card.id}>
                     <div className="overflow-hidden mb-6">
                        <GatsbyImage
                           image={card.image}
                           alt={card.heading}
                           className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                        />
                     </div>
                     <CardHeadingTag className={props.cardHeadingSize}>{card.heading}</CardHeadingTag>
                     <p className="mb-0">{card.text}</p>
                     <a href={card.link}>
                        <span className="link-overlay"></span>
                     </a>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Cards;
