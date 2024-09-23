import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { QnA } from "./pages/qna/QnA";
import { Result } from "./pages/result/Result";
import { PageNotFound } from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.qna} element={<QnA />} />
        <Route path={routes.result} element={<Result />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
