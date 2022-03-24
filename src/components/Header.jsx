import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectCars } from "../Features/Car/carSlice";
const Header = () => {
  const [open, setOpen] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <div>
      <Container>
        <a>
          <img src="/images/logo.svg"></img>
        </a>
        <Menu>
          {cars && cars.map((car) => <a href="#"> {car} </a>)}

          <a href="#">Solar Roof</a>
          <a href="#">Solar Panels</a>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <a href="#" open={open} onClick={() => setOpen(!open)}>
            Menu
          </a>
        </RightMenu>
        {open && (
          <BurgerNav>
            <CloseWrapper>
              <Close open={open} onClick={() => setOpen(!open)} />
            </CloseWrapper>
            <li>
              {" "}
              <a href="#">Existing Inventory</a>
            </li>
            <li>
              {" "}
              <a href="#">Used Inventory</a>
            </li>
            <li>
              {" "}
              <a href="#">Trade-In</a>
            </li>
            <li>
              {" "}
              <a href="#">Test Drive</a>
            </li>
            <li>
              {" "}
              <a href="#">Cybertruck</a>
            </li>
            <li>
              {" "}
              <a href="#">Roadster</a>
            </li>
            <li>
              {" "}
              <a href="#">Semi</a>
            </li>
            <li>
              {" "}
              <a href="#">Charging</a>
            </li>
            <li>
              {" "}
              <a href="#">Powerwall</a>
            </li>
            <li>
              {" "}
              <a href="#">Commercial Energy</a>
            </li>
            <li>
              {" "}
              <a href="#">Utilities</a>
            </li>
            <li>
              {" "}
              <a href="#">Find us</a>
            </li>
            <li>
              {" "}
              <a href="#">Support</a>
            </li>
            <li>
              {" "}
              <a href="#">Investor Relations</a>
            </li>
          </BurgerNav>
        )}
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  img {
    height: 20px;
    width: 100px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    padding: 0 10px;
    font-weight: 600;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    padding: 0 10px;
    font-weight: 600;
  }

  a:nth-child(1) {
    @media (max-width: 1200px) {
      display: none;
    }
  }

  a:nth-child(2) {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  padding: 8px 32px 48px;
  display: flex;
  flex-direction: column;
  text-align: start;
  z-index: 100;

  li {
    padding: 15px 0;
    border-bottom: 1px solid #e6e6e6;
    overflow-y: hidden;
  }

  li:first-child {
  }
  a {
    font-weight: 600;
  }
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
  overflow: hidden;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  padding: 20px;
`;
