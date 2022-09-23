import { CSSProperties, FC } from "react"
import { BsInfoCircleFill } from "react-icons/bs"
import {
  Description,
  Details,
  LargeItem,
  MainContentContainer,
  SmallItem,
} from "../Styles/HomeStyles"

const App: FC = (): JSX.Element => {
  const middle: CSSProperties = { verticalAlign: "middle" }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <MainContentContainer>
        <h1 style={{ fontSize: "72px" }}>Tim Drevitch</h1>
        <h1
          style={{
            margin: "-2.5rem 0 3rem 0",
            paddingBottom: "3rem",
            borderBottom: "1px solid white",
          }}
        >
          Software Engineer
        </h1>
        <Details>
          <summary style={{ cursor: "pointer" }}>
            {" "}
            Technologies <BsInfoCircleFill style={middle} />
          </summary>
          <div
            style={{ display: "flex", flexWrap: "wrap", paddingTop: "2rem" }}
          >
            <SmallItem>
              <p>React</p>
              <Description>Frontend Library</Description>{" "}
            </SmallItem>
            <SmallItem>
              <p>Node</p>
              <Description>Backend</Description>
            </SmallItem>
            <SmallItem>
              <p>Express</p>
              <Description>Backend Library</Description>
            </SmallItem>
            <SmallItem>
              <p>MongoDB Atlas</p>
              <Description>Database</Description>
            </SmallItem>
            <SmallItem>
              <p>Mongoose</p>
              <Description>Description</Description>
            </SmallItem>
            <SmallItem>
              <p>MySQL</p>
              <Description>Database</Description>
            </SmallItem>
            <SmallItem>
              <p>Xcode</p>
              <Description>IOS dev IDE</Description>
            </SmallItem>
            <SmallItem>
              <p>GitHub</p>
              <Description>Version control</Description>
            </SmallItem>
            <SmallItem>
              <p>Heroku</p>
              <Description>Hosting platform</Description>
            </SmallItem>
            <SmallItem>
              <p>Bubble.io</p>
              <Description>No-code web app builder</Description>
            </SmallItem>
            <SmallItem>
              <p>Styled Components</p>
              <Description>CSS Library</Description>
            </SmallItem>
            <SmallItem>
              <p> Code</p>
              <Description>IDE</Description>
            </SmallItem>
          </div>
        </Details>
        <br />
        <Details>
          <summary style={{ cursor: "pointer" }}>
            {" "}
            Languages <BsInfoCircleFill style={middle} />
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
            Full-Stack Portfolio Projects <BsInfoCircleFill style={middle} />
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
            Frontend-Only Portfolio Projects <BsInfoCircleFill style={middle} />
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
    </div>
  )
}

export default App
