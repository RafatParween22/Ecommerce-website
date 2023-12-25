import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const AllCategories = () => {

   

  // State to store all products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to filter products by category
  const filterProductsByCategory = (category) => {
    return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
  };

  return (
    <div>
      {/* ... (Your existing code) ... */}

      {/* Electronics Category */}
      <div className="container-fluid">
        <div className="col-sm-2 mt-4 mx-auto">
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: '1000' }}>ELECTRONICS CATEGORY</h5>
          </div>
        </div>

        {/* Update the URL for the "View All" button in the Electronics category */}
        <a href="/electronics" className="custom-right-align">
          <h5 className="card-title custom-right-align-text">View All</h5>
        </a>

        <div className="row">
          {/* Map over electronic products and display them */}
          {filterProductsByCategory('electronics').map((product) => (
            <div key={product.id} className="col-sm-2 mt-4">
              <div className="card">
                <div className="card-body">
                  <img src={product.image} alt={product.title} className="img-fluid" />
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ fontWeight: '800' }}>{product.title}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jewelry Category */}
      <div className="container-fluid">
        <div className="col-sm-2 mt-4 mx-auto">
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: '1000' }}>JEWELRY CATEGORY</h5>
          </div>
        </div>

        {/* Update the URL for the "View All" button in the Jewelry category */}
        <a href="/jewelry" className="custom-right-align">
          <h5 className="card-title custom-right-align-text">View All</h5>
        </a>

        <div className="row">
          {/* Map over jewelry products and display them */}
          {filterProductsByCategory('jewelery').map((product) => (
            <div key={product.id} className="col-sm-2 mt-4">
              <div className="card">
                <div className="card-body">
                  <img src={product.image} alt={product.title} className="img-fluid" />
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ fontWeight: '800' }}>{product.title}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clothing Category */}
      <div className="container-fluid">
        <div className="col-sm-2 mt-4 mx-auto">
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: '1000' }}>CLOTHING CATEGORY</h5>
          </div>
        </div>

        {/* Update the URL for the "View All" button in the Clothing category */}
        <a href="/clothing" className="custom-right-align">
          <h5 className="card-title custom-right-align-text">View All</h5>
        </a>

        <div className="row">
          {/* Map over clothing products and display them */}
          {filterProductsByCategory('clothing').map((product) => (
            <div key={product.id} className="col-sm-2 mt-4">
              <div className="card">
                <div className="card-body">
                  <img src={product.image} alt={product.title} className="img-fluid" />
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ fontWeight: '800' }}>{product.title}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ... (Your existing code for other categories) ... */}
    </div>

  );
};

export default AllCategories;


