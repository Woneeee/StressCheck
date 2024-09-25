import { HashLoader } from "react-spinners";
import styled from "styled-components";
import { point } from "../GlobalStyled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <HashLoader size={60} color={point.color} />
    </Container>
  );
};
