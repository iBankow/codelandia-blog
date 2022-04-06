import styled from "styled-components";

import responsive from "../../utils/responsive";

const Main = styled.section`
  max-width: 900px;
  margin: 100px 0 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    max-width: 360px;
  }
`;

const Card = styled.div`
  min-width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;
  padding: 25px;
  & + & {
    margin-top: 50px;
  }

  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  :hover {
    box-shadow: 0px 20px 20px rgba(19, 19, 31, 0.3);
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 8px;

  color: #1a202c;
`;

const CardText = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  color: #717171;
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 22px;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    color: #717171;
  }
`;

const CardIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: transparent;
`;
export { Main, Card, CardTitle, CardText, CardHeader, CardIcon, CardContent };
