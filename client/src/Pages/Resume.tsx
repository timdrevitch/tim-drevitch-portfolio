import { FC } from "react"
import { MainContentContainer, WebsiteContainer } from "../Styles/HomeStyles"
// import { Document, Page } from "react-pdf"

const Resume: FC = (): JSX.Element => {
  return (
    <WebsiteContainer>
      <MainContentContainer>
        <img
          style={{ width: "100%", display: "block", margin: "0 auto" }}
          src={require("../Assets/tim_drevitch_resume.png")}
          alt="TimDrevitch"
        />
        <br />
        <br />
      </MainContentContainer>
    </WebsiteContainer>
  )
}

export default Resume
