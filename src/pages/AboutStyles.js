import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const TextBlock = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
`;

export const Photo = styled.img`
  width: 200px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;
