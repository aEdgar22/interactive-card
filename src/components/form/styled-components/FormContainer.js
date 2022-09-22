import styled from "styled-components";

export const FormContainer = styled.section`
  padding: 1rem 18px;
  margin-top: 20%;
  height: auto;

  label {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.veryDarkViolet};
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 1px;
    margin: 10px 0;
    display: block;
  }

  .app__form-details1 {
    display: flex;
    flex-direction: column;
    height: auto;

    input {
      border: 1px solid ${({ theme }) => theme.colors.darkGrayishViolet};
      height: 40px;
      border-radius: 5px;
      padding-left: 1rem;
      outline: none;
    }
  }
  .app__form-details2 {
    display: flex;
    margin: 10px 0 40px;

    div {
      width: 50%;
    }

    .app__form-date input {
      width: 4.375rem;
      border: 1px solid ${({ theme }) => theme.colors.darkGrayishViolet};
      height: 40px;
      border-radius: 5px;
      padding-left: 1rem;
      margin-top: 10px;
      margin-right: 0.5rem;
      outline: none;
    }

    .app__form-cvc input {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.darkGrayishViolet};
      height: 40px;
      border-radius: 5px;
      padding-left: 1rem;
      margin-top: 10px;
      outline: none;
    }
  }
  button {
    width: 100%;
    height: 3.5rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.veryDarkViolet};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 0.5px;
    cursor: pointer;
  }

  @media only screen and (min-width: 700px) {
    width: 30%;
    margin: 0 auto;
    height: auto;
  }
`;
