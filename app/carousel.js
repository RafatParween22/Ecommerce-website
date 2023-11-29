import React from 'react';
const Main = () => {
  return (
    <div className="Slider">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ width: "1400px", height: "400px" }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHNob3BwaW5nfGVufDB8fDB8fHww" alt="First slide" style={{ width: "1400px", height: "400px" }}/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://a.cdn-hotels.com/gdcs/production171/d1558/d5250534-92b6-413c-bedf-2b9ac96e96fe.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="Second slide" style={{ width: "1400px", height: "400px" }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://media.istockphoto.com/id/1092636334/photo/happy-women-with-shopping-bags-walking-along-city-street.jpg?s=612x612&w=0&k=20&c=XxvN2BOV7SAypfrg297DHn0ps5qEBnOPBc2HTm7B43g=" alt="Third slide" style={{ width: "1400px", height: "400px" }} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
};

export default Main;