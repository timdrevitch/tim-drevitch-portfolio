import { FC } from "react"
import { FooterContainer } from "../../Styles/FooterStyles"

const Footer: FC = (): JSX.Element => {
  const current: Date = new Date()
  const thisYear: string = `${current.getFullYear()}`

  return (
    <FooterContainer>
      <div>© All Rights Reserved {thisYear} Tim Drevitch</div>
      <br />
    </FooterContainer>
  )
}

export default Footer
