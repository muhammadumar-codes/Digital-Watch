import "./Product.css";

import { Link } from "react-router-dom";

export default function Product({ watches }) {
  return (

 
      <div className="card-container">
      {watches.length > 0 ? (
        watches.map((item) => (
         <Link to={`productDetail/${item.id}`}>
         
          <div
            className="card shadow-sm mb-4 bg-body rounded"
            style={{ width: "22rem" }}
            key={item.id}
          >
            <img src={item.image} className="watch-img" alt={item.name} />
            <div className="card-body text-center">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <h6 className="price-tag">Rs, {item.price}</h6>
              <a href="#" className="btn-gradient">🛒 Add To Cart</a>
            </div>
          </div>
         </Link>
        ))
      ) : (
        <h3>No watches found for this category ⌚</h3>
      )}
    </div>
    

   
  );
}
