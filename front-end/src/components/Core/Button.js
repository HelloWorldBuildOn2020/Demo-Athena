import styled from 'styled-components'
import color from '../../Config/Color'
import font from '../../Config/FontSize'

export const PrimaryButton = styled.button`
  color: ${color.white};
  border-radius: 4px;
  padding: 5px;
  font-family: 'Sarabun';
  background-color: ${props => props.color ? props.color : color.primary};
  border: solid 1px ${props => props.color ? props.color : color.primary};
  font-size: ${font.subtitle};
  font-weight: regular;
  
  &:hover {
    cursor: pointer;
    background-color: #00A34A;
    border: solid 1px ${color.description};
    color: ${color.white};
  }
  &:disabled,
  button[disabled] {
    border: 1px solid ${color.bgPrimary};
    background-color: ${color.bgPrimary};
    color: #cccccc;
  }
`

export const SecondaryButton = styled.button`
  color: ${color.white};
  border-radius: 4px;
  font-family: 'Sarabun';
  background-color: ${props => props.color ? props.color : color.secondary};
  border: solid 1px ${props => props.color ? props.color : color.secondary};
  font-size: ${font.subtitle};
  font-weight: regular;
  &:hover {
    cursor: pointer;
    color: ${color.white};
    background-color: #40C38D;
  }
  &:disabled,
  button[disabled] {
    border: 1px solid ${color.bgPrimary};
    background-color: ${color.bgPrimary};
    color: #cccccc;
  }
`

export const HomeButton = styled.button`
  color: ${color.white};
  border-radius: 50px;
  padding: 10px;
  font-family: 'Prompt';
  background-color: ${color.primary};
  border: solid 1px ${color.primary};
  font-size: ${font.h1};
  font-weight: regular;
  height: 100px;
  width: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  &:hover {
    cursor: pointer;
    background-color: #00A34A;
    border: solid 1px ${color.description};
    color: ${color.white};
  }
`