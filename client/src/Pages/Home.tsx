import { FC } from "react";
import SocialMedia from "../Components/SocialMedia";
import ReactPlayer from "react-player";
import { FaLink } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
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
} from "../Styles/HomeStyles";

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
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
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
                    <li>3.9/4.00 GPA</li>
                  </ul>
                </em>
              </h6>
              <h6 style={{ marginTop: "-1rem" }}>
                Activities:{" "}
                <em>
                  <ul>
                    <li>ACHA Men's Ice Hockey Team</li>
                    <li>ACHA First Team All-Conference</li>
                  </ul>
                </em>
              </h6>
            </SchoolItem>
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
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            <LargeItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/website.png")}
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
              <h6>Static Serverless Websites (like this one)</h6>
            </LargeItem>
            <LargeItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/webapp.png")}
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
                  src={require("../Assets/appstore.png")}
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
                  src={require("../Assets/controller.png")}
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
                  src={require("../Assets/git.png")}
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
              <h6>GitHub / GitLab</h6>
              <h6 style={{ marginTop: "-1rem" }}>Semantic versioning</h6>
            </LargeItem>
            <LargeItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/api.png")}
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
              <h6 style={{ marginTop: "-1rem" }}>HTTP requests / responses</h6>
              <h6 style={{ marginTop: "-1rem" }}>Insomnia / Postman</h6>
            </LargeItem>
            <LargeItem>
              <div style={{ width: "100%", textAlign: "center" }}>
                <SchoolIcon
                  src={require("../Assets/agile.png")}
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
                Agile Sprints
              </h3>
              <h6>Kanban / Scrum</h6>
              <h6 style={{ marginTop: "-1rem" }}>Weight stystems</h6>
              <h6 style={{ marginTop: "-1rem" }}>Sprint analytics</h6>
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
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              gap: "2rem",
              justifyContent: "center",
            }}
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
                  src={require("../Assets/axios.png")}
                  alt="TimDrevitch"
                />
                <Description>Axios</Description>
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
                  src={require("../Assets/git.png")}
                  alt="TimDrevitch"
                />
                {/* <a target="_blank"
                rel="noreferrer" href="https://icons8.com/icon/20906/git">Git</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                <Description>Git</Description>
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
                  src={require("../Assets/gitlab.png")}
                  alt="TimDrevitch"
                />
                {/* <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/34886/gitlab">Gitlab</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                <Description>GitLab</Description>
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
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              gap: "2rem",
              justifyContent: "center",
            }}
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
            <SmallItem>
              <IconContainer>
                <TechIcon
                  src={require("../Assets/c++.png")}
                  alt="TimDrevitch"
                />
                {/* <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/40669/c++">C++</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                <Description>C++</Description>
              </IconContainer>
            </SmallItem>
            <SmallItem>
              <IconContainer>
                <TechIcon src={require("../Assets/c#.png")} alt="TimDrevitch" />
                {/* <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/45490/c-sharp-logo-2">C Sharp Logo 2</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                <Description>C#</Description>
              </IconContainer>
            </SmallItem>
          </div>
        </Details>
        <br />
        <Details>
          <summary style={{ cursor: "pointer" }}>
            {" "}
            Web Application Projects
            {/* <BsInfoCircleFill style={middle} /> */}
          </summary>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            <SchoolItem>
              <div>
                <h3 style={{ color: "#d68b52", float: "left" }}>
                  Dystocity: Job Hunt
                </h3>
                <h3 style={{ float: "right" }}>
                  <abbr title="Visit this project in a new tab">
                    <a
                      href="https://data-ethics-game.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#F7C59F" }}
                    >
                      <FaLink />
                    </a>
                  </abbr>
                  <span> </span>
                  <abbr title="View this repository on GitHub">
                    <a
                      href="https://github.com/timdrevitch/data-collection-ethics-game"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#F7C59F" }}
                    >
                      <AiFillGithub />
                    </a>
                  </abbr>
                </h3>
                <ReactPlayer
                  width="100%"
                  height="200px"
                  controls
                  url="https://www.youtube.com/watch?v=oy7225auibI"
                />
                <img
                  src={require("../Assets/laptopphonethesis.png")}
                  alt="Axios"
                  style={{
                    verticalAlign: "top",
                    display: "block",
                    margin: "1px auto",
                    width: "85%",
                  }}
                />
                <h6 style={{ marginTop: "-3.5rem" }}>
                  <span style={{ color: "#d68b52" }}>Description:</span>
                  <br />
                  <br /> This{" "}
                  <span style={{ color: "#d68b52" }}>full stack</span> web
                  application was created to be an{" "}
                  <span style={{ color: "#d68b52" }}>
                    interactive experience
                  </span>{" "}
                  where the player can make selections along the way that alter
                  how the game's story pans out and what ending they will get
                  (Like <em>Bandersnatch</em> or a choose your own adventure
                  story). It aims to teach players about the real life issues
                  surrounding data collection and data sharing in the modern
                  world. This game saves player stats and where they are in a
                  specific playthrough (meaning, the player could leave the game
                  or the website entirely without losing their progress in the
                  playthrough). It also has other features like a world wide
                  leaderboard and minimal player customization. The log in/sign
                  up system takes advantage of Google Oauth2 and GCP's API so
                  that player passwords never need to be saved. It is hosted
                  through Heroku{" "}
                  <a
                    href="https://data-ethics-game.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#d68b52" }}
                  >
                    here
                  </a>{" "}
                  for anyone to check out and play! Although this project is for
                  my graduate degree thesis, I have plans to continue working on
                  it more!
                </h6>
                <h6>
                  <span style={{ color: "#d68b52" }}>Technology Used:</span>
                  <p style={{ textAlign: "left" }}>
                    <img
                      src={require("../Assets/react.png")}
                      alt="React"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/node.png")}
                      alt="Node"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/express.png")}
                      alt="Express"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/mongodb.png")}
                      alt="MongoDB"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/axios.png")}
                      alt="Axios"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/styledcomponents.png")}
                      alt="styled-components"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/git.png")}
                      alt="Git"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/github.png")}
                      alt="GitHub"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/insomnia.png")}
                      alt="Insomnia"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/npm.png")}
                      alt="NPM"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/vscode.png")}
                      alt="VSCode"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/heroku.png")}
                      alt="Heroku"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                  </p>
                </h6>
                <h6 style={{ marginTop: "-1rem" }}>
                  <span style={{ color: "#d68b52" }}>Languages Used:</span>
                  <p style={{ textAlign: "left" }}>
                    <img
                      src={require("../Assets/html.png")}
                      alt="html"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/css.png")}
                      alt="css"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/javascript.png")}
                      alt="javascript"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/typescript.png")}
                      alt="typescript"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/jsonbson.png")}
                      alt="jsonbson"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                  </p>
                </h6>
              </div>
            </SchoolItem>
            <SchoolItem>
              <div>
                <h3 style={{ color: "#d68b52", float: "left" }}>
                  Classic Todo List App
                </h3>
                <h3 style={{ float: "right" }}>
                  <abbr title="View this repository on GitHub">
                    <a
                      href="https://github.com/timdrevitch/classic-todo-app"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#F7C59F" }}
                    >
                      <AiFillGithub />
                    </a>
                  </abbr>
                </h3>
                <ReactPlayer
                  width="100%"
                  height="200px"
                  controls
                  url="https://youtu.be/p8AJAcoDnH8"
                />
                <img
                  src={require("../Assets/laptopphonetodo.png")}
                  alt="Axios"
                  style={{
                    verticalAlign: "top",
                    display: "block",
                    margin: "1px auto",
                    width: "85%",
                  }}
                />
                <h6 style={{ marginTop: "-3.5rem" }}>
                  <span style={{ color: "#d68b52" }}>Description:</span>
                  <br />
                  <br />
                  This <span style={{ color: "#d68b52" }}>full stack</span> web
                  application allows users to perform the four most common CRUD
                  operations: Create, Read, Update, and Delete. This is my own
                  virsion of the classic "todo list" application that most
                  developers will make to learn the basics of full stack
                  development.
                </h6>
                <h6>
                  <span style={{ color: "#d68b52" }}>Technology Used:</span>
                  <p style={{ textAlign: "left" }}>
                    <img
                      src={require("../Assets/react.png")}
                      alt="React"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/node.png")}
                      alt="Node"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/express.png")}
                      alt="Express"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/mongodb.png")}
                      alt="MongoDB"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/axios.png")}
                      alt="Axios"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/styledcomponents.png")}
                      alt="styled-components"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/git.png")}
                      alt="Git"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/github.png")}
                      alt="Git"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/insomnia.png")}
                      alt="Git"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/npm.png")}
                      alt="Git"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/vscode.png")}
                      alt="VS Code"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                  </p>
                </h6>
                <h6 style={{ marginTop: "-1rem" }}>
                  <span style={{ color: "#d68b52" }}>Languages Used:</span>
                  <p style={{ textAlign: "left" }}>
                    <img
                      src={require("../Assets/html.png")}
                      alt="html"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/css.png")}
                      alt="css"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/javascript.png")}
                      alt="javascript"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/typescript.png")}
                      alt="typescript"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/jsonbson.png")}
                      alt="jsonbson"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                  </p>
                </h6>
              </div>
            </SchoolItem>
            <SchoolItem>
              <div>
                <h3 style={{ color: "#d68b52", float: "left" }}>
                  Student Loans Calculator App
                </h3>
                <h3 style={{ float: "right" }}>
                  <abbr title="View this repository on GitHub">
                    <a
                      href="https://github.com/timdrevitch/student-loans-app"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#F7C59F" }}
                    >
                      <AiFillGithub />
                    </a>
                  </abbr>
                </h3>
                <ReactPlayer
                  width="100%"
                  height="200px"
                  controls
                  url="https://youtu.be/UlhVoZHbtq0"
                />
                <img
                  src={require("../Assets/laptopphoneloan.png")}
                  alt="Axios"
                  style={{
                    verticalAlign: "top",
                    display: "block",
                    margin: "1px auto",
                    width: "85%",
                  }}
                />
                <h6 style={{ marginTop: "-3.5rem" }}>
                  <span style={{ color: "#d68b52" }}>Description:</span>
                  <br />
                  <br />
                  This <span style={{ color: "#d68b52" }}>full stack</span> web
                  application allows users to enter information about their
                  current student loans. Once entered, the program will do many
                  calculations behind the scenes to predict things like how much
                  the loan will accrue for the next year, how much it accrues
                  every month, and how much it accrues every day.
                </h6>
                <h6>
                  <span style={{ color: "#d68b52" }}>Technology Used:</span>
                  <p style={{ textAlign: "left" }}>
                    <img
                      src={require("../Assets/react.png")}
                      alt="React"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/node.png")}
                      alt="Node"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/express.png")}
                      alt="Express"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/mongodb.png")}
                      alt="MongoDB"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/axios.png")}
                      alt="Axios"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/styledcomponents.png")}
                      alt="styled-components"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/git.png")}
                      alt="Git"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/github.png")}
                      alt="Git"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/insomnia.png")}
                      alt="Git"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/npm.png")}
                      alt="Git"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/vscode.png")}
                      alt="VS Code"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                  </p>
                </h6>
                <h6 style={{ marginTop: "-1rem" }}>
                  <span style={{ color: "#d68b52" }}>Languages Used:</span>
                  <p style={{ textAlign: "left" }}>
                    <img
                      src={require("../Assets/html.png")}
                      alt="React"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/css.png")}
                      alt="Node"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/javascript.png")}
                      alt="Express"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/typescript.png")}
                      alt="MongoDB"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/jsonbson.png")}
                      alt="styled-components"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                  </p>
                </h6>
              </div>
            </SchoolItem>
            {/* <SchoolItem>
              <h3>App 3</h3>
              <h6>Description</h6>
            </SchoolItem>
            <SchoolItem>
              <h3>App 4</h3>
              <h6>Description</h6>
            </SchoolItem> */}
          </div>
        </Details>
        <br />
        <Details>
          <summary style={{ cursor: "pointer" }}>
            {" "}
            Native Application Projects
            {/* <BsInfoCircleFill style={middle} /> */}
          </summary>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            <SchoolItem>
              <div>
                <h3 style={{ color: "#d68b52", float: "left" }}>
                  Flappy Bird Hockey Clone
                </h3>
                <h3 style={{ float: "right" }}>
                  <abbr title="View this repository on GitHub">
                    <a
                      href="https://github.com/timdrevitch/flappy-drev-game"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#F7C59F" }}
                    >
                      <AiFillGithub />
                    </a>
                  </abbr>
                </h3>
                <ReactPlayer
                  width="100%"
                  height="200px"
                  controls
                  url="https://youtu.be/2kZ7EyEjaXU"
                />
                <h6 style={{ marginTop: "4rem" }}>
                  <span style={{ color: "#d68b52" }}>Description:</span>
                  <br />
                  <br />
                  This IOS native application is a Flappy Bird clone. Flappy
                  Bird... but hockey! The player avoids goal posts by tapping
                  the screen at the right time to jump through them. I used
                  Inkscape, ZBrush, Photoshop, Illustrator, Blendr, Unity, and
                  Xcode to build this game. I even set up a custom controller
                  for this game using a Makey-Makey kit that allows the player
                  to jump simply by closing and opening their hand with a glove
                  on.
                </h6>
                <h6>
                  <span style={{ color: "#d68b52" }}>Technology Used:</span>
                  <p style={{ textAlign: "left" }}>
                    <img
                      src={require("../Assets/unity.png")}
                      alt="Unity"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/xcode.png")}
                      alt="Xcode"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/git.png")}
                      alt="Git"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/github.png")}
                      alt="GitHub"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                  </p>
                </h6>
                <h6 style={{ marginTop: "-1rem" }}>
                  <span style={{ color: "#d68b52" }}>Languages Used:</span>
                  <p style={{ textAlign: "left" }}>
                    <img
                      src={require("../Assets/c++.png")}
                      alt="React"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/c#.png")}
                      alt="React"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/swift.png")}
                      alt="Swift"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                    <img
                      src={require("../Assets/jsonbson.png")}
                      alt="JSON/BSON"
                      style={{
                        verticalAlign: "top",
                        margin: "4px",
                        width: "6%",
                      }}
                    />
                  </p>
                </h6>
              </div>
            </SchoolItem>
            {/* <SchoolItem>
              <h3>The Insult App 2</h3>
              <h6>Sequel to The Insult App on the IOS App Store.</h6>
            </SchoolItem>
            <SchoolItem>
              <h3>Hockey Techniques Landing Page</h3>
              <h6>Description</h6>
            </SchoolItem> */}
          </div>
        </Details>
        <br />
        <br />
        <br />
      </MainContentContainer>
    </WebsiteContainer>
  );
};

export default Home;
