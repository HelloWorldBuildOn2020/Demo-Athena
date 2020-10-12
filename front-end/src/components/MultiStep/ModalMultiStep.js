import React, { useState, Fragment } from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import { HomeButton } from "../Core/Button"
import Stepper from "./MultiStepForm/Stepper"

const ModalMultiStep = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Fragment>
      <HomeButton color="danger" onClick={toggle}>
        {buttonLabel}
      </HomeButton>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>Order and payment process</ModalHeader>
        <ModalBody>
          <Stepper/>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default ModalMultiStep
