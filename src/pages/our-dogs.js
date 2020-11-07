import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import GtsbImg from "gatsby-image";

const OurDogs = ({ data }) => (
  <Layout title="Our Dogs">
    <h1>Our Dogs</h1>
    <div className="row">
      {data.allContentfulDog.edges.map(({ node }) => (
        <div key={node.id} className="col-6 col-md-4 mb-4">
          <GtsbImg alt="" fluid={node.image.fluid} />
          <div>Name: {node.name}</div>
          <div>Sex: {node.gender ? "Female" : "Male"}</div>
          <div>Birthday: {node.birthday}</div>
          <div>Breed: {node.breed}</div>
          {node.about && node.about.internal && node.about.internal.content ? (
            <div>About: {node.about.internal.content}</div>
          ) : null}
        </div>
      ))}
    </div>
  </Layout>
);

export default OurDogs;
export const query = graphql`
  query {
    allContentfulDog(sort: { fields: [birthday], order: ASC }) {
      edges {
        node {
          id
          name
          birthday
          gender
          breed
          about {
            internal {
              content
            }
          }
          image {
            fluid(maxHeight: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
