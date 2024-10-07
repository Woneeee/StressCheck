import styled from "styled-components";
import { point } from "../GlobalStyled";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  background-color: ${point.color};
  margin-top: 50px;
`;

export const Footer = () => {
  return <Container>Made By Won</Container>;
};
