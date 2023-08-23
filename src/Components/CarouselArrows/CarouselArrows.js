import React from 'react'
import * as HiIcon from 'react-icons/hi'
import styled from 'styled-components'

const StyledDiv = styled.div`
  color: #8f97a3;
  cursor: pointer;
  padding: 1rem;
  z-index: 10; 
  background-color: #fff;
  border-radius: 50%;
  &:hover{
    color: rgb( 31, 38, 59);
  }
`
const StyledDiv1 = styled.div`
  color: #000;
  background-color: #fff9;
  border-radius: 50%;
  border: 2px solid #000;
  cursor: pointer;
  padding: .8rem;
  z-index: 10;

  @media screen and (min-width: 640px) {
    color: #fff;
    background-color: transparent;
    border: none;
  }
`

const PrevArrow = (props) => {
  const { className, style } = props;
  return (
    <StyledDiv1 className={className} style={{ ...style }} onClick={() => { props.func(props.onClick) }}>
      <HiIcon.HiArrowNarrowLeft />
    </StyledDiv1>
  )
}
const NextArrow = (props) => {
  const { className, style } = props;
  return (
    <StyledDiv1 className={className} style={{ ...style }} onClick={() => { props.func(props.onClick) }}>
      <HiIcon.HiArrowNarrowRight />
    </StyledDiv1>
  )
}
const LivePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <StyledDiv className={className} style={{ ...style }} onClick={onClick}>
      <HiIcon.HiArrowNarrowLeft />
    </StyledDiv>
  )
}
const LiveNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <StyledDiv className={className} style={{ ...style }} onClick={onClick}>
      <HiIcon.HiArrowNarrowRight />
    </StyledDiv>
  )
}

const Arrow = { PrevArrow, NextArrow, LiveNextArrow, LivePrevArrow }

export default Arrow