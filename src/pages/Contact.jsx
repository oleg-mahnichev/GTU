import { useState } from "react";
import { useTranslation } from "react-i18next";
import viberIcon from "../img/viber.png";
import wechatIcon from "../img/wechat.png";
import signalIcon from "../img/signal.png";
import {
  Wrapper,
  Title,
  Subtitle,
  Form,
  Label,
  Input,
  Textarea,
  Button,
  Message,
  ContactLinks,
  ContactLink,
} from "./ContactStyles";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation("contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Wrapper>
      <Title>{t("title")}</Title>
      <Subtitle>{t("subtitle")}</Subtitle>

      <Form onSubmit={handleSubmit}>
        <Label>{t("nameLabel")}</Label>
        <Input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <Label>{t("emailLabel")}</Label>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Label>{t("messageLabel")}</Label>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <Button type="submit">{t("submitButton")}</Button>
      </Form>

      {status === "success" && <Message>{t("successMessage")}</Message>}
      {status === "error" && (
        <Message style={{ color: "red" }}>{t("errorMessage")}</Message>
      )}

      <p style={{ marginTop: "40px", fontWeight: "bold" }}>
        {t("directContacts")}
      </p>

      <ContactLinks>
        {/* 🇺🇦 Ukrainian number */}
        <ContactLink href="tel:+380671051820">
          <FaPhone />
          +38 067 105 18 20 (UA)
        </ContactLink>
        <ContactLink href="viber://chat?number=%2B380671051820">
          <img src={viberIcon} alt="Viber" width="24" height="24" />
          Viber (UA)
        </ContactLink>
        <ContactLink
          href="https://wa.me/380671051820"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          WhatsApp (UA)
        </ContactLink>
        <ContactLink
          href="https://t.me/your_telegram_username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane />
          Telegram (UA)
        </ContactLink>
        <ContactLink href="weixin://dl/chat?your_wechat_id">
          <img src={wechatIcon} alt="WeChat" width="24" height="24" />
          WeChat (UA)
        </ContactLink>
        <ContactLink href="sgnl://signal/u/+380671051820">
          <img src={signalIcon} alt="Signal" width="24" height="24" />
          Signal (UA)
        </ContactLink>

        {/* 🇩🇪 German number */}
        <ContactLink href="tel:+49">
          <FaPhone />
          +49 160 924 10 678 (DE)
        </ContactLink>
        <ContactLink
          href="https://wa.me/4916092410678"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          WhatsApp (DE)
        </ContactLink>

        {/* LinkedIn */}
        <ContactLink
          href="https://www.linkedin.com/in/oleg-makhnichev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </ContactLink>
      </ContactLinks>
    </Wrapper>
  );
}
