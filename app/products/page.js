// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './globals.css';

// const AllCategories = () => {
//   // State to store all products
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch all products
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products');
//         const data = await response.json();
//         setProducts(data || []);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filterProductsByCategory = (category) => {
//     return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
//   };
//   const getViewAllLink = (category) => `/${category.toLowerCase()}`;
//   const renderCategoryProducts = (category) => (
//     <div className="container-fluid" key={category}>
//       <div className="col-sm-2 mt-4 mx-auto">
//         <div className="card-body">
//           <h5 className="card-title" style={{ fontWeight: '1000' }}>{category.toUpperCase()} CATEGORY</h5>
//         </div>
//       </div>
//       <a href={getViewAllLink(category)} className="custom-right-align">
//         <h5 className="card-title custom-right-align-text">View All</h5>
//       </a>

//       <div className="row">
//         {filterProductsByCategory(category).map((product) => (
//           <div key={product.id} className="col-sm-2 mt-4">
//             <div className="card">
//               <div className="card-body">
//                 <img src={product.image} alt={product.title} className="img-fluid" />
//                 <div className="card-body text-center">
//                   <h5 className="card-title" style={{ fontWeight: '800' }}>{product.title}</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
//   const categories = ['Electronics', 'Jewelry', 'Clothing'];  

//   return (
//     <div>
//       {categories.map(renderCategoryProducts)}

//     </div>
//   );
// };

// export default AllCategories;
// navigator

