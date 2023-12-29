"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Page({ params }) {
  const [productDetails, setProductDetails] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState(0);
  const [minFilter, setMinFilter] = useState();
  const [maxFilter, setMaxFilter] = useState();

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 ">
          <div className="row mx-2"> ******** filter********</div>

            <div class="priceFilter">
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


        <div className="col-sm">
          <div className="card ">
            <div className=" col-2">
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
                  <div key={items.id} className="col-sm-4 grid-img">
                      <div className="card1">
                          <div className=" imageDesc ">
                            <p className="descLine">{items.title}</p>
                          <div>
                          <img
                            src={items.image}
                            style={{ width: '300px', height: '300px', borderRadius: '8px' }} 
                          />
                      </div>

                      <div className="productDesc">
                        <p className="price">
                          ₹{items.price}
                          <span className="priceCut">
                            ₹{items.priceCut}
                          </span>
                          <span className="offer">{items.offer}%0ff</span>
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

    //  </div>
  );
}

export default Page;
