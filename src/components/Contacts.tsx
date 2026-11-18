import React, { type CSSProperties } from "react";
import { Flex, Typography, theme } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { FaInstagram, FaVk, FaTelegram } from "react-icons/fa";
import { useResponsive } from "antd-style";
import { useTheme } from "../hooks/useTheme";

const { Link } = Typography;

type IconComponent = React.ComponentType<{ style?: CSSProperties }>;

export interface contactsItem {
  key: string;
  href: string;
  icon: IconComponent;
}

const Contacts = () => {
  const responsive = useResponsive();
  const { token } = theme.useToken();
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const iconStyle = {
    fontSize: responsive.md ? 24 : 20,
    color: isDark ? token.colorTextSecondary : "#00000073",
    transition: "color 0.2s ease"
  };

  return (
    <Flex
      justify="center"
      align="center"
      gap={responsive.md ? 24 : 16}
      wrap="wrap"
      style={{ marginBottom: 16 }}
    >
      <Link
        href="https://t.me/paranoid_brewery"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit" }}
      >
        <FaTelegram style={iconStyle}/>
      </Link>

      <Link
        href="https://instagram.com/paranoid_brewery/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit" }}
      >
        <FaInstagram style={iconStyle}/>
      </Link>

      <Link
        href="https://vk.ru/paranoid_brewery"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit" }}
      >
        <FaVk style={iconStyle}/>
      </Link>

      <Link
        href="tel:+79226800484"
        style={{ color: "inherit" }}
      >
        <PhoneOutlined style={iconStyle}/>
      </Link>

      <Link
        href="mailto:par-ivan@mail.ru"
        style={{ color: "inherit" }}
      >
        <MailOutlined style={iconStyle}/>
      </Link>
    </Flex>
  );
};

export default Contacts;