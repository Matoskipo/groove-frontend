import styled from "styled-components";

export const RightSideStyle = styled.div`
width:100%;
background-color:#000000;
padding-top:15px;
overflow-x:hidden;
#proileTop{
    display:none;
}

& .rightside-top{
    display:flex;
    align-items:center; 
margin-bottom:1.5%;

}
& .search{
    width:471px;
    height:56px;
    border:1px solid #0F0F0F;
    display:flex;
    padding-left:10px;
    align-items:center;
}
& .arrow{
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 48px;
    height:41px;
    background:#0F0F0F;
}
& .container{
    display:flex;
    margin-right:50px;
    margin-left:30px;
    
}
.footer-disp{
    display:none;
}
.arrow.right{
    margin-left:10px;
}
.title,h2 {
    color:white;
}

.hero{
    position:relative;
    display:flex;
    flex-wrap: wrap;
}
.rightside-bottom{
     /* margin-top:97px; */

}
.col-9{
    width:100%;
    display:flex;
    flex-direction:column;
}
.title{
    position:absolute;
    top:30px;
    left:30px;
}
.artist{
    position:absolute;
    right:30px;
    top:130px;    
}


.songs-container{
    padding-left:30px;
    padding-top:30px;
}
.cheers{
    margin:25px 0;
}
.song-list1,.song-list2{
    overflow-x: scroll;
    display: flex;
     &::-webkit-scrollbar{
                 overflow: hidden;
             }
}
@media only screen and (max-width: 450px) {
padding-top:0;

    #proileTop{
    display:block;
    height:45px;
}

& .title{
    display:none;
}
.see-more{
    display:block;
    color:white;
}
.see-more:hover{
    cursor:pointer;
}
& .welcom-wrapper{
    display:flex;
    justify-content:space-between;
    align-items:center;
}


& .container-arrow{
    display:none;
}
& .search{
    display:none;
}
& .rightside-top{ 
margin-bottom:5%;

}
    .title,.artist{
        display:none;
    }
    
    .hero img{ 
       height:159px;
       width:100vw;
          
    } 
    .footer-disp{
    display:block;
    
}
      
}

`