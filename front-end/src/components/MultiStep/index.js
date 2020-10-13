import React from 'react'
import ModalMultiStep from './ModalMultiStep'
import { CustomContainer } from '../Core/Background'

function MultiStep (props) {
    
  return(
    <CustomContainer fluid={true}>
      <ModalMultiStep
      buttonLabel='Demo Athena'
      />
    </CustomContainer>
  )
}

export default (MultiStep)