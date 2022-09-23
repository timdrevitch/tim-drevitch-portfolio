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

export const MainHeaderContainer = styled.div`
  grid-column: "3/9";
  border-bottom: "1px solid white";
  @media (max-width: 950px) {
    grid-column: "2/9";
  }
`

export const MainContentContainer = styled.div`
  grid-column: "3/9";
  @media (max-width: 950px) {
    grid-column: "2/10";
  }
`
