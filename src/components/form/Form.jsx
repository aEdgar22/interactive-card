import React from "react";
import { FormContainer } from "./styled-components/FormContainer";
import { useForm } from "../hooks/useForm";
import { Cards } from "../cards/Cards";

export const Form = () => {
  const [formValues, handleInputChange] = useForm({
    ownerName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const { ownerName, cardNumber, month, year, cvc } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <form className="app__form " onSubmit={handleSubmit}>
        <div className="app__form-details1">
          <label> Cardholder Names</label>
          <input
            type="text"
            name="ownerName"
            placeholder="e.g. Jane Appleseed"
            value={ownerName}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            placeholder=" e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>

        <div className="app__form-details2">
          <div className="app__form-date">
            <label> Exp. Date (MM/YY)</label>
            <input
              type="text"
              name="month"
              placeholder="MM"
              value={month}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <input
              type="text"
              name="year"
              placeholder="YY"
              value={year}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>

          <div className="app__form-cvc">
            <label>CVC</label>
            <input
              type="text"
              name="cvc"
              placeholder="e.g. 123"
              value={cvc}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
        </div>

        <button type="submit">Confirm</button>
      </form>

      <Cards
        ownerName={ownerName}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvc={cvc}
      />
    </FormContainer>
  );
};
