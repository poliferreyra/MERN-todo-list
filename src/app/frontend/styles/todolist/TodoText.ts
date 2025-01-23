import styled from "styled-components";


const TodoText = styled.span<{ $completed: boolean }>`
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
  flex: 1;
  margin-right: 10px;

`;

export default TodoText;