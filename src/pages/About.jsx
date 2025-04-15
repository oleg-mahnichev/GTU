import { useTranslation } from "react-i18next";
import { Wrapper, TextBlock, Title, Paragraph, Photo } from "./AboutStyles";
import b8 from "../assets/b8.jpg";

export default function About() {
  const { t } = useTranslation("about");
  const sections = t("sections", { returnObjects: true });

  return (
    <Wrapper>
      <TextBlock>
        <Title>{t("title")}</Title>
        {sections.map((section, index) => (
          <Paragraph key={index}>{section.text}</Paragraph>
        ))}
      </TextBlock>
      <Photo src={b8} alt={t("photoAlt")} />
    </Wrapper>
  );
}
