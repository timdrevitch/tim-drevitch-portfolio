import { CSSProperties, FC } from "react"
import { BsInfoCircleFill } from "react-icons/bs"
import { MainContentContainer, MainHeaderContainer } from "../Styles/HomeStyles"

const App: FC = (): JSX.Element => {
  const middle: CSSProperties = { verticalAlign: "middle" }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10% 10% 10% 10% 10% 10% 10% 10% 10% 10%",
      }}
    >
      <MainHeaderContainer>
        <h1 style={{ fontSize: "72px" }}>Tim Drevitch</h1>
        <h1 style={{ margin: "-2.5rem 0 3rem 0" }}>Software Engineer</h1>
      </MainHeaderContainer>
      <div style={{ gridColumn: "1 / 3", padding: "1rem" }}>
        {/* <h1>Technologies</h1>
        <h3>Software Engineer</h3> */}
      </div>
      <MainContentContainer>
        <h1>
          Technologies <BsInfoCircleFill style={middle} />
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>React</h3>
            <h6>Frontend Library</h6>{" "}
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Node</h3>
            <h6>Backend</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Express</h3>
            <h6>Backend Library</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>MongoDB Atlas</h3>
            <h6>Database</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Mongoose</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>MySQL</h3>
            <h6>Database</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Xcode</h3>
            <h6>IOS dev IDE</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>GitHub</h3>
            <h6>Version control</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Heroku</h3>
            <h6>Hosting platform</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Bubble.io</h3>
            <h6>No-code web app builder</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Styled Components</h3>
            <h6>CSS Library</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>VS Code</h3>
            <h6>IDE</h6>
          </div>
        </div>
        <h1>Languages</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>HTML</h3>
            <h6>Description</h6>{" "}
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>CSS</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Javascript</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Typescript</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Java</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Swift</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>SQL</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>md</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>JSON</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "7rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Bash</h3>
            <h6>Description</h6>
          </div>
        </div>
        <h1>Full-Stack Projects</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              width: "14rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Classic Todo App</h3>
            <h6>Description</h6>{" "}
          </div>
          <div
            style={{
              width: "14rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Student Loans App</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "14rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>App 3</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "14rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>App 4</h3>
            <h6>Description</h6>
          </div>
        </div>
        <h1>Static Website Projects</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              width: "14rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Classic Todo App</h3>
            <h6>Description</h6>{" "}
          </div>
          <div
            style={{
              width: "14rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>Student Loans App</h3>
            <h6>Description</h6>
          </div>
          <div
            style={{
              width: "14rem",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3>App 3</h3>
            <h6>Description</h6>
          </div>
        </div>
      </MainContentContainer>
      <div style={{ gridColumn: "9 / 11", textAlign: "center" }}>
        {/* <h1>Contact Me</h1>
        <h3>Contact Form</h3> */}
      </div>
    </div>
  )
}

export default App
