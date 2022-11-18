import styled from 'styled-components'


export const DashboardStyle = styled.div`
margin:0px;
padding:0px;
box-sizing:border-box;
width:100%;
height:100vh;
.row{
    height: 100%;
    display:flex;
}
/* .col-3{
    width:295px;
} */
.left-side{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: start;
    background:white;
    width:100%;
    
    border-right:1px solid black;
}

.image{
    border-radius:50%;
    width:50px;
    height:50px;
}
.top{
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:0px;
    padding:12px 0px;
    background:#0F0F0F;
    height:97px;
    
}
.name{
    padding-left:10px;
    color:#D9D9D9;
}
.content{
    display: flex;
     flex-direction: column;
     height: 100%;     
     overflow-y: auto;
     background:rgb(0,0,0);
     color:white;
     padding: 10px 15px;
   
        
}
.content::-webkit-scrollbar{
    width:10px;
    height:10px;  
}


.content::-webkit-scrollbar-thumb {
  background-color: #FBBA12;
  border-radius: 10px; 
  height:10px;      
}
.info{
    display:flex;
    align-items:center;
    padding-bottom:25px;
}
.text{
    padding-left:16px;
    cursor:pointer;
}
.text:hover{
    color:#FBBA12;
}
.first-section{
    border-bottom: 1px solid #282828;
    padding-bottom: 10px;
}
@media only screen and (max-width: 450px) {
    /* display:flex;
    flex-direction:column; */
    margin:0px;
    overflow-x:hidden;
    .content, .name{
        display:none;
       
    }
   .left-side{
    display:none;
   }
    .top{
       width:100vw;
       padding-left:20px;


    }
    .left-side{
        border:none;
    }
    .rightside-top{
        display:none;
    }
    /* .right-side1{
        margin-top:70px;
    } */
}
`