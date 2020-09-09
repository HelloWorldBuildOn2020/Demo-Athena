import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { P2, Header } from '../../Core/Text'
import { SecondaryButton, PrimaryButton } from '../../Core/Button'
import color from '../../../Config/Color'

const ModalStatusFail = (props) => {
  const {
    buttonLabel,
    className,
    icon
  } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <SecondaryButton onClick={toggle}>
        <P2 className='m-1'> {buttonLabel}</P2>
      </SecondaryButton>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>สถานะการตรวจสอบ</ModalHeader>
        <ModalBody>
          <Header color={color.red} className='text-center'>ไม่สามารถตรวจสอบข้อมูลการโอนได้</Header>
          <div className='text-center'>
            <Header className={icon} color={color.red}></Header>
          </div>
          <P2 color={color.red} className='text-center'>กรุณาตรวจสอบข้อมูลการโอนเงินในแบบฟอร์มการชำระเงิน</P2>
          <div className='text-center'>
				    <Button color='primary'>แก้ไขข้อมูลการโอนเงิน</Button>
			    </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>ยกเลิก</Button>{' '}
          <PrimaryButton onClick={toggle}>ยืนยัน</PrimaryButton>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalStatusFail