import { FC } from "react";
import { MainContentContainer, WebsiteContainer } from "../Styles/HomeStyles";
// import { Document, Page } from "react-pdf"

const Resume: FC = (): JSX.Element => {
  return (
    <WebsiteContainer>
      <MainContentContainer>
        <h1 style={{ fontSize: "42px", color: "#F7C59F" }}>My Resume</h1>
        <h1
          style={{
            margin: "-2.5rem 0 3rem 0",
            paddingBottom: "3rem",
            borderBottom: "1px solid #d68b52",
          }}
        >
          {/* Software Engineer */}
        </h1>
        <img
          style={{ width: "100%", display: "block", margin: "0 auto" }}
          src={require("../Assets/Tim_Drevitch_Resume_February2023.png")}
          alt="TimDrevitch"
        />
        <br />
        <br />
      </MainContentContainer>
    </WebsiteContainer>
  );
};

export default Resume;
