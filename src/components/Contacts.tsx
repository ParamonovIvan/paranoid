import React, { type CSSProperties } from "react";
import { Flex, Typography, theme } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { FaInstagram, FaVk, FaTelegram } from "react-icons/fa";
import { createStyles, useResponsive } from "antd-style";
import { useTheme } from "../hooks/useTheme";

const { Link } = Typography;

type IconComponent = React.ComponentType<{ style?: CSSProperties }>;

interface ContactsItem {
  key: string;
  href: string;
  icon: IconComponent;
  isExternal?: boolean;
}

const contactsItem: ContactsItem[] = [
  { key: "telegram", href: "https://t.me/paranoid_brewery", icon: FaTelegram, isExternal: true },
  { key: "instagram", href: "https://instagram.com/paranoid_brewery/", icon: FaInstagram, isExternal: true },
  { key: "vk", href: "https://vk.ru/paranoid_brewery", icon: FaVk, isExternal: true },
  { key: "tel", href: "tel:+79226800484", icon: PhoneOutlined },
  { key: "mail", href: "mailto:par-ivan@mail.ru", icon: MailOutlined }
];

const useStyles = createStyles(({ token, css }) => ({
  contactLink: css`
    color: inherit;
    transition: color 0.2s ease;
    &:hover {
      color: ${token.colorPrimary} !important;
    }
    &:hover .anticon, &:hover svg {
      color: ${token.colorPrimary} !important;
    }
  `
}));

const Contacts = () => {
  const responsive = useResponsive();
  const { token } = theme.useToken();
  const { mode } = useTheme();
  const { styles } = useStyles();
  const isDark = mode === "dark";

  const iconStyle = {
    fontSize: 28,
    color: isDark ? token.colorTextSecondary : "#00000073",
    transition: "color 0.2s ease"
  };

  return (
    <Flex
      justify="center"
      align="center"
      gap={responsive.md ? 24 : 20}
      wrap="wrap"
      style={{ marginBottom: 16 }}
    >
      {contactsItem.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.key}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className={styles.contactLink}
          >
            <Icon style={iconStyle}/>
          </Link>
        );
      })}
    </Flex>
  );
};

export default Contacts;