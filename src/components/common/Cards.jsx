import { cardLinks } from "../../assets/links/Links";
import TestCard from "./Card";
import styled from "styled-components";
import {imagesArray} from '../../assets/links/Links'



const TestCards = () => {
  return (
    <TestCardsStyle>
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
          <TestCard
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
          </TestCard>
        );
      })}
    </TestCardsStyle>
  );
};

export default TestCards;

const TestCardsStyle = styled.div`
  display: flex;
 
  .card {
    margin-left: 15px;
  }
`;
