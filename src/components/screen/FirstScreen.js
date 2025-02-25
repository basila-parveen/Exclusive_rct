import React, { useState, useEffect, useContext } from "react";
import AppleLogo from "../../assets1/apple.png";
import Phone from "../../assets1/phone.png";
import Arrow from "../../assets1/arrow.svg";
import Delivery from "../../assets1/icon-delivery.svg";
import Customer from "../../assets1/Icon-Customer service.svg";
import secure from "../../assets1/Icon-secure.svg";
import { Link } from "react-router-dom";
import { SearchContext } from "../context/Context";
import axios from "axios";

function FirstScreen() {
  const { searchTerm } = useContext(SearchContext);
  const [dataSearch, setDataSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [secondproducts, setsecondProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/data/mainProducts.json`)

      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/data/seconProducts.json`)

      .then((response) => {
        setsecondProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const filterProducts = (products) => {
    return products.filter((product) =>
      (product.review_h3 || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const showImage = (pdt) => {};
  const filteredProducts = filterProducts(products);
  const filteredSecondProducts = filterProducts(secondproducts);
  const clickMe = (Category) => {
    setDataSearch(Category);
  };

  filteredSecondProducts.filter((data) =>
    data.review_h3.toLowerCase().includes(dataSearch.toLowerCase())
  );

  console.log("Filtered Second Products:", filteredSecondProducts);
  return (
    <div>
      <div className="wrapper2">
        <div className="container1_contentbox">
          <div className="container1_content">
            <div className="container1_content_first">
              <div className="content_first_">
                <img src={AppleLogo} alt="apple" />
                <p>iPhone 14 Series</p>
              </div>
              <h1>
                Up to 10% <br />
                off Voucher
              </h1>
              <div className="shop_now">
                <a href="#">Shop Now</a>
                <img src={Arrow} alt="" />
              </div>
            </div>
            <div className="container1_content_second">
              <img src={Phone} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="wrapper2">
          <div className="container2_content">
            <div className="categories">
              <div className="rectangle"></div>
              <h3>Categories</h3>
            </div>
            <h1>Browse By Category</h1>
            <div className="container2_items_grid">
              {filteredProducts.map((product, index) => (
                <div
                  className="container2_items"
                  key={index}
                  onClick={() => clickMe(product.p)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/${product.image}`}
                    alt={product.p}
                    style={{ width: "100px", marginTop: "15px" }}
                    onClick={showImage}
                  />
                  <p>{product.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="wrapper2">
          <div className="container3_contentbox">
            <div className="container3_content">
              <div className="container3_content_grid">
                {filteredSecondProducts.length > 0 ? (
                  filteredSecondProducts.map((product, index) => (
                    <div className="contentbox_container3" key={index}>
                      <div className="container3_content_box">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/${product.images}`}
                          alt="img1"
                        />

                        <div className="addcart">
                          <p>Add To Cart </p>
                        </div>
                        {product.isnew ? (
                          <div className="container3_new">
                            <h3>New</h3>{" "}
                          </div>
                        ) : (
                          ""
                        )}

                        <div className="wishlist">
                          <img
                            src={`${process.env.PUBLIC_URL}/${product.wishlist_img1}`}
                            alt="heart"
                          />
                          <img
                            src={`${process.env.PUBLIC_URL}/${product.wishlist_img2}`}
                            alt="eye"
                          />
                        </div>
                      </div>

                      <div className="review">
                        <h3>{product.review_h3}</h3>
                        <div className="rating">
                          <p className="money">{product.rating_p1}</p>
                          <img
                            src={`${process.env.PUBLIC_URL}/${product.rating_img}`}
                            alt="star"
                          />
                          <p className="ratingno">{product.rating_p2}</p>
                        </div>
                      </div>

                      {product.colorvarient?.length > 0 && (
                        <div
                          className="colorcircle"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          {product.colorvarient.map((color, index) =>
                            color.first_circle ? (
                              <div
                                className="first_circle_border"
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  border: "2px solid black",
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  position: "relative",
                                }}
                                key={index}
                              >
                                <div
                                  className="first_circle"
                                  style={{
                                    width: "16px",
                                    height: "16px",
                                    backgroundColor: color.first_circle,
                                    borderRadius: "50%",
                                  }}
                                ></div>
                              </div>
                            ) : (
                              <div
                                className="secnd_circle"
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  background: "#db4444",
                                  borderRadius: " 50%",
                                }}
                              ></div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No Match Item Found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper2">
        <hr />
        <Link to="/products">
          <div className="allproducts">View All Products</div>
        </Link>
      </div>
      <div className="customerservice">
        <div className="wrapper2">
          <div className="customerservice_content">
            <div className="service1">
              <div className="delivary_img">
                <div className="service_img">
                  <div className="imgservice">
                    <img src={Delivery} alt="img" />
                  </div>
                </div>
              </div>
              <h4>FREE AND FAST DELIVERY</h4>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="service1">
              <div className="delivary_img">
                <div className="service_img">
                  <div className="imgservice">
                    <img src={Customer} alt="img" />
                  </div>
                </div>
              </div>
              <h4>24/7 CUSTOMER SERVICE</h4>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="service1">
              <div className="delivary_img">
                <div className="service_img">
                  <div className="imgservice">
                    <img src={secure} alt="img" />
                  </div>
                </div>
              </div>

              <h4>MONEY BACK GUARANTEE</h4>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;
