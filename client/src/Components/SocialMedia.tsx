import { FC } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  SMButton,
  SMContainer,
  SMListItem,
  SMListSection,
} from "../Styles/SocialMediaStyles";

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

  const siteColor = "#b46d37";

  return (
    <SMContainer>
      <SMListSection>
        <SMListItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/timdrevitch"
          >
            <AiFillGithub color={siteColor} style={btnStyle} />
          </a>{" "}
        </SMListItem>
        <SMListItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/tim-drevitch"
          >
            <AiFillLinkedin color={siteColor} style={btnStyleBox} />
          </a>{" "}
        </SMListItem>
        <SMListItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/TimDrevitchDev"
          >
            <AiFillTwitterCircle color={siteColor} style={btnStyle} />
          </a>{" "}
        </SMListItem>
      </SMListSection>
    </SMContainer>
  )
};

export default SocialMedia;
