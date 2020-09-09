import React from "react";
import { FormGroup, Row, Col, Input } from "reactstrap";
import { P2, Header } from "../../Core/Text";
import color from "../../../Config/Color";

const StepOne = (props) => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6">
        <br />
        <Header> รายละเอียดการซื้อ </Header>
        <FormGroup>
          <Input placeholder="ชื่อ" />
        </FormGroup>
        <FormGroup>
          <Input placeholder="นามสกุล" />
        </FormGroup>
        <FormGroup>
          <Input type="email" placeholder="อีเมล" />
          <P2 color={color.description}>อีเมลสำหรับส่งข้อมูลสถานะการสั่งซื้อ</P2>
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            placeholder="ที่อยู่การจัดส่งหลังสือ (กรณีมีหนังสือ)"
          />
          <P2 color={color.description}>
            กรอกที่อยู่ถูกต้อง จะช่วยให้ส่งหนังสือได้เร็วขึ้นจ้า
          </P2>
        </FormGroup>
        <FormGroup>
          <Row form>
            <Col md={6}>
              <Input type="select">
                <option>กรุงเทพมหานคร</option>
              </Input>
            </Col>
            <Col md={6}>
              <Input placeholder="รหัสไปรษณีย์" />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Input placeholder="เบอร์โทรศัพท์" />
          <P2 color={color.description}>ใส่แต่ตัวเลข เช่น 0923334444</P2>
        </FormGroup>
        <br />
      </div>
    </div>
  );
};

export default StepOne;
