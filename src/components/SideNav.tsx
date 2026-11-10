import React, { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Flex, Typography } from "antd";
import { useResponsive } from "antd-style";
import {
  AppstoreOutlined,
  InfoCircleOutlined,
  TrophyOutlined,
  TeamOutlined
} from "@ant-design/icons";

const { Text } = Typography;

type IconComponent = React.ComponentType<{ style?: CSSProperties }>;

export interface NavItem {
  key: string;
  label: string;
  icon: IconComponent;
  href: string;
}

const showCollaborations = false;

const navItems: NavItem[] = [
  { key: "catalog", label: "Каталог", icon: AppstoreOutlined, href: "#catalog" },
  { key: "about", label: "О нас", icon: InfoCircleOutlined, href: "#about" },
  { key: "achievements", label: "Достижения", icon: TrophyOutlined, href: "#achievements" },
  ...(showCollaborations
    ? [{ key: "collaborations", label: "Коллаборации", icon: TeamOutlined, href: "#collaborations" }]
    : []),
];

const ACCENT = "#1677FF";
const INACTIVE = "#00000073";

const useWideScreen = (minWidth: number) => {
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    const onChange = () => setWide(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [minWidth]);

  return wide;
};

const SideNav = () => {
  const responsive = useResponsive();
  const wide = useWideScreen(1600);
  const [active, setActive] = useState<string>("catalog");

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
          top: 320,
          transform: "translateY(-50%)",
          zIndex: 999,
          background: "#FFF",
          border: "1px solid #E5E5E5",
          borderRadius: 16,
          padding: "16px 8px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
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
              style={{
                cursor: "pointer",
                width: 72,
                padding: "8px 4px",
                borderRadius: 12,
                background: isActive ? "#E6F4FF" : "transparent",
                transition: "background 0.2s, color 0.2s",
                userSelect: "none"
              }}
            >
              <Icon
                style={{
                  fontSize: 22,
                  color: isActive ? ACCENT : INACTIVE,
                  transition: "color 0.2s"
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: isActive ? ACCENT : INACTIVE,
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
      </Flex>
    );
  }

  return (
    <Flex
      justify="center"
      gap={responsive.md ? 48 : responsive.sm ? 24 : 16}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "#F5F5F5",
        borderBottom: "1px solid #D5D5D5",
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
            style={{
              cursor: "pointer",
              color: isActive ? ACCENT : INACTIVE,
              transition: "color 0.2s",
              userSelect: "none"
            }}
          >
            <Icon
              style={{
                fontSize: responsive.md ? 20 : 18,
                color: isActive ? ACCENT : INACTIVE,
              }}
            />
            <Text
              style={{
                fontSize: responsive.md ? 15 : 11,
                color: isActive ? ACCENT : INACTIVE,
                fontWeight: isActive ? 600 : 400,
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