import { HashLoader } from "react-spinners";
import styled from "styled-components";
import { point } from "../GlobalStyled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 15px;
  }
`;

export const Loading = () => {
  return (
    <Container>
      <HashLoader size={50} color={point.color} />
      <p>결과분석중</p>
    </Container>
  );
};
