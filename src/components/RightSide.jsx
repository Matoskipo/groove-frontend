import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import searchIcon from "../assets/icons/search.svg";
import { RightSideStyle } from "../styles/RightSide.style";
import hero from "../assets/images/hero.jpg";

import Footer from '../components/Footer'

import  profileImage from '../assets/images/matt.jpg'

import omahlay from "../assets/icons/omahlay.svg";
// import Cards from "../components/common/Cards";

import Singles from "../components/common/Singles";
import TestCards from "./common/Cards";

{/* <div className='image-top'>
                            <img  src={profileImage} className="image"  alt="image" />
                        </div> */}


const RightSide = () => {
  return (
    <RightSideStyle>
      <div className="col-9">
        <div className="rightside-top">
              <div className='top' id="proileTop" >
                        <div className='image-top'>
                            <img  src={profileImage} className="image"  alt="image" />
                        </div>
                        <div className='name'>
                            <h3>Hey! Matthew</h3>
                        </div>
                    </div>

          <div className="container container-arrow">
            <div className="arrow">
              <AiOutlineLeft />
            </div>
            <div className="arrow right">
              <AiOutlineRight />
            </div>
          </div>
          <div className="search">
            <img src={searchIcon} alt="" />
          </div>
        </div>
        <div className="rightside-bottom">
          <div className="hero">
            <img src={hero} alt="" />
            <h1 className="title">uduX</h1>
            <img className="artist" src={omahlay} alt="" />
          </div>
          <div className="songs-container">
            <div className="welcom-wrapper">
              <div className="welcome">
              <h2>Welcome Back!</h2>
            </div>
            <div className="see-more">
                <p>See more</p>
            </div>
            </div>
            
            <div className="song-list1">
              <TestCards />
            </div>
            <div className="cheers">
                <h2>Cheers to the Weekend</h2>
            </div>
            

            <div className="song-list2">
              <Singles />
            </div>
          </div>
        </div>
        <div className="footer-disp">
      <Footer/>
      </div>
      </div>
    </RightSideStyle>
    
  );
};

export default RightSide;
