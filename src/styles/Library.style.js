import styled from "styled-components";

export const DashboardStyle = styled.div`
color:white;
padding-top:20px;
border-bottom: 1px solid #282828;
padding-bottom:25px;

.side{
    padding-left:10px;
}
.last{
    padding-top:15px;
}
.new{
    display:flex;
    justify-content:space-between;
}
.inner{
    display:flex;
}
.songs{
    display:flex;
    flex-direction:column;
    
}
.song{
    color:white;
    text-decoration:none;
}
.song:hover{
    color:#FBBA12;
}


`