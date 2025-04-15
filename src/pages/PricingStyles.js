// PricingStyles.js
import styled from "styled-components";

export const PricingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px;
  background-color: #f8f9fa;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 48px;
  text-align: center;
  max-width: 800px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`;

export const Card = styled.div`
  background: ${({ highlight }) => (highlight ? "#002d72" : "#fff")};
  color: ${({ highlight }) => (highlight ? "#fff" : "#000")};
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const PlanName = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 24px;

  li {
    margin-bottom: 8px;
    position: relative;
    padding-left: 20px;

    &::before {
      content: "✔";
      position: absolute;
      left: 0;
      color: ${({ $highlight }) => ($highlight ? "#0f0" : "#007bff")};
    }
  }
`;

export const ActionButton = styled.button`
  background: ${({ highlight }) => (highlight ? "#fff" : "#007bff")};
  color: ${({ highlight }) => (highlight ? "#002d72" : "#fff")};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;
