import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

`

export const FlexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FlexSpaceAround = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FlexEven = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const FlexStart = css`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`

export const FlexEnd = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`