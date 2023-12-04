"use client"
import React, { useState } from 'react';
import './style.css';
import dataSource from './dataSource.json';

function BodySection() {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState(0);
  const [minFilter, setMinFilter] = useState();
  const [maxFilter, setMaxFilter] = useState();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 card card-filter">
          <div className="row cardLeft filterHeader ">FIlters</div>

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
          <div className="card card-img">
            <div className="row">
              {dataSource.filter((x) => {
                  if (searchValue == '') return x;
                  else if (x.title.includes(searchValue)) return x;
                })
                .filter((cost) => {
                  if (filterValue == 0) return cost;
                  else if (cost.price >= minFilter && cost.price <= maxFilter) {
                    return cost;
                  }
                })
                .map((items) => (
                  <div key={items.id} className="col-sm-2 grid-img">
                    <figure>
                      <div className="card1">
                        <img
                          src={items.source}
                          className=" img-fluid"
                          alt="Cinque Terre"
                        />
                        <i className="far fa-heart heartWish" />

                        <figcaption>
                          <div className=" imageDesc">
                            <p className="descLine">{items.name}</p>
                            <div>
                              <p className="descLineTwo">
                                Women Skater Black Dress{' '}
                              </p>
                              <img
                                src="https://www.pngmart.com/files/11/E-Commerce-PNG-Clipart.png"
                                className="img-fluid cardLogo"
                                alt="Cinque Terre"
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
                          </div>
                        </figcaption>
                      </div>
                    </figure>
                  </div>
                ))}
            </div>
          </div>
        </div>
    </div>

    </div>
  );
}
export default BodySection;

