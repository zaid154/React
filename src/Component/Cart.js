import products from "../utils/Product";
import swipe from "./pic.jpg";


let Card = ({ data }) => {
  return (
    <div className="cart">
      <div className="cart-img">
       <img src={swipe} alt="swipe" />
        <img src={data.image} alt="food" />
      </div>

      <div className="res-detail">
        <h5>{data.name}</h5>
        <p
          style={{
            padding: "10px",
            fontWeight: "900",
          }}
        >
          Ingredients
        </p>
        <p>{data.detail}</p>
        <div className="price_rating">
          <span>₹{data.price}</span>
          <span>{data.rating}⭐</span>
        </div>
        <div className="btn_box">
          <button id="add_cart" onClick={() => handleAddCart(data)}>
            Add to cart
          </button>

          <button id="buy_now">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
