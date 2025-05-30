import { useTranslation } from "react-i18next";
import {
  HeroSection,
  HeroOverlay,
  Motto,
  OffersSection,
  OfferItem,
  StyledTable,
  TableHeader,
  TableBody,
  ContentWrapper,
  TableWrapper,
  WarningText, // 👈 добавили обёртку
} from "./HomeStyles";

import heroBg from "/src/assets/hero_fon1_J-min.jpg";

const Home = () => {
  const { t } = useTranslation("home");
  const offers = t("offers", { returnObjects: true });

  return (
    <>
      <HeroSection $bg={heroBg}>
        <HeroOverlay />
        <Motto>{t("motto")}</Motto>
      </HeroSection>

      <ContentWrapper>
        <h1>{t("title")}</h1>
        <p>{t("intro")}</p>
        <strong>{t("highlight")}</strong>
        <p>{t("example")}</p>
        <WarningText>{t("warning")}</WarningText>

        <h2>{t("tableTitle")}</h2>
        <TableWrapper>
          <StyledTable>
            <TableHeader>
              <tr>
                {t("tableHeaders", { returnObjects: true }).map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </TableHeader>
            <TableBody>
              {t("tableRows", { returnObjects: true }).map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              ))}
            </TableBody>
          </StyledTable>
        </TableWrapper>

        {t("tableNote") && (
          <p style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
            {t("tableNote")}
          </p>
        )}
      </ContentWrapper>

      <OffersSection>
        {offers.map((offer, index) => (
          <OfferItem key={index}>
            <summary>{offer.title}</summary>
            <p>{offer.description}</p>
          </OfferItem>
        ))}
      </OffersSection>
    </>
  );
};

export default Home;
