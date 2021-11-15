import React from "react";
import Product from "./Product";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/Pisco/Fuji_TallHero_Pisco2_en_US_1x._CB415562980_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="23423"
            title="Stephen King's The Dark Tower: The Drawing of the Three: The Complete
          Graphic Novel Series"
            price={74.99}
            image="https://m.media-amazon.com/images/I/71G5RgGhxfL._AC_UL320_.jpg"
            rating={5}
          />

          <Product
            id="324134"
            title="Kingston A400 240G Internal SSD M.2 2280 SA400M8/240G - Increase Performance"
            price={34.99}
            image="https://m.media-amazon.com/images/I/7113jVBCyWL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="987897"
            title="Herzeleid - XXV Anniversary Edition [2 LP]"
            price={42.98}
            image="https://m.media-amazon.com/images/I/712WcEvG-9L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="67878"
            title="Coleman Switch Insulated Stainless AUTOSPOUT Steel Water Bottle"
            price={17.8}
            image="https://m.media-amazon.com/images/I/71hU5S8oBdL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="4353"
            title="PlayStation Classic"
            price={64.97}
            image="https://images-na.ssl-images-amazon.com/images/I/71ogaAK8DGL._AC_SY220_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="54444"
            title="Anker 4-Port USB 3.0 Hub, Ultra-Slim Data USB Hub with 2 ft Extended Cable "
            price={12.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51scO1VOfIL._AC_SY220_.jpg"
            rating={3}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
