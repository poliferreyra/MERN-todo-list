import styled from "styled-components";
import Link from "next/link";
import { HeaderContainer } from "app/styles/header/HeaderContainer";
import { NavLink } from "app/styles/header/NavLink";
import { Nav } from "app/styles/header/Nav";

// Logo
export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>MyLogo</Logo>
      {/* TODO chequear errores de etiqueta a de HTML - In HTML, <a> cannot be a descendant of <a>.
This will cause a hydration error. */}
      <Nav>
        <Link href="/login" passHref>
          <NavLink>Login</NavLink>
        </Link>
        <Link href="/register" passHref>
          <NavLink>Register</NavLink>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
