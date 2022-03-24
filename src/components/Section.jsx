import React from "react";
import styled from "styled-components";
const Section = ({
  carName,
  carImg,
  description,
  delivery,
  leftButton,
  rightButton,
  responsiveImg,
}) => {
  return (
    <Wrap bgImage={carImg} responsiveBgImage={responsiveImg}>
      <ItemText>
        <h1> {carName} </h1>
        <p>
          {description} <span>{delivery}</span>
        </p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftButton}</LeftButton>
          {rightButton && <RightButton>{rightButton}</RightButton>}
        </ButtonGroup>
        {rightButton && <DownArrow src="/images/down-arrow.svg" />}
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/tesla/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    background-image: ${(props) =>
      `url("/images/tesla/${props.responsiveBgImage}")`};
  }
`;
const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: black;
    letter-spacing: 1.5px;
  }

  p {
    margin-top: 5px;
  }
  span {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  align-items: center;
  opacity: 0.8;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: rgba(244, 244, 244, 1);
  color: black;
  opacity: 1;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
`;
