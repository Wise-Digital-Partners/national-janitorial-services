import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Header from "./Navigation/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children, navigationStyle, headerLinkColor, headerHasBorder }) => {
   const [bodyOffset, setBodyOffset] = useState(0);

   return (
      <div>
         <Helmet></Helmet>
         <Header
            navigationStyle={navigationStyle}
            headerLinkColor={headerLinkColor}
            headerHasBorder={headerHasBorder}
            setBodyOffset={setBodyOffset}
         />
         <main id="body-content" style={{ paddingTop: bodyOffset + "px" }}>
            {children}
         </main>
         <Footer />
      </div>
   );
};

export default Layout;
