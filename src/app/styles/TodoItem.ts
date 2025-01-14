import styled from "styled-components";

const TodoItem = styled.li<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.$completed ? "#d4edda" : "white")};
`;

export default TodoItem;