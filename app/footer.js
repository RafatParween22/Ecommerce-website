import React from 'react';

const Footer = () => {
  return (
    <>
      
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}

    {/* Right */}
    <div>
      <a href="https://www.facebook.com/" className="me-4 text-reset" aria-label="Facebook">
        <i className="fab fa-facebook-f" aria-hidden="true"></i>
      </a>
      <a href="https://twitter.com/" className="me-4 text-reset" aria-label="Twitter">
        <i className="fab fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="https://plus.google.com/" className="me-4 text-reset" aria-label="Google">
        <i className="fab fa-google" aria-hidden="true"></i>
      </a>
      <a href="https://www.instagram.com/" className="me-4 text-reset" aria-label="Instagram">
        <i className="fab fa-instagram" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/" className="me-4 text-reset" aria-label="LinkedIn">
        <i className="fab fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="https://github.com/" className="me-4 text-reset" aria-label="GitHub">
        <i className="fab fa-github" aria-hidden="true"></i>
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}

  {/* Section: Links  */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        {/* ... Your existing code for company info, products, useful links, and contact */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}

  {/* Copyright */}
  <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  {/* Copyright */}
</footer>


    </>
  );
};

export default Footer;
