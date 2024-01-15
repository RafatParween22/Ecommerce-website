<<<<<<< HEAD
"use client"
=======
"use client";

>>>>>>> 93e8dccb9f646884a274cd4fd7318919b1345791
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { MiddlewareNotFoundError } from 'next/dist/shared/lib/utils';
function Page({ params }) {
  // State variables
  const [productDetails, setProductDetails] = useState([]);
<<<<<<< HEAD
=======


>>>>>>> 93e8dccb9f646884a274cd4fd7318919b1345791
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState(0);
  const [minFilter, setMinFilter] = useState();
  const [maxFilter, setMaxFilter] = useState();

  // Function to fetch product details
  const fetchProductDetails = () => {
<<<<<<< HEAD
=======

>>>>>>> 93e8dccb9f646884a274cd4fd7318919b1345791
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

<<<<<<< HEAD
  // Check if productDetails is not defined yet
=======
>>>>>>> 93e8dccb9f646884a274cd4fd7318919b1345791
  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='heder my-3 mx-5 '>
          <h2 className='text'>
            Category / {params.category}
            </h2>
            <p>Crafted Elegance : {params.category}</p>
      </div>

    <div className="container-fluid">
<<<<<<< HEAD
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
=======
      <div className="row first-row mx-5">
        {/* <div className=" col card card-filter"> */}
        <div className="col col-2 col-first card my-3">
          <div class="priceFilter  ">
            <p> Price:</p>
            <div>
              <input
                className="minInput"
                label="Price"
                placeholder="Min..."
                value={minFilter}
                onChange={(e) => {
                  setMinFilter(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                className="minInput"
                placeholder="Max..."
                value={maxFilter}
                onChange={(e) => {
                  setMaxFilter(e.target.value);
                }}
              />
            </div>

            <button onClick={() => setFilterValue(1)}>Apply</button>
          </div>
        </div>

        {/* "photos in side row"           */}

        <div className="col col-secnd">
          <div className="row row-cols-3 row-colum">

            {productDetails.filter((x) => {
              if (searchValue == '') return x;
            })
              .filter((cost) => {
                if (filterValue == 0) return cost;
                else if (cost.price >= minFilter && cost.price <= maxFilter) {
                  return cost;
                }
              })
              .map((items) => (
                <div key={items.id} className="col-sm-4 grid-img ">
                  <div className="card my-3">
                    <div className=" imageDesc ">

                      {/* <p className="descLine">{items.title}</p> */}

                      <div >
                        <Link className="link" href={`/detailed/${items.id}`}>
                          <img className='mask  mx-auto d-block'
                            src={items.image}
                            style={{ width: '300px', height: '300px', borderRadius: '5px' }}
                          />
                        </Link>
                      </div>

                      <div className="productDesc ">
                        <p className=" text-sm-end price  mx-4 ">
                          ₹{items.price}
                          <span className=" offer ">%0ff</span>
                        </p>
                        <p className="descLine mx-3 ">{items.title}</p>
                        
                      </div>

                    </div>

                  </div>

                </div>
              ))}

          </div>

        </div>
        <div>



        </div>
      </div>

    </div>
>>>>>>> 93e8dccb9f646884a274cd4fd7318919b1345791
    </div>
  );
}

export default Page;
