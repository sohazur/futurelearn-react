import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark bg-gradient p-4 text-white mt-5">
      <small>
        Developed by{" "}
        <a
          className="text-decoration-none text-light fw-bold"
          href="https://www.sohazur.com/"
          target="/blank"
        >
          Sohaur Islam Sozib
        </a>{" "}
        &copy;
      </small>
    </div>
  );
};

export default Footer;
