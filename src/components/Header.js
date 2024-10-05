import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 25px;
    font-weight: 500;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Link to={routes.home}>
        <h2>Stress Check</h2>
      </Link>
    </Container>
  );
};
