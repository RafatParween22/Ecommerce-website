"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Page({ params }) {
  const [productDetails, setProductDetails] = useState([]);

	const fetchProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params.category]);

  if (!productDetails ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Product List-{params.category}</p>
        <div className="container">
            <div className="row">
                {productDetails.map((product) => (
                    <div key={product.id} className="col-3 ">
                    <div className="card">
                    <div className="card-body">
                        <img src={product.image} alt={product.title} className="img-fluid" />
                        <div className="card-body text-center">
                        <h5 className="card-title" style={{ fontWeight: '500' }}>
                            {product.title}
                        </h5>
                        </div>
                    </div>
                    </div>
                </div>))}
            </div>    
      </div> 
    </div>
  );
}

export default Page;
