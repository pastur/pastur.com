import styled from 'styled-components';

const Button = styled.a`
  color: ${props => (props.primary ? 'black' : 'white')};
  background-color: ${props => (props.primary ? 'white' : 'transparent')};
  border: 1px solid white;
  border-radius: 0.4rem;
  display: inline-block;
  line-height: 1;
  padding: 1em 1.5em;
  text-shadow: none;
  transition-property: transform;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
  will-change: transform;

  :hover {
    background-color: ${props =>
      props.primary ? 'rgb(255, 255, 255, .9)' : 'rgba(255, 255, 255, .1)'};
  }

  :active {
    transform: scale(0.99) translateY(-1px);
  }
`;

export default Button;
