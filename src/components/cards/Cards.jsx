import React from "react";
import { Card1 } from "./styled-components/Card1Styled";
import { Card2 } from "./styled-components/Card2Styled";
import { CardContainerStyled } from "./styled-components/CardContainerStyled";
import cardLogo from "../../assets/card-logo.svg";

export const Cards = ({ ownerName, cardNumber, month, year, cvc }) => {
  return (
    <CardContainerStyled>
      <Card1>
        <div>
        {cvc.length === 0 ? "123" : cvc}

        </div>
      </Card1>
      <Card2>
        <img className="logo" src={cardLogo} alt="logo" />

        <p className="app__card2-number">
          {cardNumber.length === 0 ? "0000 0000 0000 0000" : cardNumber}
        </p>

        <div className="app__card2-name-date-container">
          <span className="app__card2-username">
            {ownerName.length === 0 ? "Owner Name" : ownerName}
          </span>

          <span className="app__card2-date">
            {month.length === 0 && year.length === 0 ? "00/00" : month+'/'+year}
          </span>
        </div>
      </Card2>
    </CardContainerStyled>
  );
};

Cards.defaultProps = {
  ownerName: "0000",
};
