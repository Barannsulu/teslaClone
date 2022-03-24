import React from "react";
import styled from "styled-components";
import Section from "./Section";
const Home = () => {
  return (
    <Container>
      <Section
        carName="Model 3"
        carImg="M3D.jpg"
        description="Order Online for "
        delivery="Touchless delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        responsiveImg="M3M.jpg"
      />
      <Section
        carName="Model Y"
        carImg="modelyD.jpg"
        description="Order Online for "
        delivery="Touchless delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        responsiveImg="modelyM.jpg"
      />
      <Section
        carName="Model S"
        carImg="modelsD.jpg"
        description="Order Online for "
        delivery="Touchless delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        responsiveImg="modelsM.jpg"
      />
      <Section
        carName="Model X"
        carImg="modelxD.jpg"
        description="Order Online for "
        delivery="Touchless delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        responsiveImg="modelxM.jpg"
      />
      <Section
        carName="Solar Panels"
        carImg="solarPanelsD.jpg"
        description="Lowest Cost Solar Panels in America"
        leftButton="Order Now"
        rightButton="Learn More"
        responsiveImg="solarPanelsM.jpg"
      />
      <Section
        carName="Solar Roof"
        carImg="solarRoofD.jpg"
        description="Produce Clean Energy From Your Roof"
        leftButton="Order Now"
        rightButton="Learn More"
        responsiveImg="solarRoofM.jpg"
      />
      <Section
        carName="Accessories"
        carImg="accessoriesD.jpg"
        leftButton="Shop Now"
        responsiveImg="accessoriesM.jpg"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
