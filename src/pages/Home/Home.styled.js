import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles/theme';

export const HomeSection = styled.section`
  padding: 36px 0;
  background-color: ${theme.colors.white};
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 120px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-top: 20px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  h1 {
    font-size: 24px;
    font-weight: 800;
  }
  p {
    line-height: 1.2;
  }
  img {
    display: none;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 42px;
      font-weight: 800;
    }
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    gap: 100px;
    div {
      display: flex;
      flex-direction: column;
      gap: ${theme.gap[3]}px;
    }
    h1 {
      font-size: 56px;
    }
    img {
      display: block;
      width: 540px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 60px;
  margin: 0 auto;
  color: ${theme.colors.white};
  background-color: ${theme.colors.second};
  border-radius: 10px;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${theme.colors.hover};
    background-color: ${theme.colors.hover};
  }
  @media screen and (min-width: 1200px) {
    margin: 0;
  }
`;
