
// "use client";
// import React, { useState, useEffect } from 'react';

// function AllCategories(){
// // State to store all products
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch all products
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         setProducts(data || []);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to filter products by category
//   const filterProductsByCategory = (category) => {
//     return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
//   };

// return (
// 	<div>
// 	{/* ... (Your existing code) ... */}

// 	{/* Electronics Category */}
// 	<div className="container-fluid">
// 		<div className="col-sm-2 mt-4 mx-auto">
// 		<div className="card-body">
// 			<h5 className="card-title" style={{ fontWeight: '1000' }}>ELECTRONICS CATEGORY</h5>
// 		</div>
// 		</div>

// 		{/* Update the URL for the "View All" button in the Electronics category */}
// 		<a href="/electronics" className="custom-right-align">
// 		<h5 className="card-title custom-right-align-text">View All</h5>
// 		</a>

// 		<div className="row">
// 		{/* Map over electronic products and display them */}
// 		{filterProductsByCategory('electronics').map((product) => (
// 			<div key={product.id} className="col-sm-2 mt-4">
// 			<div className="card">
// 				<div className="card-body">
// 				<img src={product.image} alt={product.title} className="img-fluid" />
// 				<div className="card-body text-center">
// 					<h5 className="card-title" style={{ fontWeight: '800' }}>{product.title}</h5>
// 				</div>
// 				</div>
// 			</div>
// 			</div>
// 		))}
// 		</div>
// 	</div>

// 	{/* Jewelry Category */}
// 	<div className="container-fluid">
// 		<div className="col-sm-2 mt-4 mx-auto">
// 		<div className="card-body">
// 			<h5 className="card-title" style={{ fontWeight: '1000' }}>JEWELRY CATEGORY</h5>
// 		</div>
// 		</div>

// 		{/* Update the URL for the "View All" button in the Jewelry category */}
// 		<a href="/jewelry" className="custom-right-align">
// 		<h5 className="card-title custom-right-align-text">View All</h5>
		
// 		</a>

// 		<div className="row">
// 		{/* Map over jewelry products and display them */}
// 		{filterProductsByCategory('jewelery').map((product) => (
// 			<div key={product.id} className="col-sm-2 mt-4">
// 			<div className="card">
// 				<div className="card-body">
// 				<img src={product.image} alt={product.title} className="img-fluid" />
// 				<div className="card-body text-center">
// 					<h5 className="card-title" style={{ fontWeight: '800' }}>{product.title}</h5>
// 				</div>
// 				</div>
// 			</div>
// 			</div>
// 		))}
// 		</div>
// 	</div>

// 	{/* Clothing Category */}
// 	<div className="container-fluid">
// 		<div className="col-sm-2 mt-4 mx-auto">
// 		<div className="card-body">
// 			<h5 className="card-title" style={{ fontWeight: '1000' }}>CLOTHING CATEGORY</h5>
// 		</div>
// 		</div>

// 		{/* Update the URL for the "View All" button in the Clothing category */}
// 		<a href="/clothing" className="custom-right-align">
// 		<h5 className="card-title custom-right-align-text">View All</h5>
// 		</a>

// 		<div className="row">
// 		{/* Map over clothing products and display them */}
// 		{filterProductsByCategory('clothing').map((product) => (
// 			<div key={product.id} className="col-sm-2 mt-4">
// 			<div className="card">
// 				<div className="card-body">
// 				<img src={product.image} alt={product.title} className="img-fluid" />
// 				<div className="card-body text-center">
// 					<h5 className="card-title" style={{ fontWeight: '800' }}>{product.title}</h5>
// 				</div>
// 				</div>
// 			</div>
// 			</div>
// 		))}
// 		</div>
// 	</div>

// 	{/* ... (Your existing code for other categories) ... */}
// 	</div>  )};


// export default AllCategories;




// "use client";
// import Link from 'next/link'
// import React, { useState, useEffect } from 'react';

// function AllCategories() {
//   // State to store all products
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch all products
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         setProducts(data || []);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to filter products by category and return the first four items
//   const filterProductsByCategory = (category) => {
//     const categoryProducts = products.filter(
//       (product) => product.category.toLowerCase() === category.toLowerCase()
//     );
//     return categoryProducts.slice(0, 4); // Return only the first four items
//   };

//   return (
//     <div>
//       {/* Map over categories and render each category */}
//       {['electronics', 'jewelery', "women's clothing"].map((category) => (
//         <div key={category} className="container-fluid">
//           <div className="col-sm-2 mt-4 mx-auto">
//             <div className="card-body">
//               <h5 className="card-title" style={{ fontWeight: '100' }}>
//                 {category.toUpperCase()} CATEGORY
//               </h5>
//             </div>
//           </div>
//           <a href={`/${category}`} className="custom-right-align">
//             <h5 className="card-title custom-right-align-text">View All</h5>
// 			<Link href={`/products/${category}`}>View All</Link>
//           </a>
//           {/* Render products for the current category */}
// 		  <div className='container'>
//           <div className="row md-4">
//             {filterProductsByCategory(category).map((product) => (
			
//               <div key={product.id} className="col-md-3 md-4">
//                 <div className="card">
//                   <div className="card-body">
//                     <img src={product.image} alt={product.title} className="img-fluid" />
//                     <div className="card-body text-center">
//                       <h5 className="card-title" style={{ fontWeight: '500' }}>
//                         {product.title}
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>
		
//             ))}
//           </div>
// 		</div>
//         </div>
	
//       ))}
//     </div>

//   );
// }

// export default AllCategories;


"use strict";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function AllCategories() {
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

  // Function to filter products by category and return the first four items
  const filterProductsByCategory = (category) => {
    const categoryProducts = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    return categoryProducts.slice(0, 4); // Return only the first four items
  };

  return (
    <div>
      {/* Map over categories and render each category */}
      {['electronics', 'jewelery', "women's clothing"].map((category) => (
        <div key={category} className="product-container">
          <div className="row mb-4">
            <h5 className="card-title" style={{ fontWeight: '100' }}>
              {category.toUpperCase()} CATEGORY
            </h5>
          </div>
          <a href={`/${category}`} className="custom-right-align">
            {/* <h5 className="card-title custom-right-align-text"></h5> */}
            <Link className="link" href={`/products/${category}`}>
              View All
            </Link>
          </a>
          {/* Render products for the current category */}
          <div className='row mb-4'>
            {filterProductsByCategory(category).map((product) => (
              <div key={product.id} className="col-md-3 mb-4">
                <div style={{ borderRadius: '8px' }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: '350px',
                      height: '300px',
                      borderRadius: '8px',
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between"
                    }}
                  />
                  <div className="p-3">
                    <h6>{product.title}</h6>
                    <p>Price: ${product.price}</p>
                    <p>ID: {product.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllCategories;
