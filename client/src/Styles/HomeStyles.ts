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
  justify-content: center;
`
export const MainContentContainer = styled.div`
  width: 75%;
  margin-top: 10rem;
  @media (max-width: 950px) {
    width: 95%;
  }
`
export const SmallItem = styled.div`
  width: 6rem;
  height: 6rem;
  border: 1px solid #f7c59f;
  border-radius: 5px;
  padding: 5px;
  /* margin-right: 2rem;
  margin-bottom: 2rem; */
  background: #0d0e11;
  box-shadow: 0px 5px 12px 1px rgba(0, 0, 0, 0.59);
  /* @media (max-width: 950px) {
    width: 95%;
  } */
`
export const LargeItem = styled.div`
  width: 13rem;
  height: 14rem;
  border: 1px solid #f7c59f;
  border-radius: 5px;
  padding: 10px;
  /* margin-right: 1rem;
  margin-left: 1rem; */
  /* margin-bottom: 1rem; */
  background: #0d0e11;
  box-shadow: 0px 5px 12px 1px rgba(0, 0, 0, 0.59);
  @media (max-width: 950px) {
    width: 95%;
  }
`
export const SchoolItem = styled.div`
  width: 40%;
  border: 1px solid #f7c59f;
  border-radius: 5px;
  padding: 10px;
  /* margin-right: 2rem;
  margin-bottom: 2rem; */
  background: #0d0e11;
  box-shadow: 0px 5px 12px 1px rgba(0, 0, 0, 0.59);
  @media (max-width: 950px) {
    width: 95%;
    /* margin-right: 0; */
  }
`
export const Details = styled.details`
  margin-bottom: 0.25rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.11);
  padding: 10px;
`
export const Description = styled.h6`
  margin-top: -1em;
`
export const IconContainer = styled.div`
  width: 100%;
  text-align: center;
`
export const TechIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 1rem 0;
  display: inline;
  vertical-align: center;
`
export const SchoolIcon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 1rem 0;
  display: inline;
  vertical-align: center;
`
