"use client";

import React from "react";

import Image from "next/image";

import Button from "../styles/todolist/Button";
import { MainContainer } from "../styles/todolist/MainContainer";
import { ImgLoginContainer } from "../styles/todolist/ImgLoginContainer";
import { StyledLink } from "../styles/header/StyledLink";

export const LoginForm = () => {
  return (
    <MainContainer>
      <ImgLoginContainer>
        <Image
          src="/loginImg.png"
          alt="Picture of the author"
          fill
          priority
          sizes="(max-width: 768px) 150px, 300px"
        />
      </ImgLoginContainer>
      <StyledLink href="/api/auth/login">
        <Button>
          <strong>LOGIN</strong>
        </Button>
      </StyledLink>
    </MainContainer>
  );
};
