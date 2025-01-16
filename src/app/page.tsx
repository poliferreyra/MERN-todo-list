"use client";
// TODO chequear porque hay delay en el renderizado

import { Provider, useSelector } from "react-redux";
import { RootState } from "../app/redux/store/store";
import store from "../app/redux/store/store";
import Header from "./frontend/components/Header";
import styled from "styled-components";
import Home from "./frontend/components/Home";
import LoginForm from "./components/forms/LoginForm";
export const Container = styled.div`


  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
`;

function AppContent() {
  const { isAuthenticated } = useSelector((state: RootState) => state.user); 

  return (
    <Container>
      {isAuthenticated ? <Home /> : <LoginForm />}
    </Container>
  );
}

export default function Page() {
  return (
    <Provider store={store}>
      <Header />
      <AppContent />
    </Provider>
  );
}
