import styled from "styled-components";

const Button = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 10px;
  padding: 10px 15px;
  background-color: #ffda68;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ade367;
  }
/* Responsives Styles */
@media (max-width: 1440px) {
    padding: 15px 20px;
    font-size: 20px; 
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 15px; 
  }

  @media (max-width: 480px) {
    padding: 8px 10px; 
    font-size: 12px;
  }
`;

export default Button;
