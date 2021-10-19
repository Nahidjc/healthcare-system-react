import React from "react";

const Contact = () => {
  return (
    <div className="m-auto p-5 shadow my-3" style={{ width: "30%" }}>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form4Example1"
            className="form-control border"
          />
          <label className="form-label" htmlFor="form4Example1">
            Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="form4Example2"
            className="border form-control"
          />
          <label className="form-label" htmlFor="form4Example2">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <textarea
            className="border form-control"
            id="form4Example3"
            rows="4"
          ></textarea>
          <label className="form-label" htmlFor="form4Example3">
            Message
          </label>
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
          />
          <label className="form-check-label" htmlFor="form4Example4">
            Send me a copy of this message
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
