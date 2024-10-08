import { useEffect, useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { questions } from "../../components/questions";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { Title } from "../../components/Title";
import styled from "styled-components";
import { point } from "../../GlobalStyled";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 120px;
  animation: ani 1s;

  @keyframes ani {
    0% {
      opacity: 0;
      transform: translateX(500px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 510px) {
    max-width: 350px;
    width: 100%;
    padding-top: 70px;
  }
`;

const Progress = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Page = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: lightgray;
  display: flex;
  flex-direction: row-reverse;
`;

const Bar = styled.div`
  width: 100%;
  height: 18px;
  background-color: lightgray;
  opacity: 0.4;
  border-radius: 20px;
  margin-top: 8px;
  @media screen and (max-width: 510px) {
    height: 16px;
  }
`;

const Current = styled.div`
  height: 100%;
  background-color: ${point.color2};
  border-radius: 20px;
  transition-duration: 0.4s;
`;

const Question = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 500;
    color: ${point.color2};
    margin-top: 80px;
    text-align: center;
  }
  h4 {
    margin-top: 70px;
    text-align: center;
    font-size: 18px;
  }

  @media screen and (max-width: 510px) {
    h2 {
      margin-top: 60px;
      font-size: 30px;
    }
    h4 {
      margin-top: 50px;
      font-size: 17px;
    }
  }
`;

const Answer = styled.div`
  margin-top: 120px;
  width: 100%;

  @media screen and (max-width: 510px) {
    margin-top: 90px;
  }
`;

const Button = styled.div`
  width: 100%;
  height: 55px;
  background-color: ${point.color2};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: ${point.color} 0px 5px 20px;
  cursor: pointer;
  margin-top: 80px;
  transition-duration: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }

  @media screen and (max-width: 510px) {
    margin-top: 60px;
  }
`;

export const QnA = () => {
  useScrollTop();
  const [page, setPage] = useState(1);
  const [gauge, setGauge] = useState();
  const [qIndex, setQIndex] = useState(0);
  const [scores, setScores] = useState([]);
  const navi = useNavigate();

  const handleAnswer = (score) => {
    setScores([...scores, score]);
    if (qIndex < questions.length - 1) {
      setQIndex(qIndex + 1);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const progress = (page / questions.length) * 100;
    setGauge(progress);

    if (qIndex === questions.length - 1 && scores.length === questions.length) {
      navi(routes.result, { state: { scores } });
    }
  }, [page, navi, qIndex, scores]);

  return (
    <>
      <Title titleName="QnA" />
      <Container>
        <Progress>
          <Page>
            {page} / {questions.length}
          </Page>
          <Bar>
            <Current style={{ width: `${gauge}%` }} />
          </Bar>
        </Progress>

        <Question>
          <h2>Q{page}.</h2>
          <h4>{questions[qIndex].q}</h4>
        </Question>

        <Answer>
          {questions[qIndex].a.map((ans, index) => (
            <Button key={index} onClick={() => handleAnswer(ans.score)}>
              {ans.text}
            </Button>
          ))}
        </Answer>
      </Container>
    </>
  );
};
