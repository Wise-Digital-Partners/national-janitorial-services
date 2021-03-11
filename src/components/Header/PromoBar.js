import React from "react";

const PromoBar = () => {
    return(
        <div id="promo-bar" className="bg-primary py-2 text-center">
            <div className="container">
                <p className="text-white text-sm md:text-base mb-0">Massage Deal for First-Timers: $49 for 60 min. | $69 for 90 min.<br className="block md:hidden"/> Call for details.</p>
            </div>
        </div>
    );
}
export default PromoBar;