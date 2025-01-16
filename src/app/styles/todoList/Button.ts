import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: #ffda68;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color:  #ade367
  }
`;

export default Button;
