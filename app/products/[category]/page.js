"use client"
import React, { useState, useEffect } from 'react';


function Page({ params }) {
  // State variables
  const [productDetails, setProductDetails] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState(0);
  const [minFilter, setMinFilter] = useState();
  const [maxFilter, setMaxFilter] = useState();

  // Function to fetch product details
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

  // Fetch product details on component mount or when category changes
  useEffect(() => {
    fetchProductDetails();
  }, [params.category]);

  // Check if productDetails is not defined yet
  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          {/* ... (filter component) */}
        </div>

        <div className="col-sm">
          <div className="card">
            <div className="row">
              {productDetails &&
                productDetails
                  .filter((x) => {
                    if (searchValue === '') return x;
                  })
                  .filter((cost) => {
                    if (filterValue === 0) return cost;
                    else if (cost.price >= minFilter && cost.price <= maxFilter) {
                      return cost;
                    }
                  })
                  .map((items) => (
                    <div key={items.id} className="col-sm-4 grid-img">
                      <div className="card1">
                        <div className="imageDesc">
                          <p className="descLine">{items.title}</p>
                          <div>
                            <img
                              src={items.image}
                              style={{ width: '300px', height: '300px', borderRadius: '8px' }}
                              alt={items.title}
                            />
                          </div>
                          <div className="productDesc">
                            <p className="price">
                              ₹{items.price}
                              <span className="priceCut">₹{items.priceCut}</span>
                              <span className="offer">{items.offer}% off</span>
                            </p>
                          </div>
                          <div className="col">
                            <p>{items.descreption}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
