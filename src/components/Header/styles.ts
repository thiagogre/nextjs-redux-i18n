import styled from 'styled-components'

export const Container = styled.div<{ props: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ props }) =>
    props
      ? props => props.theme.colors.background.header
      : props => props.theme.colors.background.footer};
  color: ${props => props.theme.colors.text.white};
  height: 100px;
  width: 100%;
  a {
    margin-left: 20px;
    text-decoration: none;
    color: ${props => props.theme.colors.text.white};
  }
  button {
    margin-left: 20px;
  }
`
