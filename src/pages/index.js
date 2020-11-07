import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Parallax from "../components/parallax";
import playing from "../images/playing.gif";
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
        <Link to="/litters">Past litters</Link>
      </h1>
    </Parallax>
    <div className="container mt-3" style={{ height: "150px" }}>
      <p>
        <Link to="/contact" className="pr-1">
          <h5 className="d-inline">Contact us!</h5>
        </Link>
        Get updated when our next litter arrives or ask a questions!
      </p>
      <a
        href="http://instagram.com/stanleybulldogs"
        target="_blank"
        rel="noreferrer"
      >
        <h5>
          <span className="mr-1">View us on Instagram.</span>
          <i class="fab fa-instagram fa-lg" />
        </h5>
      </a>
    </div>
  </Layout>
);

export default Home;
