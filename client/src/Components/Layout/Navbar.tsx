import { FC } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import {
  MainNavContentContainer,
  NavigationButton,
  NavigationImg,
  WebsiteNavContainer,
} from "../../Styles/NavbarStyles"

const Navbar: FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate()
  return (
    <WebsiteNavContainer>
      <MainNavContentContainer>
        <NavigationImg
          src={require("../../Assets/tdnavlogo.png")}
          alt="TimDrevitch"
        />
        <div
          style={{
            float: "right",
            height: "100%",
            verticalAlign: "middle",
          }}
        >
          <NavigationButton
            onClick={() => navigate("/tim-drevitch-portfolio/")}
          >
            Home
          </NavigationButton>
          <NavigationButton
            onClick={() => navigate("/tim-drevitch-portfolio/resume")}
          >
            Resume
          </NavigationButton>
          <NavigationButton
            onClick={() => navigate("/tim-drevitch-portfolio/contact")}
          >
            Contact
          </NavigationButton>
        </div>
      </MainNavContentContainer>
    </WebsiteNavContainer>
  )
}

export default Navbar
