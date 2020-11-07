import React from "react";
import { graphql } from "gatsby";
import GtsbImg from "gatsby-image";
import Layout from "../components/layout";
import Container from "../components/container";

const OurDogs = ({ data }) => (
  <Layout title="Our Dogs">
    <Container>
      <h1>Our Dogs</h1>
      <div className="row">
        {data.allContentfulDog.edges.map(({ node }) => (
          <div key={node.id} className="col-6 col-md-4 mb-4">
            <GtsbImg alt="" fluid={node.image.fluid} />
            <div>Name: {node.name}</div>
            <div>Sex: {node.gender ? "Female" : "Male"}</div>
            <div>Age: {getAgeString(node.birthday)}</div>
            <div>Breed: {node.breed}</div>
            {node.about &&
            node.about.internal &&
            node.about.internal.content ? (
              <div>About: {node.about.internal.content}</div>
            ) : null}
          </div>
        ))}
      </div>
    </Container>
  </Layout>
);

function getAgeString(birthday) {
  const age = getAge(birthday);
  return `${age} year${age === 1 ? "" : "s"} old`;
}

function getAge(birthday) {
  const diffMs = Date.now() - new Date(birthday);
  const ageDt = new Date(diffMs);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
}

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
            fluid(maxWidth: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
