import styled from "styled-components";
import { point } from "../../GlobalStyled";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useState } from "react";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 190px;
`;

const Title = styled.div`
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
  font-size: 20px;
  font-weight: 600;
  background-color: ${point.color2};
  text-align: center;
  padding: 19px;
  border-radius: 30px;
  color: white;
  margin: 55px auto;
`;

export const Home = () => {
  return (
    <Container>
      <Title>
        <h2>스트레스 지수 테스트</h2>
        <p>13개의 질문으로 알아보는</p>
        <p>지금 내 스트레스 레벨</p>
      </Title>

      <MainBanner />

      <Link to={"/qna"}>
        <StartBtn>
          <h3>테스트 시작하기!</h3>
        </StartBtn>
      </Link>
    </Container>
  );
};
