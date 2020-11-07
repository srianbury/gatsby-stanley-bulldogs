import React from "react";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout title="Contact">
    <Newsletter />
    <hr />
    <Questions />
  </Layout>
);

const Newsletter = () => (
  <div className="row">
    <div className="col-12 col-md-6 col-lg-8">
      <h3>Join our Newsletter</h3>
      <p>
        Join our newsletter if you'd like to get notified when our next litter
        arrives.
      </p>
      <form
        name="newsletter"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
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
);

const Questions = () => (
  <div className="row">
    <div className="col-12 col-md-6 col-lg-8">
      <h3>Questions</h3>
      <p>Send us a messages if you have any questions.</p>
      <form
        name="questions"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="questions" />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="example@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="question">Question</label>
          <textarea
            id="question"
            name="question"
            rows={3}
            className="form-control"
            placeholder=""
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
);

export default IndexPage;
