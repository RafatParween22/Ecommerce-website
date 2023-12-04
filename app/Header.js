import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="clothsbox">
                <a className="nav-link" href="/cloths">
                <div className="electronics-image-box">
                    <img
                      src="https://t3.ftcdn.net/jpg/01/38/94/62/360_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg"
                      alt="Electronics Image"
                      style={{ width: '80px', height: '80px' }}
                    />
                  </div>
                  <p>Cloths</p>
                    </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="clothsbox">
                <a className="nav-link" href="/Electronics">
                  <div className="electronics-image-box">
                    <img
                      src="https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ="
                      alt="Electronics Image"
                      style={{ width: '80px', height: '80px' }}
                    />
                  </div>
                  <p>Electronics</p>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="clothsbox">
                <a className="nav-link" href="/jewellery">
                  <img
                    src="https://media.istockphoto.com/id/489814272/photo/gold-silver-rings-and-chains.jpg?s=612x612&w=0&k=20&c=d8tGqzlmqMZzhcYmgE_OyDNSQ9dAdo-T3BwdaSsDbhs="
                    alt="Jewellery Image"
                    style={{ width: '100px', height: '80px' }}
                  />
                  <p>Jewellery</p>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="clothsbox">
                <a className="nav-link" href="/shoes">
                  <img
                    src="https://images.unsplash.com/photo-1531310197839-ccf54634509e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Shoes Image"
                    style={{ width: '80px', height: '80px'}}
                  />
                  <p>Shoes</p>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="clothsbox">
                <a className="nav-link" href="/Electronics">
                  <div className="electronics-image-box">
                    <img
                      src="https://thumbs.dreamstime.com/z/groceries-assorted-groceries-assorted-vegetabke-cheese-preserve-145639694.jpg?w=992"
                      alt="Electronics Image"
                      style={{ width: '80px', height: '70px' }}
                    />
                  </div>
                  <p>Grocery</p>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="clothsbox">
                <a className="nav-link" href="/Twowheelers">
                  <div className="electronics-image-box">
                    <img
                      src="https://auto.webindia123.com/bike/tvsapache_rr310/ima.jpg"
                      alt="Electronics Image"
                      style={{ width: '110px', height: '70px' ,marginRight:'0px'}}
                    />
                  </div>
                  <p>Two Wheelers</p>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="clothsbox">
                <a className="nav-link" href="/Appliances">
                  <div className="electronics-image-box">
                    <img
                      src="https://www.shutterstock.com/shutterstock/photos/154376501/display_1500/stock-vector-kitchen-washing-machine-icebox-gas-stove-dishwasher-154376501.jpg"
                      alt="Electronics Image"
                      style={{ width: '80px', height: '70px' }}
                    />
                  </div>
                  <p>Appliances</p>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="clothsbox">
                <a className="nav-link" href="/Travel">
                  <div className="travel-image-box">
                    <img
                      src="https://holidayturn.com/wp-content/uploads/2017/09/International-travel.jpg"
                      alt="Electronics Image"
                      style={{ width: '80px', height: '70px' }}
                    />
                  </div>
                  <p>Travel</p>
                </a>
              </div>
            </li>
          </ul>

      </nav>
    </div>
  );
};

export default Header;