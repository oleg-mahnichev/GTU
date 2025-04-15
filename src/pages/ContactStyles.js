import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Textarea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-height: 120px;
`;

export const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0059c1;
  }
`;

export const Message = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: green;
`;

export const ContactLinks = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
