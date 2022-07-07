import React from "react";
import { graphql } from "gatsby";
import GtsbImg from "gatsby-image";
import Layout from "../components/layout";
import Container from "../components/container";
import { getOrdinal } from "../utils/getOrdinal";

const Litters = ({ data }) => {
  const numLitters = data.allContentfulLitter.edges.length;

  function getLitterTitle(index) {
    if (index === 0) {
      return "Our Most Recent Litter";
    }

    return `Our ${getOrdinal(numLitters - index)} Litter`;
  }

  return (
    <Layout title="Litters">
      <Container>
        <h1>Our Litters</h1>
        <div className="pl-3 pr-3">
          {data.allContentfulLitter.edges.map(({ node }, index) => (
            <div key={node.id} className="mb-4">
              <div className="row">
                <h5>{getLitterTitle(index)}</h5>
              </div>
              <div className="row">
                <div className="col-6 col-md-4 pl-0 pr-0">
                  <div>
                    <GtsbImg alt="" fluid={node.momRef.image.fluid} />
                  </div>
                  <div>
                    <h4 className="mb-0 d-inline">{node.momRef.name}</h4> (Mom)
                  </div>
                  <div>Breed: {node.momRef.breed}</div>
                </div>
                <div className="col-6 col-md-4 pl-0 pr-0">
                  <div>
                    <GtsbImg alt="" fluid={node.dadRef.image.fluid} />
                  </div>
                  <div>
                    <h4 className="mb-0 d-inline">{node.dadRef.name}</h4> (Dad)
                  </div>
                  <div>Breed: {node.dadRef.breed}</div>
                </div>
              </div>
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
      </Container>
    </Layout>
  );
};

export default Litters;
export const query = graphql`
  query {
    allContentfulLitter(sort: { fields: [birthday], order: DESC }) {
      edges {
        node {
          id
          momRef {
            name
            breed
            image {
              fluid(maxWidth: 350, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
          dadRef {
            name
            breed
            image {
              fluid(maxWidth: 350, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
          birthday(formatString: "MMMM, YYYY")
          images {
            id
            fluid(maxWidth: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
