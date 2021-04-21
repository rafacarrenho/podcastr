import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
    height: 10px;
    border-radius: 0;
    position: absolute;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    // margin-top: 4px;
    // box-shadow: inset 0 0 50px var(--grey-weak) !important;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #c9c9c9;
    border-radius: 10px;
    transition: 0.3s ease;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`

export const LastestEpisodes = styled.section`
  ${({ theme }) => css`
    ul {
      list-style: none;
      display: grid;
      gap: 1.5rem;

      @media screen and (min-width: 1649px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    li {
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.details};
      padding: 1.25rem;
      border-radius: 1.5rem;
      position: relative;
      display: flex;
      align-items: center;
      overflow: hidden;

      img {
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;
      }

      .episodeDetails {
        flex: 1;
        margin-left: 1rem;

        a {
          display: block;
          color: ${theme.colors.text};
          font-family: Lexend, sans-serif;
          font-weight: 600;
          text-decoration: none;
          line-height: 1.4rem;
          font-size: 0.5rem;

          &:hover {
            text-decoration: underline;
          }
        }

        p {
          font-size: 0.875rem;
          margin-top: 0.5rem;
          max-width: 70%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 0.875rem;

          &:last-child {
            margin-left: 0.5rem;
            padding-left: 0.5rem;
            position: relative;

            &::before {
              content: '';
              width: 4px;
              height: 4px;
              border-radius: 2px;
              background: #ddd;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }

      button {
        position: absolute;
        right: 2rem;
        bottom: 2rem;
        width: 2.5rem;
        height: 2.5rem;
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.details};
        border-radius: 0.675rem;
        cursor: pointer;
        outline: 0;
        font-size: 0;
        transition: filter 0.2s;

        img {
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  `}
`

export const EpisodesDetails = styled.section`
  ${({ theme }) => css`
    flex: 1;
    margin-left: 1rem;

    a {
      display: block;
      color: ${theme.colors.greyDark};
      font-family: Lexand, sans-serif;
      font-weight: 600;
      text-decoration: none;
      line-height: 1.4rem;

      &:hover {
        color: ${theme.colors.primary};
      }
    }

    p {
      font-size: 0.875rem;
      margin-top: 0.5rem;
      max-width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 0.875rem;

      &:last-child {
        margin-left: 0.5rem;
        padding-left: 0.5rem;
        position: relative;

        &::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background: #ddd;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  `}
`

export const AllEpisodes = styled.section`
  ${({ theme }) => css`
    padding-bottom: 2rem;

    table {
      width: 100%;

      td,
      td {
        padding: 0.75rem 1rem 0.75rem 0;
        border-bottom: 1px solid ${theme.colors.details};
      }

      th {
        color: var(--gray-200);
        text-transform: uppercase;
        font: 500 0.75rem Lexend, sans-serif;
        text-align: left;
      }

      td {
        font-size: 0.875rem;

        img {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
        }

        a {
          color: ${theme.colors.text};
          font-family: Lexend, sans-serif;
          font-weight: 600;
          text-decoration: none;
          line-height: 1.4rem;
          font-size: 0.8rem;

          &:hover {
            text-decoration: underline;
          }
        }

        button {
          width: 2rem;
          height: 2rem;
          background: ${theme.colors.white};
          border: 1px solid ${theme.colors.details};
          border-radius: 0.5rem;
          font-size: 0;
          cursor: pointer;
          outline: 0;
          transition: filter 0.2s;

          img {
            width: 1.25rem;
            height: 1.25rem;
          }

          &:hover {
            filter: brightness(0.95);
          }
        }
      }
    }
  `}
`
