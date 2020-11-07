import React from "react";
import { graphql } from "gatsby";
import GtsbImg from "gatsby-image";
import Layout from "../components/layout";

const Litters = ({ data }) => (
  <Layout title="Litters">
    <h1>Our Litters</h1>
    <div className="pl-3 pr-3">
      {data.allContentfulLitter.edges.map(({ node }) => (
        <div key={node.id} className="mb-4">
          <div className="row">Mom: {node.mom}</div>
          <div className="row">Dad: {node.dad}</div>
          <div className="row">Birthday: {node.birthday}</div>
          <div className="row">
            {node.images.map(image => (
              <GtsbImg
                key={image.id}
                className="col-6 col-md-4"
                alt=""
                fluid={image.fluid}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default Litters;
export const query = graphql`
  query {
    allContentfulLitter(sort: { fields: [birthday], order: DESC }) {
      edges {
        node {
          id
          mom
          dad
          birthday(formatString: "MMMM, YYYY")
          images {
            id
            fluid(maxHeight: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
