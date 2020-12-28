import React from "react";
import axios from "axios";
import config from "../../../config.json";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1em;
  form {
    direction: rtl;
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    input {
      margin: 0.5em;
    }
  }
`;

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    axios.post(
      `${config.proxy}${config.auth.login}`,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      }
    );
  };

  return (
    <Container>
      <form onSubmit={(e) => submitHandle(e)}>
        <TextInput
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          label="שם משתמש"
        />
        <TextInput
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label="סיסמא"
        />
        <input value="התחברות" type="submit" />
      </form>
    </Container>
  );
};

export default Login;

const TextInput = ({ label, placeholder, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input type="text" onChange={onChange} placeholder={placeholder}></input>
    </>
  );
};
