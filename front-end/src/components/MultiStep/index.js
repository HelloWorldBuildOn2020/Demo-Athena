import React from 'react'
import ModalMultiStep from './ModalMultiStep'
import { CustomContainer } from '../Core/Background'

function MultiStep (props) {
    
  return(
    <CustomContainer fluid={true}>
      <ModalMultiStep
      buttonLabel='ทดสอบการโอนเงิน'
      />
    </CustomContainer>
  )
}

export default (MultiStep)