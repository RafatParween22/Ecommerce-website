import React from 'react';

function Nav() {
  return (
    <div style={{ marginBottom: 40 }}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#3498db', color: '#fff', height: 90 }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: '#fff' }}>
            Ecommerce-Website
          </a>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input 
                className="search" type="search" placeholder="Search" aria-label="Search"
                style={{ backgroundColor: '#fff', color: '#333', width: 500 }}
              />
              <button className="btn btn-outline-success" type="submit" style={{ color: '#fff' }}>
                Search
              </button>
            </form>
            <div style={{ width: 20 }}></div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home" style={{ color: '#fff' }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/listing" style={{ color: '#fff' }}>
                  Product-Listing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/detailed" style={{ color: '#fff' }}>
                  Product-Detailed
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/customer" style={{ color: '#fff' }}>
                  Customer-informations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart" style={{ color: '#fff' }}>
                  Add-Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
