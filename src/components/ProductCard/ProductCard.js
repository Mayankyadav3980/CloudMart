import React from "react";

const ProductCard = ({ details }) => {
  const { id, name, des, price, category, stock, rating, img, tags } = details;
  return (
    <div className="card_cont">
      <div className="img_cont">
        <img src={img} height="100%" width="100%" />
      </div>
      <div className="card_body">
        <div className="rating">
          <p>{name.length > 20 ? name.substring(0,20)+'...': name}</p>
          <span> ⭐️ {rating}</span>
        </div>

        <p>${price}</p>
        <button className="btn btn-light shop_btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
