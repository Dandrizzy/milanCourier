import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: 5px;
  transition: all 0.2s;

  /* &:hover {
    background-color:  rgb(29 78 216);
  } */

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #f9fafb;
  }
`;

export default ButtonIcon;
