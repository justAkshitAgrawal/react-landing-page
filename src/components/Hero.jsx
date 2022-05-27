import React from "react";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

function Hero() {
  return (
    <div>
      <Filters />
      <div className="flex justify-around mx-40 px-52">
        <ProductCard
          title="CoolHeadz"
          image="http://nftcalendar.io/storage/photos/11/CoolHeadz/coolheadz-030.jpg"
          free={false}
          imp={false}
        />
        <ProductCard
          title="CryptoPunk"
          image="https://nasacademy.com/blog/wp-content/uploads/cryptopunk-with-back-hair-and-glasses.jpeg"
          free={false}
          imp={true}
        />
        <ProductCard
          title="Bored Ape"
          image="https://d1don5jg7yw08.cloudfront.net/800x800/nft-images/Bored_Ape_Yacht_Club_1619928448096.png"
          free={true}
          imp={false}
        />
      </div>
    </div>
  );
}

export default Hero;
