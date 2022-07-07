import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import SEO from "./seo";
import { getSiteText } from "../utils/getSiteText";
import * as CONSTANTS from "../constants";

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSiteText(limit: 1) {
        edges {
          node {
            siteTitle
            siteDescription
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title={title} />
      <Header siteTitle={getSiteText(data, CONSTANTS.SITE_TEXT.TITLE)} />
      <main>
        <div style={{
          maxWidth: '991.98px',
          margin: 'auto'
        }}>
          {children}
        </div>
      </main>
      <div className="m-4"></div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
