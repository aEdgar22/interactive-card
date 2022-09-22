import styled from "styled-components";

import bgCardBack from "../../../assets/bg-card-back.png";

export const Card1 = styled.div`
  width: 285px;
  height: 157px;
  border-radius: 10px;
  align-self: flex-end;
  background-image: url(${bgCardBack});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  div{
    width: 30%;
    margin: 23% auto;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 1px;
    text-align: center;
  }

  @media only screen and (min-width: 700px) {
    width: 80%;
    max-width: 20rem;
    height: 10.469rem;
    margin-top: 12rem;
    box-shadow: 0px 5px 15px 9px rgba(0, 0, 0, 0.25);
  }
`;
