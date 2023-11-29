//imports
import React from "react";
import MyNavbar from "./Navbar";
import TheWelcome from "./Welcome";
import TheCard from "./Card";
import WebFooter from "./Footer";

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <TheWelcome />
      <div className="container mx-auto row">
        <TheCard
          image="https://picsum.photos/501/325"
          title="Product 1"
          description="A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site."
        />
        <TheCard
          image="https://picsum.photos/500/324"
          title="Product 2"
          description="A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site."
        />
        <TheCard
          image="https://picsum.photos/502/325"
          title="Product 3"
          description="A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site."
        />
        <TheCard
          image="https://picsum.photos/502/324"
          title="Product 3"
          description="A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site."
        />
      </div>

      <WebFooter />
    </div>
  );
};

export default Home;
