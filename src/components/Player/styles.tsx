import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 3rem 4rem;
    width: 34.5rem;
    height: 100vh;
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    header {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    strong {
      font-family: Lexend, sans-serif;
      font-weight: 600;
    }
  `}
`

export const Footer = styled.footer`
  ${({ empty }) => css`
    align-self: stretch;

    opacity: ${empty ? 0.5 : 1};
  `}
`

export const EmptyPlayer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 30rem;
    border: 1.5px dashed ${theme.colors.primaryDark};
    background-color: ${theme.colors.primaryLight};
    border-radius: 10px;
    font-size: 1.6rem;
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }
`

export const Slider = styled.footer`
  flex: 1;
`

export const EmptySlider = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 4px;
    background: ${theme.colors.white};
    border-radius: 2px;
  `}
`

export const Buttons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;

    button {
      background: transparent;
      border: 0;
      font-size: 0;
      cursor: pointer;
      outline: none;

      &.playButton {
        width: 5rem;
        height: 5rem;
        border-radius: 3rem;
        background-color: ${theme.colors.primaryLight};
      }
    }
  `}
`
