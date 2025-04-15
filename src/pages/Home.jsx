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
} from "./HomeStyles";

const Home = () => {
  const { t } = useTranslation("home");
  const offers = t("offers", { returnObjects: true });

  return (
    <>
      <HeroSection>
        <HeroOverlay />
        <Motto>{t("motto")}</Motto>
      </HeroSection>

      <ContentWrapper>
        <h1>{t("title")}</h1>
        <p>{t("intro")}</p>
        <strong>{t("highlight")}</strong>
        <p>{t("example")}</p>
        <p style={{ color: "red" }}>{t("warning")}</p>

        <h2>{t("tableTitle")}</h2>
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
