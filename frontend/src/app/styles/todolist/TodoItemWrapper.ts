import styled from "styled-components";

const TodoItemWrapper = styled.li<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #355fb5 ;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.$completed ? "#ffda68  " : "#ffffff"};
`;

export default TodoItemWrapper;
