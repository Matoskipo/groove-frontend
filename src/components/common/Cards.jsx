import { cardLinks } from "../../assets/links/Links";
import Card from "./Card";
import styled from "styled-components";
import {imagesArray} from '../../assets/links/Links'



const Cards = () => {
  return (
    <CardsStyle>
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
            title={title}
            body={body}
            width={width}
            height={height}
            innerbackground={innerbackground}
            className={className}
            imageUrl={imagesArray[c.id]}
            background={background}
          >
          </Card>
        );
      })}
    </CardsStyle>
  );
};

export default Cards;

const CardsStyle = styled.div`
  display: flex;
  .card {
    margin-left: 15px;
  }
`;
