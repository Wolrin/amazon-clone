import Prodact from "./Prodact";
import "../styles/Home.css";
import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="prime"
        />
        <div className="home_row">
          <Prodact
            id="1"
            title="the book rich dad poor dad"
            price={19.98}
            image="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg"
            rating={3}
          />
          <Prodact
            id="2"
            title="the old nokia phone for the old peaple like my grandpa"
            price={12.99}
            image="https://i.pinimg.com/736x/6f/24/f8/6f24f8bb99ff1c53e39a843ce3fc4ca2.jpg"
            rating={1}
          />
        </div>
        <div className="home_row">
          <Prodact
            id="3"
            title="the new clock of Samsung That is soo powerful"
            price={249.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}
          />
          <Prodact
            id="4"
            title="the wifi of google he work like a rocket"
            price={174.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />
          <Prodact
            id="5"
            title="the very instersting tablet from XTouch"
            price={300}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Prodact
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={2094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Prodact
            id="7"
            title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
            price={2099.99}
            image="https://m.media-amazon.com/images/S/aplus-media/vc/b3fa1b54-e7f0-4838-9161-7c04ff734a65.__CR0,0,2000,820_PT0_SX1464_V1___.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Prodact
            id="8"
            title="Garmin Forerunner 235, GPS Running Watch, Black/Gray"
            price={177.06}
            image="https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_UL115_.jpg"
            rating={4}
          />
          <Prodact
            id="9"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC ..."
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_UL115_.jpg"
            rating={4}
          />
          <Prodact
            id="10"
            title="the very instersting tablet from XTouch"
            price={300}
            image="https://m.media-amazon.com/images/G/01/AmazonStores/Traffic/Search/Brand_Shopping_Pages/Collections_Widget/Apple/12.9_iPad_Pro.jpg"
            rating={5}
          />
          <Prodact
            id="11"
            title="the very instersting tablet from XTouch"
            price={300}
            image="https://m.media-amazon.com/images/I/71Ha06XS-VL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Prodact
            id="12"
            title="the book rich dad poor dad"
            price={1219.99}
            image="https://m.media-amazon.com/images/I/91zmQQ6C09L._AC_UY218_.jpg"
            rating={3}
          />
          <Prodact
            id="13"
            title="the old nokia phone for the old peaple like my grandpa"
            price={12.99}
            image="https://m.media-amazon.com/images/I/81sQxjJBn1L._AC_UY218_.jpg"
            rating={1}
          />
        </div>
        <div className="home_row">
          <Prodact
            id="14"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Prodact
            id="15"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Prodact
            id="16"
            title="Roll over image to zoom in bopmen S40 Active Noise Cancelling Bluetooth Headphones ..."
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61o-AamwyEL._AC_SL1000_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Prodact
            id="17"
            title="Echo Plus (2nd Generation) with Amazon Smart Plug - Charcoal"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61mhy8eQGEL._AC_SL1000_.jpg"
            rating={4}
          />
          <Prodact
            id="18"
            title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 256GB) - Space Gray (2nd Generation) with AppleCare+ Bundle"
            price={1178.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61Qhkzxsb-L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Prodact
            id="19"
            title="Bowflex SelectTech 552 - Two Adjustable Dumbbells"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816lKIQ3C8L._AC_SL1500_.jpg"
            rating={5}
          />
          <Prodact
            id="20"
            title='Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display ...'
            price={999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg"
            rating={5}
          />
          <Prodact
            id="21"
            title="Think Like A Monk - By Jay Shetty"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41mXQJF3aEL.jpg"
            rating={5}
          />
          <Prodact
            id="22"
            title="CCIVV Stylus Pen 2 in 1 Fine Point & Mesh Tip Stylus for Touch Screen, Compatible for Tablet and Cellphone (1Pc, Black)"
            price={8.99}
            image="https://m.media-amazon.com/images/I/61SE2VEAdhL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Prodact
            id="23"
            title="Laptop Table, Adjustable Great Laptop Bed Table, Portable Laptop Workstation Notebook Stand ..."
            price={39.88}
            image="https://m.media-amazon.com/images/I/61mnn77SjHL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Prodact
            id="25"
            image="https://m.media-amazon.com/images/I/71ivrWiYkLL._AC_UY218_.jpg"
            price={1099.8}
            rating={5}
            title="Nintendo Switch with Neon Blue and Neon Red Joy-Console"
          />
          <Prodact
            id="26"
            image="https://m.media-amazon.com/images/I/41Y8JD3pDRL._AC_UL320_.jpg"
            price={789.99}
            rating={4}
            title="Oxelo Classic Waveboard Blue Black"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
