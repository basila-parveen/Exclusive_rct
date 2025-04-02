import React, { useState, useEffect, useContext } from "react";
import "./Products.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { SearchContext } from "../context/Context";
import styled from "styled-components";
import { Helmet } from "react-helmet";

function Products() {
  const { searchTerm } = useContext(SearchContext);
  const location = useLocation();
  const [dataproducts, setdataProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/data/Products.json`)
      .then((response) => {
        console.log("Fetched Data:", response.data);
        setdataProducts(response.data);
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

  const filteredDataProducts = filterProducts(dataproducts);

  return (
    <div>
      <Helmet>
        <title>EXCLUSIVE</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Helmet>
      <div className="rightpage">
        <div className="wrapper2">
          <div className="datapdt" style={{ display: "flex" }}>
            <p className="one">Home</p>
            <p>{location.pathname}</p>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="wrapper2">
          <div className="container3_content_grid2">
            {filteredDataProducts.length > 0 ? (
              filteredDataProducts.map((product, index) => (
                <ProductLink to={`/product/${product.id}`}>
                  <div className="contentbox_container3" key={index}>
                    <div className="container3_content_box">
                      <img
                        src={`${process.env.PUBLIC_URL}${product.images}`}
                        alt="img1"
                      />
                      <div className="addcart">
                        <p>Add To Cart</p>
                      </div>

                      {product.isnew && (
                        <div className="container3_new">
                          <h3>New</h3>
                        </div>
                      )}
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

                    {product.old_price ? (
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
                        <div className="reviewimg" style={{ display: "flex" }}>
                          <img
                            src={`${process.env.PUBLIC_URL}${product.rating_img}`}
                            alt="star"
                          />

                          <p className="rating" style={{ opacity: "50%" }}>
                            {product.rating_p2}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="rating">
                        <p className="money">{product.rating_p1}</p>
                        <img
                          src={`${process.env.PUBLIC_URL}${product.rating_img}`}
                          alt="Rating Stars"
                        />
                        <p className="ratingno">{product.rating_p2}</p>
                      </div>
                    )}

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
                                  backgroundColor: color.first_circle,
                                  width: "16px",
                                  height: "16px",
                                  borderRadius: "50%",
                                }}
                              ></div>
                            </div>
                          ) : (
                            <div
                              className="secnd_circle"
                              key={index}
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
                </ProductLink>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export default Products;
