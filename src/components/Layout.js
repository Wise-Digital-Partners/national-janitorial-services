import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children, headerStyle, headerLinkColor, headerHasBorder }) => {
   return (
      <div>
         <Helmet></Helmet>
         <Header headerStyle={headerStyle} headerLinkColor={headerLinkColor} headerHasBorder={headerHasBorder} />
         <main id="body-content">{children}</main>
         <Footer />
      </div>
   );
};

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Layout;
