import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Parallax from "../components/parallax";
import playing from "../images/hannah_lucy_gus_playing.gif";
import pups from "../images/pups.jpg";

const Home = () => (
  <Layout title="Home">
    <Parallax img={playing}>
      <h1 className="bg-light text-primary p-3 rounded">
        Welcome to Stanley Bulldogs!
      </h1>
    </Parallax>
    <Parallax img={pups}>
      <h1 className="bg-light text-dark p-3 rounded">
        <Link to="/litters">Our Litters</Link>
      </h1>
    </Parallax>
    <div className="container mt-3" style={{ height: "150px" }}>
      <p>
        <Link to="/contact" className="pr-1">
          <h5 className="d-inline">Contact us!</h5>
        </Link>
        Get notified when we have our next litter or ask a question.
      </p>
      <a
        href="http://instagram.com/stanleybulldogs"
        target="_blank"
        rel="noreferrer"
      >
        <h5>
          <span className="mr-1">View us on Instagram</span>
          <i className="fab fa-instagram fa-lg" />
        </h5>
      </a>
    </div>
  </Layout>
);

export default Home;
