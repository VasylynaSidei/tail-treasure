import React from "react";
import "./discount.css";
import { FaHeart } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FooterPage } from "./FooterPage.jsx";

const Discount = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const anchor = document.getElementById(hash.slice(1));
    if (!anchor) return;
    anchor.scrollIntoView({ behavior: "instant" }); // customize behavior as desired
  }, []);

  return (
    <div className="main-container">
      <h2 className="discount-h2">Enjoy a 30% discount on first Purchase</h2>

      <h1 className="discount-h1" id="dogs">
        Premium food for Dogs
      </h1>
      <div className="dog-container">
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>
            <img src={"/Images/discountimages/dogfood1.jpg"} alt="Dog Food 1" />
            <div className="dog-description-container">
              <p className="dog-description">
                Pedigree PRO Expert Nutrition Small Adult Breed(2-9Months)
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>
            <img src={"/Images/discountimages/dogfood2.jpg"} alt="Dog Food 2" />
            <div className="dog-description-container">
              <p className="dog-description">
                Pedigree Meat & Milk Puppy Dry Puppy Food
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>
            <img src={"/Images/discountimages/dogfood3.jpg"} alt="Dog Food 3" />
            <div className="dog-description-container">
              <p className="dog-description">
                Pedigree PRO Expert Nutrition Small Adult Breed Dry Dog Food
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>
            <img src={"/Images/discountimages/dogfood4.jpg"} alt="Dog Food 2" />
            <div className="dog-description-container">
              <p className="dog-description">
                Pedigree PRO Expert Nutrition Active Adult Dry Dog Food
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="discount-h1" id="cats">
        Premium food for Cats
      </h1>

      <div className="dog-container">
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/catfood5.jpeg"}
              alt="Dog Food 1"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Specially developed dry food for adult British Shorthair Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/catfood2.jpeg"}
              alt="Dog Food 1"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                lps maintain muscle mass thanks to a high protein content
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/catfood3.jpeg"}
              alt="Dog Food 1"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Complete dry food for adult neutered Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/catfood4.jpeg"}
              alt="Dog Food 1"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="discount-h1" id="birds">
        Premium food for Birds
      </h1>

      <div className="dog-container">
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/birdfood1.jpg"}
              alt="Bird Food 1"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/birdfood2.jpg"}
              alt="Bird Food 2"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/birdfood3.jpg"}
              alt="Bird Food 1"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/birdfood4.jpg"}
              alt="Bird Food 1"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="discount-h1">Premium food for Rodents</h1>

      <div className="dog-container" id="rodents">
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/rodentsfood1.jpg"}
              alt="Rodents Food 1"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/rodentsfood2.jpg"}
              alt="Rodents Food 2"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/rodentsfood3.jpg"}
              alt="Rodents Food 3"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img
              src={"/Images/discountimages/rodentsfood4.jpg"}
              alt="Rodents Food 4"
            />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>

      <FooterPage />
    </div>
  );
};

export default Discount;
