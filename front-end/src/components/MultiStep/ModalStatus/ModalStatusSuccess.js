import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { P2, Header } from '../../Core/Text'
import { PrimaryButton } from '../../Core/Button'
import color from '../../../Config/Color'

const ModalStatusSuccess = (props) => {
  const {
    buttonLabel,
    className,
    icon
  } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <PrimaryButton onClick={toggle}>
        <P2 className='m-1'>{buttonLabel}</P2>
      </PrimaryButton>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>สถานะการตรวจสอบ</ModalHeader>
        <ModalBody>
          <Header color={color.primary} className='text-center'>ยืนยันการตรวจสอบเรียบร้อย</Header>
          <div className='text-center'>
            <Header className={icon} color={color.primary}></Header>
          </div>
          <P2 color={color.primary} className='text-center'>คุณสามารถเข้าเรียนได้ทันที</P2>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>ยกเลิก</Button>{' '}
          <PrimaryButton onClick={toggle}>ยืนยัน</PrimaryButton>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalStatusSuccess