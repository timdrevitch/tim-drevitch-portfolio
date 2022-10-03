import { FC, FormEvent, MutableRefObject, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { MainContentContainer, WebsiteContainer } from "../Styles/HomeStyles"

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
        <img
          style={{ width: "40%", display: "block", margin: "0 auto" }}
          src={require("../Assets/contactme.png")}
          alt="TimDrevitch"
        />
        {!ifEmailSent ? (
          <>
            <h3
              style={{
                color: "#d68b52",
              }}
            >
              Send me an email from here!
            </h3>
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <form style={{ width: "100%" }} ref={form} onSubmit={sendEmail}>
                <div style={{ width: "50%", float: "left" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "4rem",
                    }}
                  >
                    <label>
                      Name: <br />
                      <input
                        style={{
                          width: "95%",
                          height: "2rem",
                          background: "black",
                          color: "#F7C59F",
                          borderRadius: "5px",
                          borderColor: "#d68b52",
                          borderStyle: "solid",
                          marginTop: "5px",
                          marginBottom: "5px",
                        }}
                        placeholder="Please enter your full name..."
                        type="text"
                        name="user_name"
                        required
                      />
                    </label>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "4rem",
                    }}
                  >
                    <label>
                      Email: <br />
                      <input
                        style={{
                          width: "95%",
                          height: "2rem",
                          background: "black",
                          color: "#F7C59F",
                          borderRadius: "5px",
                          borderColor: "#d68b52",
                          borderStyle: "solid",
                          marginTop: "5px",
                          marginBottom: "5px",
                        }}
                        placeholder="Please enter your email address..."
                        type="email"
                        name="user_email"
                        required
                      />
                    </label>
                  </div>
                </div>
                <div style={{ width: "50%", float: "right" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "8rem",
                    }}
                  >
                    <label>
                      Message <br />
                      <textarea
                        style={{
                          width: "100%",
                          height: "6rem",
                          background: "black",
                          color: "#F7C59F",
                          borderRadius: "5px",
                          borderColor: "#d68b52",
                          borderStyle: "solid",
                          maxWidth: "100%",
                          resize: "none",
                          marginTop: "5px",
                          marginBottom: "5px",
                        }}
                        placeholder="Please enter your message..."
                        name="message"
                        required
                      />
                    </label>
                  </div>
                </div>
                <input
                  style={{
                    width: "100%",
                    background: "#F7C59F",
                    borderColor: "#d68b52",
                    borderRadius: "5px",
                    cursor: "pointer",
                    height: "4rem",
                    color: "#995b2b",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
            <br />
          </>
        ) : (
          <div>Thank you for your message!</div>
        )}
      </MainContentContainer>
    </WebsiteContainer>
  )
}

export default Contact
