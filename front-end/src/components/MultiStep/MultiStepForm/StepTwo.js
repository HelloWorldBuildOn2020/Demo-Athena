import React, { useState } from "react";
import { FormGroup, Input, FormFeedback, Button } from "reactstrap";
import { P2, Header } from "../../Core/Text";
import color from "../../../Config/Color";
import KBank from "../../../KBank.png";
import styled from "styled-components";

const ButtonStyle = styled(Button)`
  background-color: ${color.blue};
  width: 100%;
  border: 0px;
`;

const messageEmptyMoney = "Enter the amount of money";
const messageEmptyDate = "Enter date";
const messageEmptyTime = "Enter the transfer time";

const StepTwo = (props) => {
  const { handleSubmit } = props;
  const [invalidMoney, setInvalidMoney] = useState(false);
  const [invalidDate, setInvalidDate] = useState(false);
  const [invalidTime, setInvalidTime] = useState(false);
  const [messageErrorMoney, setMessageErrorMoney] = useState(false);
  const [messageErrorDate, setMessageErrorDate] = useState(false);
  const [messageErrorTime, setMessageErrorTime] = useState(false);
  const [slip, setSlip] = useState("");
  const [money, setMoney] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleValidationMoney = (value) => {
    if (value === "") {
      setInvalidMoney(true);
      setMessageErrorMoney(messageEmptyMoney);
    } else {
      setInvalidMoney(false);
      setMoney(value);
    }
  };

  const handleValidationDate = (value) => {
    if (value === "") {
      setInvalidDate(true);
      setMessageErrorDate(messageEmptyDate);
    } else {
      setInvalidDate(false);
      setDate(value.replace(/-/g, ""));
    }
  };

  const handleValidationTime = (value) => {
    if (value === "") {
      setInvalidTime(true);
      setMessageErrorTime(messageEmptyTime);
    } else {
      setInvalidTime(false);
      setTime(value);
    }
  };

  const onSubmit = async () => {
    let data = {
      money: money,
      date: date,
      time: time,
    };
    handleSubmit(slip, data);
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6">
        <br />
        <Header className="text-center">Payment via bank app or ATM</Header>
        <Header className="text-success text-center">
          Total amount: 764 baht
        </Header>
        <Header> Sent money transfer slip </Header>
        <P2 color={color.black}>
          When completed transferring money, Please enter information in form
          below.
        </P2>
        <Header> Choose bank transfer </Header>
        <img
          src={KBank}
          alt="OpenDurian Payment"
          style={{ maxWidth: "400px", width: "100%" }}
        ></img>
        <FormGroup>
          <br />
          <Header>Amount of money transfer</Header>
          <Input
            onChange={(e) => handleValidationMoney(e.target.value)}
            invalid={invalidMoney}
          />
          <FormFeedback>{messageErrorMoney}</FormFeedback>
          <P2 color={color.description}>Example: 1,000.13</P2>
        </FormGroup>
        <FormGroup>
          <Header>Date of transfer</Header>
          <Input
            type="date"
            onChange={(e) => handleValidationDate(e.target.value)}
            invalid={invalidDate}
          />
          <FormFeedback>{messageErrorDate}</FormFeedback>
          <P2 color={color.description}>Example: 19/07/2020</P2>
        </FormGroup>
        <FormGroup>
          <Header>Time of transfer</Header>
          <Input
            placeholder="Example 22:58"
            onChange={(e) => handleValidationTime(e.target.value)}
            invalid={invalidTime}
          />
          <FormFeedback>{messageErrorTime}</FormFeedback>
          <P2 color={color.description}>Example: 15:45</P2>
        </FormGroup>
        <FormGroup>
          <Header>Upload Slip</Header>
          <Input type="file" onChange={(e) => setSlip(e.target.files[0])} />
          <P2 color={color.description}>
            File size not more than 2MB. File type contain .jpg or .png or .gif
          </P2>
        </FormGroup>
        <ButtonStyle onClick={onSubmit}>Submit</ButtonStyle>
        <br />
      </div>
    </div>
  );
};

export default StepTwo;
