import { useTranslation } from "react-i18next";
import {
  PricingWrapper as Wrapper,
  Title,
  Subtitle,
  CardsContainer,
  Card,
  PlanName,
  Price,
  Description,
  FeaturesList,
  ActionButton,
} from "./PricingStyles";
import { motion, AnimatePresence } from "framer-motion";

export default function Pricing() {
  const { t, i18n } = useTranslation("pricing");
  const plans = t("plans", { returnObjects: true });

  return (
    <Wrapper>
      <Title>{t("title")}</Title>
      <Subtitle>{t("subtitle")}</Subtitle>

      <CardsContainer>
        <AnimatePresence mode="wait">
          {plans.map((plan) => (
            <motion.div
              key={`${i18n.language}-${plan.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card $highlight={plan.highlight}>
                <div>
                  <PlanName>{plan.name}</PlanName>
                  <Price>{plan.price}</Price>
                  <Description>{plan.description}</Description>
                  <FeaturesList $highlight={plan.highlight}>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </FeaturesList>
                </div>
                <ActionButton $highlight={plan.highlight}>
                  {plan.button}
                </ActionButton>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardsContainer>
    </Wrapper>
  );
}
