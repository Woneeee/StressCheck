import styled from "styled-components";

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
      <h2>Stress Check</h2>
    </Container>
  );
};
