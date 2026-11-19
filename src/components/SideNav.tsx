import React, { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Flex, Typography, theme } from "antd";
import { useResponsive, createStyles } from "antd-style";
import {
  AppstoreOutlined,
  InfoCircleOutlined,
  TrophyOutlined,
  TeamOutlined,
  HistoryOutlined
} from "@ant-design/icons";
import { useTheme } from "../hooks/useTheme";
import ThemeSwitcher from "./ThemeSwitcher";
import { useWideScreen } from "../hooks/useWideScreen.ts";

const { Text } = Typography;

type IconComponent = React.ComponentType<{ style?: CSSProperties }>;

export interface NavItem {
  key: string;
  label: string;
  icon: IconComponent;
  href: string;
}

const navItems: NavItem[] = [
  { key: "catalog", label: "Каталог", icon: AppstoreOutlined, href: "#catalog" },
  { key: "about", label: "О нас", icon: InfoCircleOutlined, href: "#about" },
  { key: "achievements", label: "Достижения", icon: TrophyOutlined, href: "#achievements" },
  { key: "collaborations", label: "Коллаборации", icon: TeamOutlined, href: "#collaborations" },
  { key: "archive", label: "Архив", icon: HistoryOutlined, href: "#archive" }
];

const ACCENT = "#1677FF";
const INACTIVE = "#00000073";

const useStyles = createStyles(({ token, css }) => ({
  navItem: css`
    transition: background 0.2s ease, color 0.2s ease;
    &:hover {
      background: ${token.colorPrimaryBg};
      color: ${token.colorPrimary} !important;
    }
    &:hover .anticon, &:hover .ant-typography {
      color: ${token.colorPrimary} !important;
    }
  `,
  navItemMobile: css`
    transition: color 0.2s ease;
    &:hover {
      color: ${token.colorPrimary} !important;
    }
    &:hover .anticon, &:hover .ant-typography {
      color: ${token.colorPrimary} !important;
    }
  `,
  active: css`
    background: ${token.colorPrimaryBg};
    color: ${token.colorPrimary} !important;
    .anticon, .ant-typography {
      color: ${token.colorPrimary} !important;
    }
  `,
  activeDark: css`
    background: ${token.colorPrimary};
    color: #FFFFFF !important;
    .anticon, .ant-typography {
      color: #FFFFFF !important;
    }
  `,
  hideTextOnTiny: css`
    --nav-gap: 12px;
    
    @media (min-width: 576px) {
      --nav-gap: 20px;
    }
    @media (min-width: 768px) {
      --nav-gap: 32px;
    }
    
    @media (max-width: 350px) {
      --nav-gap: 32px;

      .ant-typography {
        display: none !important;
      }
      .anticon {
        font-size: 22px !important;
      }
    }
  `
}));

const SideNav = () => {
  const [active, setActive] = useState<string>("catalog");

  const responsive = useResponsive();
  const wide = useWideScreen(1600);
  const { styles } = useStyles();
  const { token } = theme.useToken();
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const inactiveColor = isDark ? token.colorTextSecondary : INACTIVE;

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      let current = navItems[0].key;

      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          current = item.key;
        }
      }

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;
    const offset = wide ? 48 : 72;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (wide) {
    return (
      <Flex
        vertical
        gap={16}
        style={{
          position: "fixed",
          left: 16,
          top: 410,
          transform: "translateY(-50%)",
          zIndex: 999,
          background: token.colorBgContainer,
          border: `1px solid ${token.colorBorderSecondary}`,
          borderRadius: 16,
          padding: "16px 8px",
          boxShadow: token.boxShadowSecondary,
          cursor: "default"
        }}
      >
        {navItems.map((item) => {
          const isActive = active === item.key;
          const Icon = item.icon;
          return (
            <Flex
              key={item.key}
              vertical
              align="center"
              gap={4}
              onClick={(e) => handleClick(e, item.href)}
              className={isActive ? (isDark ? styles.activeDark : styles.active) : styles.navItem}
              style={{
                cursor: "pointer",
                width: 72,
                padding: "8px 4px",
                borderRadius: 12,
                userSelect: "none"
              }}
            >
              <Icon
                style={{
                  fontSize: 22,
                  color: isActive ? ACCENT : inactiveColor,
                  transition: "color 0.2s"
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: isActive ? ACCENT : inactiveColor,
                  fontWeight: isActive ? 600 : 400,
                  textAlign: "center",
                  lineHeight: 1.2
                }}
              >
                {item.label}
              </Text>
            </Flex>
          );
        })}
        <Flex justify="center" style={{
          borderTop: `1px solid ${token.colorBorderSecondary}`,
          paddingTop: 8,
          marginTop: 8
        }}>
          <ThemeSwitcher/>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      justify="center"
      className={styles.hideTextOnTiny}
      style={{
        gap: "var(--nav-gap)",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: token.colorBgLayout,
        borderBottom: `1px solid ${token.colorBorderSecondary}`,
        padding: responsive.md ? "12px 24px" : "8px 12px",
        cursor: "default"
      }}
    >
      {navItems.map((item) => {
        const isActive = active === item.key;
        const Icon = item.icon;
        return (
          <Flex
            key={item.key}
            vertical={!responsive.md}
            align="center"
            gap={responsive.md ? 8 : 2}
            onClick={(e) => handleClick(e, item.href)}
            className={styles.navItemMobile}
            style={{
              cursor: "pointer",
              color: isActive ? ACCENT : inactiveColor,
              userSelect: "none"
            }}
          >
            <Icon
              style={{
                fontSize: responsive.md ? 20 : 18,
                color: isActive ? ACCENT : inactiveColor
              }}
            />
            <Text
              style={{
                fontSize: responsive.md ? 15 : 11,
                color: isActive ? ACCENT : inactiveColor,
                fontWeight: isActive ? 600 : 400
              }}
            >
              {item.label}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default SideNav;