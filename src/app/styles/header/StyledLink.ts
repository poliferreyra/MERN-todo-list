import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  margin-top: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #355fb5;
  gap: 8px;

  &:hover {
    color: #ade367;
  }
`;

