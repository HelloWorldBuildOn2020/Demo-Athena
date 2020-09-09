import styled from 'styled-components'
import size from '../../Config/FontSize'
import color from '../../Config/Color'

export const Title = styled.h3`
  font-family: 'Sarabun';
  font-size: ${size.title};
  color: ${props => props.color};
  font-weight: ${props => props.weight || 'bold'};
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: ${size.header};
  }
`

export const SubTitle = styled.p`
  font-family: 'Sarabun';
  color: ${props => props.color || color.headTitle};
  font-size: ${size.subtitle};
  font-weight: ${props => props.weight || 'bold'};
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: ${size.header};
  }
`

export const Header = styled.p`
  font-family: 'Sarabun';
  color: ${props => props.color};
  font-size: ${size.header};
  font-weight: ${props => props.weight || 'bold'};
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: ${size.p1};
  }
`

export const P = styled.p`
  font-family: 'Sarabun';
  font-size: ${size.p1};
  color: ${props => props.color};
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: ${size.p2};
  }
`

export const P2 = styled.p`
  font-size: ${size.description};
  color: ${props => props.color};
  font-family: 'Sarabun';
`

