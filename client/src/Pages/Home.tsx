import { CSSProperties, FC } from "react"
import { GrLinkedin, GrTwitter, GrGithub } from "react-icons/gr"
import SocialMedia from "../Components/SocialMedia"
// import { BsInfoCircleFill } from "react-icons/bs"
import {
  Description,
  Details,
  IconContainer,
  LargeItem,
  MainContentContainer,
  SchoolIcon,
  SchoolItem,
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
          <SocialMedia />
        </h1>
        <Details>
          <summary style={{ cursor: "pointer" }}>
            {" "}
            Education
            {/* <BsInfoCircleFill style={middle} /> */}
          </summary>
          <div
            style={{ display: "flex", flexWrap: "wrap", paddingTop: "2rem" }}
          >
            <SchoolItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/wsu.png")}
                  alt="TimDrevitch"
                />
              </div>
              <h3
                style={{
                  marginTop: "-.75rem",
                  color: "#d68b52",
                  textAlign: "center",
                }}
              >
                Worcester State University
              </h3>
              <h6 style={{ textAlign: "center" }}>Bachelor's Degree (BS)</h6>
              <h6 style={{ marginTop: "-1rem" }}>
                Major: <em>Computer Science (Software Development)</em>
              </h6>
              <h6 style={{ marginTop: "-1rem" }}>
                Minor: <em>Mathematics</em>
              </h6>
              <h6 style={{ marginTop: "-1rem" }}>
                Accolades:{" "}
                <em>
                  <ul>
                    <li>3.5/4.00 GPA</li>
                    <li>Dean's List (x3)</li>
                    <li>All-Academic Team (x8)</li>
                    <li>National College Honor Society</li>
                    <li>Paid CS Peer-Tutor</li>
                  </ul>
                </em>
              </h6>
              <h6 style={{ marginTop: "-1rem" }}>
                Activities:{" "}
                <em>
                  <ul>
                    <li>NCAA Men's Ice Hockey Team</li>
                    <li>MASCAC Rookie of the Week (x3)</li>
                    <li>WSU All-Sports Rookie of the Year (2017-18)</li>
                  </ul>
                </em>
              </h6>
            </SchoolItem>
            <SchoolItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/wpi.png")}
                  alt="TimDrevitch"
                />
              </div>
              <h3
                style={{
                  marginTop: "-.75rem",
                  color: "#d68b52",
                  textAlign: "center",
                }}
              >
                Worcester Polytechnic Institute
              </h3>
              <h6 style={{ textAlign: "center" }}>Master's Degree (MS)</h6>
              <h6 style={{ marginTop: "-1rem" }}>
                Major: <em>Interactive Media (Game Development)</em>
              </h6>
              <h6 style={{ marginTop: "-1rem" }}>
                Thesis: <em>Smart City Data Ethics</em>
              </h6>
              <h6 style={{ marginTop: "-1rem" }}>
                Accolades:{" "}
                <em>
                  <ul>
                    <li>3.85/4.00 GPA</li>
                  </ul>
                </em>
              </h6>
              <h6 style={{ marginTop: "-1rem" }}>
                Activities:{" "}
                <em>
                  <ul>
                    <li>ACHA Men's Ice Hockey Team</li>
                  </ul>
                </em>
              </h6>
            </SchoolItem>
          </div>
        </Details>
        <br />
        <Details>
          <summary style={{ cursor: "pointer" }}>
            {" "}
            Skills
            {/* <BsInfoCircleFill style={middle} /> */}
          </summary>
          <div
            style={{ display: "flex", flexWrap: "wrap", paddingTop: "2rem" }}
          >
            <LargeItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/wsu.png")}
                  alt="TimDrevitch"
                />
              </div>
              <h3
                style={{
                  marginTop: "-.75rem",
                  color: "#d68b52",
                  textAlign: "center",
                }}
              >
                Websites
              </h3>
              <h6>Front-End-Only Websites (like this one)</h6>
            </LargeItem>
            <LargeItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/wsu.png")}
                  alt="TimDrevitch"
                />
              </div>
              <h3
                style={{
                  marginTop: "-.75rem",
                  color: "#d68b52",
                  textAlign: "center",
                }}
              >
                Web Applications
              </h3>
              <h6>Full-Stack Web Applications</h6>
              <h6 style={{ marginTop: "-1rem" }}>Front-End & Back-End</h6>
              <h6 style={{ marginTop: "-1rem" }}>
                Client / API / Server / Database
              </h6>
            </LargeItem>
            <LargeItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/wsu.png")}
                  alt="TimDrevitch"
                />
              </div>
              <h3
                style={{
                  marginTop: "-.75rem",
                  color: "#d68b52",
                  textAlign: "center",
                }}
              >
                IOS Applications
              </h3>
              <h6>Licenced IOS App Store Developer</h6>
              <h6 style={{ marginTop: "-1rem" }}>Xcode + Swift Development</h6>
              <h6 style={{ marginTop: "-1rem" }}>App Store Connect</h6>
            </LargeItem>
            <LargeItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/wsu.png")}
                  alt="TimDrevitch"
                />
              </div>
              <h3
                style={{
                  marginTop: "-.75rem",
                  color: "#d68b52",
                  textAlign: "center",
                }}
              >
                Video Games
              </h3>
              <h6>Unity / Unreal / Xcode</h6>
              <h6 style={{ marginTop: "-1rem" }}>C# / C++ / Swift</h6>
            </LargeItem>
            <LargeItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/wsu.png")}
                  alt="TimDrevitch"
                />
              </div>
              <h3
                style={{
                  marginTop: "-.75rem",
                  color: "#d68b52",
                  textAlign: "center",
                }}
              >
                Version Control
              </h3>
              <h6>GitHub</h6>
              <h6>GitLab</h6>
            </LargeItem>
            <LargeItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/wsu.png")}
                  alt="TimDrevitch"
                />
              </div>
              <h3
                style={{
                  marginTop: "-.75rem",
                  color: "#d68b52",
                  textAlign: "center",
                }}
              >
                RESTful APIs
              </h3>
              <h6>CRUD opperations</h6>
              <h6 style={{ marginTop: "-1rem" }}>HTTP requests</h6>
              <h6 style={{ marginTop: "-1rem" }}>HTTP responses</h6>
            </LargeItem>
          </div>
        </Details>
        <br />
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
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/unity.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://icons8.com/icon/P08kExl7rixR/unity"
                >
                  Unity
                </a>{" "}
                icon by{" "}
                <a target="_blank" rel="noreferrer" href="https://icons8.com">
                  Icons8
                </a> */}
                <Description>Unity</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/insomnia.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://icons8.com/icon/P08kExl7rixR/unity"
                >
                  Unity
                </a>{" "}
                icon by{" "}
                <a target="_blank" rel="noreferrer" href="https://icons8.com">
                  Icons8
                </a> */}
                <Description>Insomia</Description>
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
                <Description>Git</Description>
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
              <IconContainer>
                <TechIcon
                  src={require("../Assets/html.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/YWDsCjL0c2qv/html5"
              >
                HTML5
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>HTML</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/css.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/38272/css3"
              >
                CSS3
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>CSS</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/javascript.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/108784/javascript"
              >
                JavaScript
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>JavaScript</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/typescript.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/cHBUT9SmrD2V/typescript"
              >
                TypeScript
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>TypeScript</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/java.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/13679/java"
              >
                Java
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>Java</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/swift.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/45985/swift"
              >
                Swift
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>Swift</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/sql.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/KZHjwwenS7oK/database"
              >
                Database
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>SQL</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/markdown.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/21827/markdown"
              >
                Markdown
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>Markdown</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/jsonbson.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/122581/curly-brackets"
              >
                Curly Brackets
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>JSON / BSON</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/bashshell.png")}
                  alt="TimDrevitch"
                />
                {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon/10250/console"
              >
                Console
              </a>{" "}
              icon by{" "}
              <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
              </a> */}
                <Description>Bash / Shell</Description>
              </IconContainer>
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
        <br />
        <br />
        <br />
      </MainContentContainer>
    </WebsiteContainer>
  )
}

export default Home
