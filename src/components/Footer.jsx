// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white text-center py-4 mt-8">
//       <p className="text-sm">
//         &copy; 2025 Global Trade Ukraine. All rights reserved.
//       </p>
//     </footer>
//   );
// }
// src/components/Footer.jsx

import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1e3a8a; /* тот же цвет, что и у Header */
  color: #fff;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 Global Trade Ukraine. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
