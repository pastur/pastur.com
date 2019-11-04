import styled from 'styled-components'

const Button = styled.a`
  color: white;
  background-color: ${props =>
    props.primary ? 'rgb(0, 122, 255)' : 'transparent'};
  border: 1px solid;
  border-color: ${props => (props.primary ? 'rgb(0, 122, 255)' : 'white')};
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
      props.primary ? 'rgb(0, 122, 255, 0.8)' : 'rgba(255, 255, 255, .1)'};
  }

  @media (prefers-color-scheme: light) {
    color: ${props => (props.primary ? 'white' : '#333')};
    background-color: ${props =>
      props.primary ? 'rgb(0, 122, 255)' : 'transparent'};
    border-color: ${props => (props.primary ? 'rgb(0, 122, 255)' : '#333')};

    :hover {
      background-color: ${props =>
        props.primary ? 'rgb(0, 122, 255, 0.8)' : 'rgb(255, 255, 255, 0.8)'};
    }
  }

  :active {
    transform: scale(0.99) translateY(-1px);
  }
`

export default Button
