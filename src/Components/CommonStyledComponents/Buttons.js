import styled from 'styled-components'
import { FlexCenter } from './GlobalStyle'

export const LineButton = styled.button`
  background: transparent;
  border: 2px solid #fff5;
  border-radius: 2rem;
  color: #fff;
  cursor: pointer;
  &:hover{
    color: #000;
    background: #fff;
  }
`
export const FillButton = styled.button`
  background: #a9e94a;
  border-radius: 2rem;
  color: #000;
  border: none;
  cursor: pointer;
  ${FlexCenter}
`
export const GreenLineButton = styled.button`
  background: transparent;
  border: 2px solid #a9e94a;
  border-radius: 2rem;
  color: #000;
  cursor: pointer;
  &:hover{
    color: #000;
    background: #a9e94a;
  }
`
export const GreyLineButton = styled.button`
  background: transparent;
  border: 2px solid #0005;
  border-radius: 2rem;
  color: #000;
  cursor: pointer;
  &:hover{
    color: #000;
    border: 2px solid #a9e94a;
  }
`
export const GreenWhiteLineButton = styled.button`
  background: transparent;
  border: 2px solid #a9e94a;
  border-radius: 2rem;
  color: #fff;
  cursor: pointer;
  &:hover{
    color: #000;
    background: #a9e94a;
  }
`