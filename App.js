import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./src/Component/Header";
import products from "./src/utils/Product";
import Card from "./src/Component/Cart";
import Footer from "./src/Component/Footer.js"





let App = () => {
  return (
    <>
      <Header />
      <div className="cart-list">
        {products.map((products) => {
          return <Card data={products} key={products.id} />;
        })}
      </div>

      <Footer/>

    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

const handleAddCart = (item) => {
  alert("Added to cart");
  console.log(item.id, item.name);
};


