"use client";

import React from "react";

import Image from "next/image";
import Button from "app/styles/todoList/Button";
import { StyledLink } from "app/styles/header/StyledLink";
import { MainContainer } from "app/styles/todoList/MainContainer";
import { ImgLoginContainer } from "app/styles/todoList/ImgLoginContainer";



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
