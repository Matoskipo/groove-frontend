import React from "react";
import styled from "styled-components";


const Card = ({
  title,
  imageUrl,
  body,
  width,
  background,
  innerbackground,
  height,
  className,
}) => {
  // console.log(imageUrl);
  return (
    <CardStyle
      width={width}
      background={background}
      innerbackground={innerbackground}
      height={height}
      className={className}
    >
      <div className="container">
        <div className="image-container">
          <img
            src={imageUrl}
            alt="testing"
          />
        </div>
        <div className="sub-content">
          <div className="center">
            <div className="song-title">
              <h3>{title}</h3>
            </div>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </CardStyle>
  );
};

export default Card;

const CardStyle = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border:1px solid #707070;
  position:relative;
  .container {
    position: absolute;
    margin-left:0px;
    margin-top: 40px;
    background: ${(props) => props.background};
    width: 100%;
    height: 80%;
    border:1px solid #707070;
    
  }
  .image-container {
    position: absolute;
    top: -25px;
    left: 30px;
    border:1px solid #707070;
  }
  img {
    border: 10px solid black;
  }

  .sub-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0.5px;
    /* border: 1px solid #282828; */
    background: ${(props) => props.innerbackground};
    width: 100%;
    color: white;
    height: 7rem;
    padding-bottom: 10px;
    -webkit-box-shadow: 0px 0px 9px 0px black; 
  }
  .center {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    height: 100%;
    line-height: 15px;
    
  }
`;
