// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../src/firebase"

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const querySnapshot = await getDocs(collection(db, "products"));
//       const productsArray = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setProducts(productsArray);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <img src={product.imageURL} alt={product.name} />
//           <p>Price: ₹{product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
import React from 'react'

const product = () => {
  return (
    <div>
      
    </div>
  )
}

export default product

