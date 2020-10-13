import React from "react";
import { FormGroup, Row, Col, Input } from "reactstrap";
import { P2, Header } from "../../Core/Text";
import color from "../../../Config/Color";

const StepOne = (props) => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6">
        <br />
        <Header> Purchase details </Header>
        <FormGroup>
          <Input placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Input placeholder="Surname" />
        </FormGroup>
        <FormGroup>
          <Input type="email" placeholder="Email" />
          <P2 color={color.description}>
            Email for sending order status information.
          </P2>
        </FormGroup>
        <FormGroup>
          <Input type="textarea" placeholder="Address" />
        </FormGroup>
        <FormGroup>
          <Row form>
            <Col md={6}>
              <Input type="select">
                <option>Bangkok</option>
              </Input>
            </Col>
            <Col md={6}>
              <Input placeholder="Postal code" />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Input placeholder="Phone number" />
          <P2 color={color.description}>Example: 0923334444</P2>
        </FormGroup>
        <br />
      </div>
    </div>
  );
};

export default StepOne;
