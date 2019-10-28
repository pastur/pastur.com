import styled from "styled-components";

const Button = styled.a`
  color: ${props => (props.primary ? "dodgerblue" : "white")};
  background-color: ${props => (props.primary ? "white" : "transparent")};
  border: 1px solid white;
  border-radius: 0.4rem;
  display: inline-block;
  line-height: 1;
  padding: 1em 1.5em;
  transition-property: transform;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
  will-change: transform;

  :hover {
    transform: scale(1.02) translateY(-1px);
  }

  :active {
    transform: scale(0.98) translateY(-2px);
  }
`;

export default Button;
