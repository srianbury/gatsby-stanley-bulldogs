import React from "react";

const NewsletterForm = () => (
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
);

export default NewsletterForm;
