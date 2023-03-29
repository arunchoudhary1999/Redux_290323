import React, { useState } from "react";

function Home(props) {
  console.log("props", props);

  const [dataCollect, setDataCollect] = useState([
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14pro-digitalmat-gallery-5-202209?wid=364&hei=333&fmt=png-alpha&.v=1663346233360",
      name: "iPhone 15 Pro",
      price: "₹129900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14-digitalmat-gallery-3-202209?wid=364&hei=333&fmt=png-alpha&.v=1662055813794",
      name: "iPhone 14 Pro",
      price: "₹79900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone13-digitalmat-gallery-3-202203?wid=364&hei=333&fmt=png-alpha&.v=1644988765122",
      name: "iPhone 13",
      price: "₹11295.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphonese-digitalmat-gallery-3-202203?wid=364&hei=333&fmt=png-alpha&.v=1644987579761",
      name: "iPhone SE",
      price: "₹49900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone12-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635178709000",
      name: "iPhone 12",
      price: "₹59900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14pro-digitalmat-gallery-5-202209?wid=364&hei=333&fmt=png-alpha&.v=1663346233360",
      name: "iPhone 15 Pro Max",
      price: "₹129900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14-digitalmat-gallery-3-202209?wid=364&hei=333&fmt=png-alpha&.v=1662055813794",
      name: "iPhone 14 Pro",
      price: "₹79900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone13-digitalmat-gallery-3-202203?wid=364&hei=333&fmt=png-alpha&.v=1644988765122",
      name: "iPhone 13",
      price: "₹11295.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphonese-digitalmat-gallery-3-202203?wid=364&hei=333&fmt=png-alpha&.v=1644987579761",
      name: "iPhone SE",
      price: "₹49900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone12-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635178709000",
      name: "iPhone 12",
      price: "₹59900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14pro-digitalmat-gallery-5-202209?wid=364&hei=333&fmt=png-alpha&.v=1663346233360",
      name: "iPhone 15 Pro Max",
      price: "₹129900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14-digitalmat-gallery-3-202209?wid=364&hei=333&fmt=png-alpha&.v=1662055813794",
      name: "iPhone 14 Pro",
      price: "₹79900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone13-digitalmat-gallery-3-202203?wid=364&hei=333&fmt=png-alpha&.v=1644988765122",
      name: "iPhone 13",
      price: "₹11295.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphonese-digitalmat-gallery-3-202203?wid=364&hei=333&fmt=png-alpha&.v=1644987579761",
      name: "iPhone SE",
      price: "₹49900.00",
    },
    {
      mobile:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone12-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635178709000",
      name: "iPhone 12",
      price: "₹59900.00",
    }
  ]);

  return (
    <div>
      <h1><span style={{color: "rebeccapurple"}}>Store.</span> The best way to buy the products you love.</h1>
      {dataCollect.map((emp, index) => (
        <div key={index} className="cart-wrapper">
          <div className="img-wrapper item">
            <img src={emp.mobile} alt="img" />
          </div>
          <div className="text-wrapper item">
            <span>{emp.name}</span>
            <br />
            <span>{emp.price}</span>
          </div>
          <div className="btn-wrapper item">
            <button
              className="add-card-btn"
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: "i phone 11" });
              }}
            >
              Add To Cart
            </button>
            <button
              onClick={() => {
                props.removeToCartHandler();
              }}
            >
              Remove To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Home;
