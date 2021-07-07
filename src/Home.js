import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="111"
          title="Kaos Anjay Mabar"
          price={90000}
          rating={4}
          image="https://images.tokopedia.net/img/cache/500-square/product-1/2020/1/10/7188862/7188862_ce405b7a-60ea-47c2-a100-7597fcb160a1_1024_1024.jpg.webp"
        />

        <Product
          id="112"
          title="ASUS ROG G513QC-R735B6T-O GeForce RTX™ 3050 R7-5800H
          "
          price={19999999}
          rating={5}
          image="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/6/17/7b221cd5-d74f-40f4-8a5c-167e4a08adef.png"
        />
      </div>

      <div className="home_row">
        <Product
          id="113"
          title="COSBABY SPIDERMAN HANGING MARVEL AVENGERS ACTION FIGURE HOT TOYS - SPIDERMAN C
          "
          price={48000}
          rating={3}
          image="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/6/10/254cefcf-d257-440f-b42d-f1d205834ace.jpg"
        />

        <Product
          id="114"
          title="Ipad Gege Gemink"
          price={8000000}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTsNUzJR5XwQSzolgg0nRa_bZndd0gfPtIg&usqp=CAU"
        />

        <Product
          id="115"
          title="SSD Midasforce 1TB - Caddy 9.5"
          price={1431000}
          rating={5}
          image="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/1/22/30ce8918-51c1-44f0-b659-2d180b535a1d.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="116"
          title="JOYSEUS Wireless Mouse 1800DPI USB Computer 2.4GHz Mouse - MS0003"
          price={65000}
          rating={4}
          image="https://images.tokopedia.net/img/cache/900/product-1/2020/10/11/38905081/38905081_927e7e00-3c17-40ee-ad0c-a95ff575d7ca_1771_1771"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
