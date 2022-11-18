import React from 'react'
import styled from "styled-components";




const Card = ({
    imageUrl,
    width,
    background,
    height,
    className
}) => {
  return (
    <CardStyle width={width}
     background={background}
    height={height}
    className={className}
    >
    <div className='container'>
       <div className='image-container'>
            <img src={imageUrl} alt="" />
        </div>
      
    </div>
    </CardStyle>
  )
}

export default Card

const CardStyle = styled.div`
background:black;
display:flex;
flex-direction:column;
justify-content:center;
width: ${(props) => props.width};
height: ${(props) => props.height};
justify-content:space-around;
border:1px solid #707070;


.container{
    position:relative;
    margin-top:40px;
    background: ${(props) => props.background};
    width:100%;
    height:100%;
    border:1px solid #707070;
    margin-left:0px;
   
    
}
.image-container{
   position:absolute;
   top:-25px;
   left:30px;
   border:1px solid #707070;
}
img{
    border:10px solid black; 
    
}



`