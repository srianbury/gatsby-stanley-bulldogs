import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import stanleycover from "../images/stanley-skate-wider.png";
import pups from "../images/pups.jpg";

const Home = () => (
  <Layout title="Home">
    <div className="d-flex justify-content-center">
      <img
        src={stanleycover}
        alt="Stanley Skateboarding"
        style={{
          width: "100%",
          maxWidth: "991.98px",
          height: "auto",
        }}
      />
    </div>
    <div
      className="d-flex justify-content-center py-3 px-3 px-lg-0"
      style={{ width: "100%" }}
    >
      <div>
        <h1 className="text-dark rounded m-0">Welcome to Stanley Bulldogs!</h1>
      </div>
    </div>
    <div className="d-flex justify-content-center ">
      <img
        src={pups}
        alt="Pups"
        style={{
          width: "100%",
          maxWidth: "991.98px",
          height: "auto",
        }}
      />
    </div>
    <div
      className="d-flex justify-content-center py-3 px-3 px-lg-0"
      style={{ width: "100%" }}
    >
      <Link to="/litters">
        <div className="text-dark">
          <h1 className="rounded m-0">View our Litters</h1>
          <h4 className="rounded m-0">(A litter is currently available!)</h4>
        </div>
      </Link>
    </div>
    <div className="mt-3 mb-3 px-3 px-lg-0">
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
