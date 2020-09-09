import styled from 'styled-components'
import { Container } from 'reactstrap'
import color from '../../Config/Color'

export const CustomContainer = styled(Container)`
  background: ${color.bgPrimary};
  min-height: ${props => props.minHeight};
  height: 100vh;
  padding: 0px 24px;
`

export const Background = styled(Container)`
  background: ${color.bgSecondary};
  margin-bottom: 0%;
  min-height: 100vh;
`