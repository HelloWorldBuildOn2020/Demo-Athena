import React, { useState, useEffect } from "react";
import { P2, Header } from "../../Core/Text";
import colors from "../../../Config/Color";
import { CircularProgress } from "@material-ui/core";

const StepThree = (props) => {
  const { statusCode, loading } = props;
  const [headerMessage, setHeaderMessage] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    checkStatus();
  }, [statusCode]);

  const checkStatus = () => {
    let colorText = colors.primary;
    if (statusCode == 200) {
      setIcon("fa fa-check-circle-o fa-4x");
      setHeaderMessage("Verification Successful");
      setMessage("You can join your class.");
    } else if (statusCode == 400) {
      setIcon("");
      setHeaderMessage("Verification Fail");
      setMessage("An inspection is scheduled to take place within 48 hours.");
      colorText = colors.red;
    } else {
      setIcon("");
      setHeaderMessage("Verification Fail");
      setMessage("Please enter information again.");
      colorText = colors.red;
    }
    setColor(colorText);
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6">
        <br />
        {loading ? (
          <div className="row d-flex justify-content-center">
            <Header className="text-center">
              Wait for status confirmation ...
              <br />
              <br />
              <CircularProgress />
            </Header>
          </div>
        ) : (
          <>
            <Header color={color} className="text-center">
              {headerMessage}
            </Header>
            <div className="text-center">
              <Header className={icon} color={color}></Header>
            </div>
            <P2 color={color} className="text-center">
              {message}
            </P2>
          </>
        )}
        <br />
      </div>
    </div>
  );
};

export default StepThree;
