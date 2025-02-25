import React, { useState, useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/Context";
import "./Products.css";
import Cart from "../../assets1/cart.svg";
import Search from "../../assets1/search.svg";
import Wishlist from "../../assets1/wishlist.svg";

function Header() {
  const [SelectedOption, setSelectedOption] = useState("English");
  const { setSearchTerm } = useContext(SearchContext);

  const OptionSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Navbar>
      <FirstContent>
        <FirstNav>
          <Heading>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </Heading>
          <StyledLink to="#">ShopNow</StyledLink>
        </FirstNav>
        <SecondNav>
          <Label>
            <Select value={SelectedOption} onChange={OptionSelect}>
              <Option value="English">English</Option>
              <Option value="Malayalam">Malayalam</Option>
              <Option value="Hindi">Hindi</Option>
              <Option value="Arabic">Arabic</Option>
            </Select>
          </Label>
        </SecondNav>
      </FirstContent>

      <div className="wrapper1">
        <div className="navbar_second">
          <h1 className="logo">Exclusive</h1>
          <input name="origin" type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <i className="fa-solid fa-bars" id="bars"></i>
          </label>
          <ul className="unordered_list1">
            <li className="list1 first_list">Home</li>
            <li className="list1">Contact</li>
            <li className="list1">About</li>
            <li className="list1">Sign Up</li>
          </ul>
          <ul className="header_right">
            <li className="search">
              <input
                type="search"
                placeholder="What are you looking for?"
                name="search"
                className="searched"
                id="search_item"
                onChange={(e) => {
                  setSearchTerm(e.target.value.toLowerCase());
                }}
              />
              <span>
                <img src={Search} alt="search" />
              </span>
            </li>
            <li className="container">
              <h1>
                <a href="#">
                  <img
                    src={Wishlist}
                    alt="heart"
                    style={{ marginBottom: "7px" }}
                  />
                </a>
              </h1>
            </li>
            <li className="container">
              <h1>
                <a href="#">
                  <img src={Cart} alt="heart" className="cart" />
                </a>
              </h1>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </Navbar>
  );
}
const Navbar = styled.div``;
const FirstContent = styled.div`
  background: #000000;
  display: flex;
  align-items: center;
  font-family: "Poppins", serif;
  max-width: 100%;
  justify-content: space-around;
  padding: 10px;
  margin-left: auto;
`;
const FirstNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Heading = styled.p`
  color: white;
  font-weight: 400;
  margin-left: 150px;
  @media (max-width: 900px) {
    margin-left: 30px;
  }
  @media (max-width: 800px) {
    font-weight: 350;
    font-size: 15px;
  }
`;
const StyledLink = styled.a`
  text-decoration: underline;
  font-weight: 600;
  color: #fff;
  @media (max-width: 800px) {
    font-size: 13px;
    font-weight: 500;
  }
  @media (max-width: 460px) {
    margin-right: 20px;
  }
`;
const SecondNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  color: white;
  background-color: black;
  margin-right: 10px;
`;
const Select = styled.select`
  background-color: #000;
  color: #fff;
  border: none;
`;
const Option = styled.option`
  font-weight: 400;
  font-size: 14px;
  font-family: "Poppins", serif;
  line-height: 21px;
`;

export default Header;
