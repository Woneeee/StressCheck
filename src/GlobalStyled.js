import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const point = {
  color: "#A8C1FF", // 연한것
  color2: "#7595FF", // 진한것
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        letter-spacing: -1px;
        color: #242424;
    }

    a{
        text-decoration: none;
    }

`;
