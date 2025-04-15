// Pricing.jsx
import { useTranslation } from "react-i18next";
import {
  PricingWrapper,
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

const Pricing = () => {
  const { t } = useTranslation("pricing");
  const plans = t("plans", { returnObjects: true });

  return (
    <PricingWrapper>
      <Title>{t("title")}</Title>
      <Subtitle>{t("subtitle")}</Subtitle>
      <CardsContainer>
        {plans.map((plan, index) => (
          <Card key={index} highlight={plan.highlight}>
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
            <ActionButton highlight={plan.highlight}>
              {plan.button}
            </ActionButton>
          </Card>
        ))}
      </CardsContainer>
    </PricingWrapper>
  );
};

export default Pricing;
