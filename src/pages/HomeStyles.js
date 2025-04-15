import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: 400px;
  background-image: url("/src/assets/hero_fon_J-min.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 32px;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Motto = styled.h2`
  position: relative;
  z-index: 1;
  font-size: 32px;
  color: white;
  text-align: center;
`;
export const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 0 24px;
`;
export const OffersSection = styled.section`
  padding: 32px;
  background: #ffffff;
  border-radius: 16px;
  margin-top: 48px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

export const OfferItem = styled.details`
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  cursor: pointer;

  summary {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    margin-top: 8px;
    font-size: 16px;
    color: #555555;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;
  font-size: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background-color: #f4f4f4;

  th {
    padding: 16px;
    border: 1px solid #ddd;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #fafafa;
  }

  td {
    padding: 14px;
    border: 1px solid #ddd;
    text-align: center;
    white-space: nowrap;
  }
`;
