import React from "react";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout title="Contact">
    <h1>Contact</h1>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-8">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary btn-sm">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
