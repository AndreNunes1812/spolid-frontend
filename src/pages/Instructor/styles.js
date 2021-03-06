import { darken } from 'polished';
import styled from 'styled-components';

import themes from '~/styles/themes/light';

export const Container = styled.div`
  max-width: 960px;
  background: ${(props) => props.theme.theme.box};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin: 45px auto;
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    max-width: 700px;
  }

  @media (max-width: 650px) {
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 340px) {
    max-width: 280px;
  }

  .text {
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px 0;
    float: left;

    @media (max-width: 650px) {
      width: 100%;
      margin-left: 0px;
      padding: 20px 0;
    }

    svg {
      color: ${(props) => props.theme.theme.h1};
      margin-left: 15px;
    }

    h1 {
      margin: 0 30px 0 0;
      font-weight: 400;
      font-size: 30px;
      float: right;
      color: ${(props) => props.theme.theme.h1};

      @media (max-width: 650px) {
        font-size: 20px;
        margin-right: 0px;
      }

      @media (max-width: 350px) {
        font-size: 15px;
        margin-right: 0px;
      }
    }
  }

  a {
    min-width: 290px;
    color: ${(props) => props.theme.theme.button.textColor};
    background-color: ${(props) => props.theme.theme.button.background};
    height: 60px;
    border: 1px solid transparent;
    padding: 20px 12px;
    font-size: 16px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, `${themes.button.background}`)};
    }
    @media (max-width: 340px) {
      min-width: 0px;
    }
  }
`;
