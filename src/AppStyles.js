// src/AppStyles.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimatedPageWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100%;
  padding: 0;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  /* padding: 15px; */
`;
