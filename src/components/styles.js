import styled from 'styled-components'

export const Button = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #00c3ff;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 196, 255, 0.9) 0px 13px 19px -6px;
  transition: 0.5s;
  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  &:hover {
    box-shadow: 0px 0px 17px 0px rgba(0, 196, 255, 0.36);
    transition: 0.5s;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 380px) {
    flex-direction: column;
  }
`