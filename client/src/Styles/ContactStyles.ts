import styled from "styled-components"

export const EmailForm = styled.form`
  width: 100%;
  background: rgba(255, 255, 255, 0.11);
  padding: 1rem;
  border-radius: 10px;
`
export const LeftSection = styled.div`
  width: 50%;
  float: left;
`
export const RightSection = styled.div`
  width: 50%;
  float: right;
`
export const SmallInputContainer = styled.div`
  width: 100%;
  height: 4rem;
`
export const SmallInput = styled.input`
  width: 95%;
  height: 2rem;
  background: black;
  color: #f7c59f;
  border-radius: 5px;
  border-color: #d68b52;
  border-style: solid;
  margin-top: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 5px 12px 1px rgba(0, 0, 0, 0.59);
  @media (max-width: 950px) {
    width: 90%;
  }
`
export const LargeInput = styled.textarea`
  /* width: 100%; */
  height: 6rem;
  background: black;
  color: #f7c59f;
  border-radius: 5px;
  border-color: #d68b52;
  border-style: solid;
  width: 98%;
  resize: none;
  margin-top: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 5px 12px 1px rgba(0, 0, 0, 0.59);
  /* @media (max-width: 950px) {
    width: 90%;
  } */
`
export const ContactList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  background: rgba(255, 255, 255, 0.11);
  padding: 1rem;
  border-radius: 10px;
  list-style-type: none;
  /* @media (max-width: 950px) {
    gap: 3rem;
  } */
`
export const ListItem = styled.div`
  width: 40%;
  @media (max-width: 650px) {
    width: 80%;
  }
`
export const LinkItem = styled.a`
  color: #d68b52;
  text-decoration: none;
  &:hover {
    color: white;
  }
`
export const SubmitButton = styled.input`
  width: 100%;
  background: #f7c59f;
  border-color: #995b2b;
  border-radius: 5px;
  cursor: pointer;
  height: 4rem;
  color: #995b2b;
  margin-top: 1rem;
  box-shadow: 0px 5px 12px 1px rgba(0, 0, 0, 0.59);
  font-family: Trebuchet MS, "sans-serif";
  &:hover {
    background: white;
  }
`
