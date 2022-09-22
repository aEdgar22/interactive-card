import styled from "styled-components";

export const CardContainerStyled = styled.section`
  position: absolute;
  width: 91%;
  height: auto;
  top: 3.375rem;
  left: 4%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 700px) {
    width: calc((100% - 32%) / 2);
    max-width: 30rem;
    height: auto;
    top: calc((60% - 186px) / 2);
    left: calc((65% - 542px) / 2);
  }
`;
