// src/components/LanguageSwitcherStyles.js
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const LangButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid #6c757d;
  background: transparent;
  border-radius: 0.25rem;
  color: #6c757d;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 110%;
  right: 0;
  margin: 0;
  padding: 0.5rem 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  list-style: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  z-index: 1000;
  min-width: 100%;
`;

export const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #212529;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const FlagWrapper = styled.span`
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
`;

export const StyledFlagIcon = styled(ReactCountryFlag)`
  width: 1.5em;
  height: 1.5em;
`;
