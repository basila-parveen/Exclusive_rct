import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/Context";
import "./Products.css";
import axios from "axios";
import Delivery from "../../assets1/icon-delivery (1).svg";
import Return from "../../assets1/Icon-return.svg";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Reewritten() {
  const { productid } = useParams();

  const [dataproducts, setdataProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const { searchTerm } = useContext(SearchContext);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/data/gamingProducts.json`)
      .then((response) => {
        setdataProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/data/DetailProducts.json`)
      .then((response) => {
        const selectProduct = response.data.find(
          (productItem) => productItem.id === parseInt(productid)
        );
        setProducts(selectProduct);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [productid]);

  const filterProducts = (products) => {
    return products.filter((product) =>
      (product.review_h3 || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const filteredDataProducts = filterProducts(dataproducts);
  return (
    <div>
      <Helmet>
        <title>Exclusive</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Helmet>
      <div className="rightpage">
        <div className="wrapper2">
          <p className="one">Home /</p>
          <p className="one">{products.category} /&nbsp;</p>

          <h3 className="oneName">{products.review_h3}</h3>
        </div>
      </div>
      <div className="image_container">
        <div style={{ margin: "80px" }}>
          <div
            className="images_content"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div
              className="main_image"
              style={{
                backgroundColor: "#F5F5F5",
                width: "700px",
                height: "600px",
                borderRadius: "4px",
                position: "relative",
              }}
            >
              <div className="gaming_img">
                <img
                  src={`${process.env.PUBLIC_URL}${products.images}`}
                  alt="img"
                  style={{
                    maxWidth: "100%",
                    minHeight: "100%",
                  }}
                />
              </div>
            </div>
            <div
              className="image_contents"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "40px",
                gap: "20px",
                padding: "10px",
                marginTop: "50px",
              }}
            >
              <h3
                style={{
                  fontFamily: "inter",
                  fontWeight: "600",
                  fontSize: " 24px",
                  lineHeight: "24px",
                }}
              >
                {products.review_h3}
              </h3>
              <div
                className="review_description"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <img src={`${process.env.PUBLIC_URL}${products.rating_img}`} />
                <p className="one">{products.review} &nbsp;&nbsp;| </p>
                <p className="two">{products.stock}</p>
              </div>
              <h4
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "24px",
                }}
              >
                {products.price}
              </h4>
              <p
                className="gaming_para"
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  margin: "5px 0",
                }}
              >
                PlayStation 5 Controller Skin High quality vinyl with air
                <br />
                channel adhesive for easy bubble free install & mess
                <br /> free removal Pressure sensitive.
              </p>
              <hr
                className="hr"
                style={{ color: "black", width: "400px", borderWidth: " 1px" }}
              />
              <div className="colors" style={{ display: "flex" }}>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "20px",
                    letterSpacing: " 3%",
                  }}
                >
                  Colours:&nbsp;&nbsp;
                </p>
                <div
                  className="colorcircle"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
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
                  >
                    <div
                      className="first_circle"
                      style={{
                        width: "16px",
                        height: "16px",
                        backgroundColor: "#A0BCE0",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    className="secnd_circle"
                    style={{
                      width: "20px",
                      height: "20px",
                      background: "#db4444",
                      borderRadius: " 50%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="box">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    borderBottom: "1px solid black",
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={Delivery}
                    style={{ width: "40px", height: "40px", color: "black" }}
                  ></img>
                  <div>
                    <h4
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "24px",
                        marginBottom: "10px",
                      }}
                    >
                      Free Delivery
                    </h4>
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "12px",
                        lineHeight: "18px",
                        textDecoration: "underline",
                        marginBottom: "8px",
                      }}
                    >
                      <a href="/#" style={{ color: "black" }}>
                        Enter your postal code for Delivery Availability
                      </a>
                    </p>
                  </div>
                </div>

                <div
                  className="second_return"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginRight: "50px",
                    marginTop: "30px",
                  }}
                >
                  <img
                    src={Return}
                    style={{ width: "40px", height: "40px", color: "black" }}
                  />
                  <div style={{}}>
                    <h4
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Return Delivery
                    </h4>
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      Free 30 Days Delivery Returns.
                      <span style={{ textDecoration: "underline" }}>
                        Details
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="wrapper2">
          <div className="container_iteration">
            <div>
              <div
                style={{
                  width: "140px",
                  height: "40px",
                  gap: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "40px",
                    borderRadius: " 4px",
                    background: "#DB4444",
                  }}
                />
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: " 16px",
                    lineHeight: " 20px",
                    color: "#DB4444",
                  }}
                >
                  Related Item
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
          <div className="wrapper2">
            <div
              className="container3_content_grid2"
              style={{ gridTemplateRows: " repeat(1, 1fr)" }}
            >
              {filteredDataProducts.map((product, index) => (
                <div className="contentbox_container3" key={index}>
                  <div
                    className="container3_content_box"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}${product.images} `}
                      alt="img1"
                    />
                    <div className="addcart">
                      <p>Add To Cart</p>
                    </div>

                    {product.isoffer &&
                      typeof product.isoffer === "object" &&
                      "paragraph" in product.isoffer && (
                        <div className="discount">
                          <p>{product.isoffer.paragraph}</p>
                        </div>
                      )}

                    <div className="wishlist">
                      <img
                        src={`${process.env.PUBLIC_URL}${product.wishlist_img1}`}
                        alt="heart"
                      />
                      <img
                        src={`${process.env.PUBLIC_URL}${product.wishlist_img2}`}
                        alt="eye"
                      />
                    </div>
                  </div>

                  <div className="review">
                    <h3>{product.review_h3}</h3>
                  </div>

                  {product.old_price && (
                    <div
                      className="reviews"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        className="pricevariation"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <p className="firstp">{product.rating_p1}</p>
                        <p className="old_price" style={{ width: "50%" }}>
                          {product.old_price}
                        </p>
                      </div>
                      <div
                        className="reviewimg"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}${product.rating_img}`}
                          alt="star"
                        />
                        <p className="rating" style={{ opacity: "50%" }}>
                          {product.rating_p2}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reewritten;
