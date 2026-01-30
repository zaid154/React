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
        <h5>{data.name}</h5>

        <p style={{ padding: "10px", fontWeight: "900" }}>Ingredients</p>

        <p>{data.detail}</p>

        <div className="price_rating">
          <span>₹{data.price}</span>
          <span>{data.rating} ⭐</span>
        </div>

        <div className="btn_box">
          <button id="add_cart">
            Add to cart
          </button>

          <button id="buy_now">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
