// src/components/HeaderStyles.js
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Общий контейнер для шапки
export const HeaderContainer = styled.header`
  background-color: #1e3a8a;
  color: #fff;
  padding: 8px 16px; /* 8px и 16px */
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Адаптация для экранов 320px и меньше */
  @media (max-width: 320px) {
    flex-direction: column;
    padding: 8px;
  }
`;

// Ссылка для логотипа, оформленная как flex-контейнер
export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;

  @media (max-width: 320px) {
    margin-bottom: 8px;
    justify-content: center;
  }
`;

// Стилизуем изображение логотипа
export const LogoImage = styled.img`
  width: 100px;
  margin-right: 8px;

  @media (max-width: 320px) {
    width: 80px;
    margin-right: 4px;
  }
`;

// Оформляем навигационные ссылки
export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 16px; /* 16px вместо 1rem */
  transition: color 0.25s;
  margin: 0 5px;

  /* &:hover {
    color: #e0e0e0;
  } */

  &.active {
    font-weight: bold;
    border-bottom: 2px solid #fff;
    color:rgb(247, 240, 91);
  }

  @media (min-width: 320px) {
    font-size: 14px;
    margin: 0 3px;
  }
`;

// Контейнер для навигационных ссылок и переключателя языка
export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (min-width: 320px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }
`;
