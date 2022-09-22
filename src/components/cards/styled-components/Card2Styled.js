import styled from "styled-components";

import bgCardFront from "../../../assets/bg-card-front.png";

export const Card2 = styled.div`
  background-image: url(${bgCardFront});
  height: 157px;
  border-radius: 10px;
  background-size: cover;
  box-shadow: 0px 5px 15px 9px rgba(0, 0, 0, 0.25);
  position: absolute;
  padding: 1.375rem;
  top: 6.25rem;
  width: 285px;

  img {
    margin-bottom: 25px;
    width: 3.75rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1px;
  }

  .app__card2-name-date-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0.7rem 0;
  }

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    letter-spacing: 1px;
  }

  @media only screen and (min-width: 700px) {

    height: 10.469rem;
    left: 0;
    top: 0;
    width: 80%;
    max-width: 20rem;
  }
`;
