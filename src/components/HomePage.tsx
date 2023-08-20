"use client";
import Image from "next/image";
import React from "react";
import { styled } from "styled-components";
import SignIn from "./SignIn";
const FacebookSubtitle = styled("div")({
  marginTop: "2px",
  color: "black",
});
const HomePage = () => {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 gap-4">
      <div className="mt-[-30%] ml-[10%]">
        <Image
          src="/facebook_logo.png"
          alt="facebook_logo"
          width={400}
          height={100}
          className="ml-20%"
        />
        <FacebookSubtitle>
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </FacebookSubtitle>
      </div>
      <div className="md:ml-[10%] mt-[-30%]">
        <SignIn />
      </div>
    </div>
  );
};

export default HomePage;
