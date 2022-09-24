import { FC } from "react"
import {
  MainNavContentContainer,
  NavigationImg,
  NavigationLink,
  WebsiteNavContainer,
} from "../../Styles/NavbarStyles"

const Navbar: FC = (): JSX.Element => {
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
          <NavigationLink>Home</NavigationLink>
          <NavigationLink>Resume</NavigationLink>
          <NavigationLink>Contact</NavigationLink>
        </div>
      </MainNavContentContainer>
    </WebsiteNavContainer>
  )
}

export default Navbar
