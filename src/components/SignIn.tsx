"use client";
import React, { useState } from "react";
import { styled } from "styled-components";

const StyledEmailAddressComponent = styled("input")({
  height: "60px",
  border: "1px solid #dddfe2",
  borderRadius: "8px",
});
const StyledPasswordComponent = styled("input")({
  height: "60px",
  border: "1px solid #dddfe2",
  borderRadius: "8px",
});
const StyledLoginButtonComponent = styled("button")({
  height: "50px",
  backgroundColor: "#3975ea",
  color: "white",
  borderRadius: "8px",
});
const StyledForgotPasswordComponent = styled("button")({
  color: "#3975ea",
  fontSize: "14px",
  alignItems: "center",
});
const StyledCreateNewAccountComponent = styled("button")({
  marginLeft: "18%",
  backgroundColor: "#65b543",
  color: "white",
  width: "60%",
  height: "60px",
  borderRadius: "8px",
});
const SignIn = () => {
  const [input, setState] = useState({ email: "", password: "" });
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    console.log("inputs", input);
  };
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className="grid grid-rows-2 gap-4 mt-14 align-center">
      <StyledEmailAddressComponent
        type="text"
        placeholder="Email address or phone number"
        name="email"
        onChange={(event) => handleInput(event)}
      />
      <StyledPasswordComponent
        type="password"
        placeholder="Password"
        name="password"
        onChange={(event) => handleInput(event)}
      />
      <StyledLoginButtonComponent onClick={(event) => handleLogin(event)}>
        Login
      </StyledLoginButtonComponent>
      <StyledForgotPasswordComponent>
        Forgotten password?
      </StyledForgotPasswordComponent>
      <StyledCreateNewAccountComponent>
        Create new account
      </StyledCreateNewAccountComponent>
    </div>
  );
};

export default SignIn;
