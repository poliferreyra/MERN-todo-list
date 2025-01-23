"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { FaUserCircle } from "react-icons/fa";
import { HeaderContainer } from "../styles/header/HeaderContainer";
import { Greeting } from "../styles/header/Greeting";
import { StyledLink } from "../styles/header/StyledLink";


const Header: React.FC = () => {
  const { user } = useUser();
  return (
    <HeaderContainer>
      {user && (
        <Greeting>
          <h4>Welcome! {user.name}</h4>

          <StyledLink href="/api/auth/logout">
            Logout
            <FaUserCircle size={30} />
          </StyledLink>
        </Greeting>
      )}
    </HeaderContainer>
  );
};

export default Header;
