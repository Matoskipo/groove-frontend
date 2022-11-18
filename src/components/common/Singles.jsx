import { cardLinks } from "../../assets/links/Links";
import Card from "./Single";
import styled from "styled-components";
import {imagesArray} from '../../assets/links/Links'



const Singles = () => {
  return (
    <SingleStyle>
      {cardLinks.map((c) => {
        const {
          id,
          title,
          body,
          width,
          height,
          innerbackground,
          className,
          background,
        } = c;
        return (
          <Card
            key={id}
            width={width}
            height="220px"
            innerbackground={innerbackground}
            className={className}
            imageUrl={imagesArray[c.id]}
            background={background}
          >
          </Card>
        );
      })}
    </SingleStyle>
  );
};

export default Singles;

const SingleStyle = styled.div`
  display: flex;
  margin-bottom:15px;
  
  .card {
   
    margin-left: 15px;
  }
`;
