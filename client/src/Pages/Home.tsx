import { CSSProperties, FC } from "react"
// import { BsInfoCircleFill } from "react-icons/bs"
import {
  Description,
  Details,
  IconContainer,
  LargeItem,
  MainContentContainer,
  SmallItem,
  TechIcon,
  WebsiteContainer,
} from "../Styles/HomeStyles"

const Home: FC = (): JSX.Element => {
  //   const middle: CSSProperties = { verticalAlign: "middle" }

  return (
    <WebsiteContainer>
      <MainContentContainer>
        <h1 style={{ fontSize: "72px", color: "#d68b52" }}>Tim Drevitch</h1>
        <h1
          style={{
            margin: "-2.5rem 0 3rem 0",
            paddingBottom: "3rem",
            borderBottom: "1px solid #F7C59F",
          }}
        >
          Software Engineer
        </h1>
        <Details>
          <summary style={{ cursor: "pointer" }}>
            {" "}
            Technologies
            {/* <BsInfoCircleFill style={middle} /> */}
          </summary>
          <div
            style={{ display: "flex", flexWrap: "wrap", paddingTop: "2rem" }}
          >
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/react.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/bzf0DqjXFHIW/react"
              >
                React
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>React</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/node.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/hsPbhkOH4FMe/node-js"
              >
                Node Js
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>Node</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/express.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/WNoJgbzDr3i2/express-js"
              >
                Express Js
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>Express</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/mongodb.png")}
                  alt="TimDrevitch"
                />
                {/* <p>MongoDB Atlas</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/8rKdRqZFLurS/mongodb-a-cross-platform-document-oriented-database-program"
              >
                MongoDB a cross-platform document-oriented database program
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>MongoDB</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/mysql.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/UFXRpPFebwa2/mysql-logo"
              >
                MySQL Logo
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>MySQL</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/xcode.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/79115/xcode"
              >
                Xcode
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>Xcode</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/github.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/AZOZNnY73haj/github"
              >
                GitHub
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>GitHub</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/heroku.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/32337/heroku"
              >
                Heroku
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>Heroku</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/bubble.png")}
                  alt="TimDrevitch"
                />
                <Description>Bubble</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/styledcomponents.png")}
                  alt="TimDrevitch"
                />
                <Description>Styled Components</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/vscode.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/y7WGoWNuIWac/visual-studio"
              >
                Visual Studio
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>VScode</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/npm.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/QERhMe8qpblP/npm"
              >
                NPM
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>NPM</Description>
              </IconContainer>
            </SmallItem>
          </div>
        </Details>
        <br />
        <Details>
          <summary style={{ cursor: "pointer" }}>
            {" "}
            Languages
            {/* <BsInfoCircleFill style={middle} /> */}
          </summary>
          <div
            style={{ display: "flex", flexWrap: "wrap", paddingTop: "2rem" }}
          >
            <SmallItem>
              <p>HTML</p>
              <p>Description</p>
            </SmallItem>
            <SmallItem>
              <p>CSS</p>
              <p>Description</p>
            </SmallItem>
            <SmallItem>
              <p>Javascript</p>
              <p>Description</p>
            </SmallItem>
            <SmallItem>
              <p>Typescript</p>
              <p>Description</p>
            </SmallItem>
            <SmallItem>
              <p>Java</p>
              <p>Description</p>
            </SmallItem>
            <SmallItem>
              <p>Swift</p>
              <p>Description</p>
            </SmallItem>
            <SmallItem>
              <p>SQL</p>
              <p>Description</p>
            </SmallItem>
            <SmallItem>
              <p>md</p>
              <p>Description</p>
            </SmallItem>
            <SmallItem>
              <p>JSON</p>
              <p>Description</p>
            </SmallItem>
            <SmallItem>
              <p>Bash</p>
              <p>Description</p>
            </SmallItem>
          </div>
        </Details>
        <br />
        <Details>
          <summary style={{ cursor: "pointer" }}>
            {" "}
            Full-Stack Portfolio Projects
            {/* <BsInfoCircleFill style={middle} /> */}
          </summary>
          <div
            style={{ display: "flex", flexWrap: "wrap", paddingTop: "2rem" }}
          >
            <LargeItem>
              <h3>Classic Todo App</h3>
              <h6>Description</h6>{" "}
            </LargeItem>
            <LargeItem>
              <h3>Student Loans App</h3>
              <h6>Description</h6>
            </LargeItem>
            <LargeItem>
              <h3>App 3</h3>
              <h6>Description</h6>
            </LargeItem>
            <LargeItem>
              <h3>App 4</h3>
              <h6>Description</h6>
            </LargeItem>
          </div>
        </Details>
        <br />
        <Details>
          <summary style={{ cursor: "pointer" }}>
            {" "}
            Frontend-Only Portfolio Projects
            {/* <BsInfoCircleFill style={middle} /> */}
          </summary>
          <div
            style={{ display: "flex", flexWrap: "wrap", paddingTop: "2rem" }}
          >
            <LargeItem>
              <h3>Classic Todo App</h3>
              <h6>Description</h6>{" "}
            </LargeItem>
            <LargeItem>
              <h3>Student Loans App</h3>
              <h6>Description</h6>
            </LargeItem>
            <LargeItem>
              <h3>App 3</h3>
              <h6>Description</h6>
            </LargeItem>
          </div>
        </Details>
      </MainContentContainer>
    </WebsiteContainer>
  )
}

export default Home
