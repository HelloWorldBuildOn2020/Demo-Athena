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

const messageEmptyMoney = "กรุณากรอกจำนวนเงิน";
const messageEmptyDate = "กรุณากรอกวันที่โอน";
const messageEmptyTime = "กรุณากรอกเวลาที่โอน";

const StepTwo = (props) => {
  const { handleSubmit } = props
  const [invalidMoney, setInvalidMoney] = useState(false);
  const [invalidDate, setInvalidDate] = useState(false);
  const [invalidTime, setInvalidTime] = useState(false);
  const [messageErrorMoney, setMessageErrorMoney] = useState(false);
  const [messageErrorDate, setMessageErrorDate] = useState(false);
  const [messageErrorTime, setMessageErrorTime] = useState(false);
  const [slip, setSlip] = useState('')
  const [money, setMoney] = useState(null)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleValidationMoney = (value) => {
    if (value === "") {
      setInvalidMoney(true);
      setMessageErrorMoney(messageEmptyMoney);
    } else {
      setInvalidMoney(false);
      setMoney(value)
    }
  };

  const handleValidationDate = (value) => {
    if (value === "") {
      setInvalidDate(true);
      setMessageErrorDate(messageEmptyDate);
    } else {
      setInvalidDate(false);
      setDate(value.replace(/-/g, ""))
    }
  };

  const handleValidationTime = (value) => {
    if (value === "") {
      setInvalidTime(true);
      setMessageErrorTime(messageEmptyTime);
    } else {
      setInvalidTime(false);
      setTime(value)
    }
  };

  const onSubmit = async () => {
    let data = {
      "money": money,
      "date": date,
      "time": time
    }
    handleSubmit(slip, data)
  }

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6">
        <br />
        <Header className="text-center">
          ชำระเงิน โอนผ่าน App ธนาคาร หรือ โอนผ่าน ATM
          <br />
          (Payment via Mobile Banking or ATM)
        </Header>
        <Header className="text-success text-center">
          ยอดที่ต้องชำระ 764 บาท
        </Header>
        <Header> แจ้งโอน </Header>
        <P2 color={color.black}>
          เมื่อโอนเงินเรียบร้อยแล้ว โปรดแจ้งการชำระเงินโดยกรอกแบบฟอร์มด้านล่าง
        </P2>
        <Header> เลือกบัญชี </Header>
        <img
          src={KBank}
          alt="OpenDurian Payment"
          style={{ maxWidth: "400px", width: "100%" }}
        ></img>
        <FormGroup>
          <br />
          <Header>จำนวนเงิน (Amount of money transfer)</Header>
          <Input
            placeholder="จำนวนเงิน"
            onChange={(e) => handleValidationMoney(e.target.value)}
            invalid={invalidMoney}
          />
          <FormFeedback>{messageErrorMoney}</FormFeedback>
          <P2 color={color.description}>ตามที่โอนจริง เช่น 1,000.13</P2>
        </FormGroup>
        <FormGroup>
          <Header>วันที่โอน (Date of transfer)</Header>
          <Input
            type="date"
            placeholder="เช่น 19/07/2020"
            onChange={(e) => handleValidationDate(e.target.value)}
            invalid={invalidDate}
          />
          <FormFeedback>{messageErrorDate}</FormFeedback>
          <P2 color={color.description}>
            เช่น 21/10/2018 (กรอกวันที่ตามสลิป ATM หรือใบฝาก ถ้ามี)
          </P2>
        </FormGroup>
        <FormGroup>
          <Header>เวลาที่โอน (Time of transfer)</Header>
          <Input
            placeholder="เช่น 22:58"
            onChange={(e) => handleValidationTime(e.target.value)}
            invalid={invalidTime}
          />
          <FormFeedback>{messageErrorTime}</FormFeedback>
          <P2 color={color.description}>
            เช่น 15:45 (กรอกเวลาตามสลิป ATM หรือใบฝาก ถ้ามี)
          </P2>
        </FormGroup>
        <FormGroup>
          <Header>สลิปหลักฐานการโอน (Upload Slip)</Header>
          <Input type="file" onChange={(e) => setSlip(e.target.files[0])} />
          <P2 color={color.description}>
            ไฟล์ขนาดไม่เกิน 2MB นามสกุล .jpg .png .gif
          </P2>
        </FormGroup>
        <ButtonStyle onClick={onSubmit}>แจ้งโอน</ButtonStyle>
        <br />
      </div>
    </div>
  );
};

export default StepTwo;
