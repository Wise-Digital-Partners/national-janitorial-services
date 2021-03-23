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
                     <div className="h-full rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300 ease-linear">
                        <GatsbyImage image={card.image} alt={card.heading} />
                        <div className="px-6 py-5 md:py-8">
                           <CardHeadingTag className={props.cardHeadingSize}>{card.heading}</CardHeadingTag>
                           <p className="mb-0">{card.text}</p>
                        </div>
                        <a href={card.link}>
                           <span className="link-overlay"></span>
                        </a>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Cards;
