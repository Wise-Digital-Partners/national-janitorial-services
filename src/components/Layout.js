import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./Navigation/Header";
import Footer from "./Footer/Footer";

const Layout = ({ ...props }) => {
   return (
      <div>
         <Helmet></Helmet>
         <Header headerStyle={props.headerStyle} headerLinkColor={props.headerLinkColor} headerHasBorder={props.headerHasBorder} />
         <main id="body-content">{props.children}</main>
         <Footer />
      </div>
   );
};

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Layout;
