import { FC, FormEvent, MutableRefObject, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { MainContentContainer, WebsiteContainer } from "../Styles/HomeStyles"
import { BsLink45Deg } from "react-icons/bs"
import {
  EmailForm,
  LargeInput,
  LeftSection,
  SmallInput,
  SmallInputContainer,
  ContactList,
  ListItem,
  LinkItem,
  SubmitButton,
} from "../Styles/ContactStyles"

const Contact: FC = (): JSX.Element => {
  const form: MutableRefObject<any> = useRef()
  const [ifEmailSent, setIfEmailSent] = useState<boolean>(false)

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_zs93glr",
        "template_402nq9l",
        form.current,
        "zhxSUb3n3D811BY1t"
      )
      .then(
        (result) => {
          console.log(result.text)
          setIfEmailSent(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <WebsiteContainer>
      <MainContentContainer>
        <br />
        <br />
        <br />
        <h1
          style={{
            margin: "-2.5rem 0 3rem 0",
            fontSize: "42px",
            paddingBottom: "3rem",
            borderBottom: "1px solid #d68b52",
          }}
        >
          Get in touch with me
        </h1>
        <h3>Contact:</h3>
        <ContactList>
          <ListItem>
            Email:{" "}
            <span style={{ color: "#d68b52" }}>timdrevitch@gmail.com</span>
          </ListItem>
          <ListItem>
            LinkedIn:{" "}
            <LinkItem
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tim-drevitch-43016719b"
            >
              <BsLink45Deg />
              <em>View Profile</em>
            </LinkItem>
          </ListItem>
          <ListItem>
            GitHub:{" "}
            <LinkItem
              target="_blank"
              rel="noreferrer"
              href="https://github.com/timdrevitch"
            >
              <BsLink45Deg />
              <em>View Profile</em>
            </LinkItem>
          </ListItem>
          <ListItem>
            Twitter:{" "}
            <LinkItem
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/TimDrevitchDev"
            >
              <BsLink45Deg />
              <em>View Profile</em>
            </LinkItem>
          </ListItem>
        </ContactList>
        {!ifEmailSent ? (
          <>
            <h1
              style={{
                margin: "-.01rem 0 2rem 0",
                fontSize: "42px",
                paddingBottom: "3rem",
                borderBottom: "1px solid #d68b52",
              }}
            >
              {/* Get in touch with me */}
            </h1>
            <h3>Or, send me an email from here:</h3>
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <EmailForm ref={form} onSubmit={sendEmail}>
                <LeftSection>
                  <SmallInputContainer>
                    <label>
                      Name: <br />
                      <SmallInput
                        placeholder="Enter your full name..."
                        type="text"
                        name="user_name"
                        required
                      />
                    </label>
                  </SmallInputContainer>
                  <SmallInputContainer>
                    <label>
                      Email: <br />
                      <SmallInput
                        placeholder="Enter your email address..."
                        type="email"
                        name="user_email"
                        required
                      />
                    </label>
                  </SmallInputContainer>
                </LeftSection>
                <div style={{ width: "50%", float: "right" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "8rem",
                    }}
                  >
                    <label>
                      Message: <br />
                      <LargeInput
                        placeholder="Enter your message..."
                        name="message"
                        required
                      />
                    </label>
                  </div>
                </div>
                <SubmitButton type="submit" value="Send" />
                <br />
                <br />
              </EmailForm>
            </div>
            <br />
            <br />
          </>
        ) : (
          <>
            <h1
              style={{
                margin: "-.01rem 0 2rem 0",
                fontSize: "42px",
                paddingBottom: "3rem",
                borderBottom: "1px solid #d68b52",
              }}
            >
              {/* Get in touch with me */}
            </h1>
            <div
              style={{
                textAlign: "center",
                fontSize: "42px",
                background: "rgba(255, 255, 255, 0.11)",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              Thank you for your message!
            </div>
            <br />
            <br />
          </>
        )}
      </MainContentContainer>
    </WebsiteContainer>
  )
}

export default Contact
