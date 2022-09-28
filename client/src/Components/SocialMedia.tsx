import { FC } from "react"
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri"
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
  const btnStyleRoundedBox = {
    background: "white",
    borderRadius: "30%",
    border: "none",
    width: "25px",
    height: "25px",
  }
  const twitterColor = "#1DA1F2"
  const facebookColor = "#4267B2"
  const linkedinColor = "#0072b1"
  const instagramColor = "#C13584"

  const siteColor = "#b46d37"

  const twitterClicked = () => {
    window.location.href = "http://twitter.com"
  }
  const facebookClicked = () => {
    window.location.href = "http://facebook.com"
  }
  const instagramClicked = () => {
    window.location.href = "http://instagram.com"
  }

  return (
    <SMContainer>
      <SMListSection>
        <SMListItem>
          <SMButton onClick={twitterClicked}>
            <AiFillTwitterCircle color={siteColor} style={btnStyle} />
          </SMButton>
        </SMListItem>
        <SMListItem>
          <SMButton onClick={facebookClicked}>
            <RiFacebookCircleFill color={siteColor} style={btnStyle} />
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
          <SMButton onClick={instagramClicked}>
            <RiInstagramFill color={siteColor} style={btnStyleRoundedBox} />
          </SMButton>
        </SMListItem>
      </SMListSection>
    </SMContainer>
  )
}

export default SocialMedia
