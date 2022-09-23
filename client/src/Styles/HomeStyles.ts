import styled, { keyframes } from "styled-components"

//Animations
const shakeAnimation = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`

export const WebsiteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: red;
  justify-content: center;
`
export const MainContentContainer = styled.div`
  width: 75%;
  @media (max-width: 950px) {
    width: 95%;
  }
`
export const SmallItem = styled.div`
  width: 6rem;
  height: 6rem;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  margin-right: 2rem;
  margin-bottom: 2rem;
  /* @media (max-width: 950px) {
    width: 95%;
  } */
`
export const LargeItem = styled.div`
  width: 14rem;
  height: 6rem;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  margin-right: 2rem;
  margin-bottom: 2rem;
  /* @media (max-width: 950px) {
    width: 95%;
  } */
`
export const Details = styled.details`
  margin-bottom: 0.25rem;
`
export const Description = styled.h6`
  margin-top: -1em;
`
