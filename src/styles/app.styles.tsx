import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    background-color: ${theme.colors.backgroundSecondary};

    main {
      flex: 1;
    }
  `}
`
