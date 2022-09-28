import { FC } from "react"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai"
import {
  SMButton,
  SMContainer,
  SMListItem,
  SMListSection,
} from "../Styles/SocialMediaStyles"

const SocialMedia: FC = (): JSX.Element => {
  //inline styles
  const btnStyle = {
    background: "white",
    borderRadius: "50%",
    border: "none",
    width: "25px",
    height: "25px",
  }
  const btnStyleBox = {
    background: "white",
    borderRadius: "10%",
    border: "none",
    width: "25px",
    height: "25px",
  }

  const siteColor = "#b46d37"

  return (
    <SMContainer>
      <SMListSection>
        <SMListItem>
          <SMButton
            onClick={() => {
              window.location.href = "https://twitter.com/TimDrevitchDev"
            }}
          >
            <AiFillTwitterCircle color={siteColor} style={btnStyle} />
          </SMButton>
        </SMListItem>
        <SMListItem>
          <SMButton
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/tim-drevitch-43016719b"
            }}
          >
            <AiFillLinkedin color={siteColor} style={btnStyleBox} />
          </SMButton>
        </SMListItem>
        <SMListItem>
          <SMButton
            onClick={() => {
              window.location.href = "https://github.com/timdrevitch"
            }}
          >
            <AiFillGithub color={siteColor} style={btnStyle} />
          </SMButton>
        </SMListItem>
      </SMListSection>
    </SMContainer>
  )
}

export default SocialMedia
