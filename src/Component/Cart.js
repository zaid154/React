import { useState } from "react";

const dietColorMap = {
  Vegetarian: "green",
  "Non-Vegetarian": "red",
  Sweet: "orange",
  Drink: "blue",
  Vegan: "darkgreen",
  Eggetarian: "yellow",
};

const Card = ({ data }) => {
  return (
    <div className="cart">
      <div
        className="cart-img"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="diet_dot"
          style={{
            backgroundColor: dietColorMap[data.dietType] || "gray",
          }}
        />
      </div>

      <div className="res-detail">
        <h5 style={{marginBottom:"10px" , fontSize: "18px" }}>{data.name}</h5>
        <p style={{ fontWeight: "900", fontSize: "14px" }}>Ingredients</p>

        <p>{data.detail}</p>

        <div className="price_rating" style={{ marginTop: "15px" }}>
          <span>₹{data.price}</span>
          <span>{data.rating} ⭐</span>
        </div>

        <div className="btn_box">
          <button id="add_cart">Add to cart</button>

          <button id="buy_now">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
