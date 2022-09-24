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

export const WebsiteNavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`
export const MainNavContentContainer = styled.div`
  width: 75%;
  @media (max-width: 950px) {
    width: 95%;
  }
`
export const NavigationImg = styled.img`
  width: 6rem;
  height: 4rem;
  margin: 1rem 0;
  display: inline;
  vertical-align: center;
`
export const NavigationLink = styled.button`
  background: none;
  border: none;
  margin-left: 2rem;
  color: white;
  padding: 2rem 0;
  font-family: Trebuchet MS, sans-serif;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
