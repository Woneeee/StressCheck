import styled from "styled-components";
import { point } from "../../GlobalStyled";
import { Link } from "react-router-dom";
import { Title } from "../../components/Title";
import { useState } from "react";
import { HomeLoading } from "../../components/HomeLoading";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 190px;
`;

const STitle = styled.div`
  text-align: center;
  h2 {
    font-size: 28px;
    font-weight: 600;
    color: ${point.color2};
    margin-bottom: 20px;
  }
  p {
    line-height: 25px;
  }
`;

const MainBanner = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 70px;
  border-radius: 20px;
  background: url("https://doda-static.com/img/900/80/1/1/1646881105424-0658139.jpg")
    no-repeat center / cover;
`;

const StartBtn = styled.div`
  width: 80%;
  height: 55px;
  font-size: 20px;
  font-weight: 500;
  background-color: ${point.color2};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  color: white;
  margin: 40px auto;
  transition-duration: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      <Title titleName="Home" />

      {isLoading ? (
        <HomeLoading />
      ) : (
        <Container>
          <STitle>
            <h2>스트레스 지수 테스트</h2>
            <p>13개의 질문으로 알아보는</p>
            <p>지금 내 스트레스 레벨</p>
          </STitle>

          <MainBanner />

          <Link to={"/qna"}>
            <StartBtn>
              <h3>테스트 시작하기!</h3>
            </StartBtn>
          </Link>
        </Container>
      )}
    </>
  );
};
