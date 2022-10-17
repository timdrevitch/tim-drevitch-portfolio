import { FC } from "react"
import { LinkItem } from "../../Styles/ContactStyles"
import { FooterContainer } from "../../Styles/FooterStyles"
import { SMListItem } from "../../Styles/SocialMediaStyles"

const Footer: FC = (): JSX.Element => {
  const current: Date = new Date()
  const thisYear: string = `${current.getFullYear()}`

  return (
    <FooterContainer>
      <div>© All Rights Reserved {thisYear} Tim Drevitch</div>
      <SMListItem>
        View the repository to this website at{" "}
        <LinkItem
          target="_blank"
          rel="noreferrer"
          href="https://github.com/timdrevitch/tim-drevitch-portfolio"
        >
          github.com/timdrevitch/tim-drevitch-portfolio
        </LinkItem>{" "}
      </SMListItem>
      <br />
      <br />
      <br />
    </FooterContainer>
  )
}

export default Footer
