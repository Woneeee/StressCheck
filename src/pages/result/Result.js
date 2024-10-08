import { useEffect, useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { Title } from "../../components/Title";
import { Link, useLocation } from "react-router-dom";
import { stressResult } from "../../components/stressResults";
import styled from "styled-components";
import { point } from "../../GlobalStyled";
import { VscDebugRestart, VscDebugRestartFrame } from "react-icons/vsc";
import { routes } from "../../routes";
import { Loading } from "../../components/Loading";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  animation: showResult 1s;

  @keyframes showResult {
    0% {
      transform: translateY(700px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 510px) {
    max-width: 350px;
    width: 100%;
  }
`;

const Bg = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(168, 193, 255, 1) 0%,
    rgba(168, 193, 255, 1) 79%,
    rgba(255, 255, 255, 1) 100%
  );
  h2 {
    color: white;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0;
  }

  @media screen and (max-width: 510px) {
    height: 300px;
  }
`;

const StressLevel = styled.div`
  width: 90%;
  height: 400px;
  background-color: white;
  box-shadow: ${point.color} 0px 5px 20px;
  border-radius: 20px;
  padding: 20px 30px;
  margin: 0 auto;
  transform: translateY(-50px);

  h4 {
    font-size: 19px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0;
  }
  h2 {
    font-size: 25px;
    font-weight: 700;
    color: ${point.color2};
    text-align: center;
    margin-top: 25px;
  }
  p {
    margin-top: 45px;
    line-height: 25px;
    font-size: 17px;
    word-break: keep-all;
  }

  @media screen and (max-width: 510px) {
    height: 350px;
    h4 {
      font-size: 17px;
    }
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const ReStart = styled.div`
  width: 70%;
  height: 55px;
  background-color: ${point.color2};
  border-radius: 30px;
  font-size: 18px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }

  @media screen and (max-width: 510px) {
    margin: 0 auto;
  }
`;

export const Result = () => {
  useScrollTop();
  const [isLoading, setIsLoading] = useState(true);
  const [resultIndex, setResultIndex] = useState(0);
  const { state } = useLocation();
  const { scores } = state;

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  const totalScore = scores.reduce((acc, curr) => acc + curr);

  useEffect(() => {
    if (totalScore <= 4) {
      setResultIndex(0);
    } else if (totalScore > 4 && totalScore <= 9) {
      setResultIndex(1);
    } else if (totalScore > 9 && totalScore <= 13) {
      setResultIndex(2);
    }
  }, []);

  return (
    <>
      <Title titleName={"Result"} />

      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Bg>
            <h2>{stressResult[resultIndex].level}</h2>
          </Bg>

          <StressLevel>
            <h4>지금 당신의 스트레스 레벨은</h4>
            <h2>{stressResult[resultIndex].title}</h2>
            <p>{stressResult[resultIndex].desc}</p>
          </StressLevel>

          <Link to={routes.home}>
            <ReStart>
              <VscDebugRestart />
              &nbsp;&nbsp;&nbsp;&nbsp; 테스트 다시하기
            </ReStart>
          </Link>
        </Container>
      )}
    </>
  );
};
