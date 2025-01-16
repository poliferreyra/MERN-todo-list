import styled from "styled-components";
import { HeaderContainer } from "app/styles/header/HeaderContainer";
import { Nav } from "app/styles/header/Nav";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/redux/store/store";
import { logout } from "app/redux/store/userSlice";
import { FaUserCircle } from "react-icons/fa";

// Logo
export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Estilo para el saludo
const Greeting = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  span {
    font-size: 14px;
    color: gray;
  }
`;

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, email } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogout = () => {
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
      dispatch(logout());
    }
  };

  return (
    <HeaderContainer>
      <Logo>MyLogo</Logo>
      <Nav>
        {isAuthenticated && (
          <Greeting>
            <div>Hola, {email?.split("@")[0]}!</div>

            {/* Botón de logout */}
            <div onClick={handleLogout}>
              <FaUserCircle size={30} />
            </div>
          </Greeting>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
