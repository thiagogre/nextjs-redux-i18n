import styled from 'styled-components'

export const Container = styled.div<{ props: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ props }) =>
    props
      ? props => props.theme.colors.background.footer
      : props => props.theme.colors.background.header};
  color: ${props => props.theme.colors.text.white};
  height: 100px;
  width: 100%;
`
