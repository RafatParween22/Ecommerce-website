import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="clothsbox">
                <a className="nav-link" href="/cloths">
                  <div className="electronics-image-box">
                    <img
                      src="https://t3.ftcdn.net/jpg/01/38/94/62/360_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg"
                      alt="Cloths Image"
                      style={{ width: '80px', height: '80px' }}
                    />
                  </div>
                  <p>Cloths</p>
                </a>
              </div>
            </li>
            {/* Add more list items for other categories */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
