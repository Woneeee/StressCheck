import { useEffect, useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { questions } from "../../components/questions";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";

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

  return <div>QnA</div>;
};
