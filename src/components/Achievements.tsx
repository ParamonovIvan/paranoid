import { useMemo, useState } from "react";
import { Timeline, Typography, Tag, Flex, theme } from "antd";
import { createStyles, useResponsive } from "antd-style";
import { achievements } from "../data/achievements";
import { useTheme } from "../hooks/useTheme"; // Убедись, что путь правильный

const { Title, Text } = Typography;

const useStyles = createStyles(({ token, css }) => ({
  categoryTag: css`
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: ${token.colorPrimaryBg} !important;
      border-color: ${token.colorPrimaryBorder} !important;
      color: ${token.colorPrimary} !important;
    }
  `
}));

const parseDate = (date: string) => {
  const [d, m, y] = date.split(".").map(Number);
  return new Date(y, m - 1, d).getTime();
};

const Achievements = () => {
  const responsive = useResponsive();
  const { styles } = useStyles();
  const { token } = theme.useToken();
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortedAchievements = useMemo(() => {
    const sorted = [...achievements].sort((a, b) => parseDate(a.date) - parseDate(b.date));
    return sortOrder === "newest" ? sorted.reverse() : sorted;
  }, [sortOrder]);

  const getMedalColor = (medal?: string) => {
    switch (medal) {
      case "gold": return "gold";
      case "silver": return "gray";
      case "bronze": return "#CD7F32";
      case "special": return "orange";
      default: return "blue";
    }
  };

  const getMedalText = (medal?: string) => {
    switch (medal) {
      case "gold": return "🥇 Золото";
      case "silver": return "🥈 Серебро";
      case "bronze": return "🥉 Бронза";
      case "special": return "⭐ Спец. диплом";
      default: return "Участник";
    }
  };

  // Переменные цветов
  const titleColor = isDark ? token.colorText : "#1F1F1F";
  const textColor = isDark ? token.colorText : "#000000E0";
  const secondaryColor = isDark ? token.colorTextSecondary : "#00000073";

  return (
    <Flex vertical style={{ marginBottom: 16, cursor: "default" }}>
      <Title style={{
        fontSize: responsive.lg ? 30 : 24,
        color: titleColor,
        textAlign: "center",
        marginBottom: 30,
        textTransform: "uppercase"
      }}>
        Наши достижения
      </Title>

      <Flex justify="center" gap={responsive.md ? 16 : 10} style={{ marginBottom: 24 }}>
        {([
          { value: "newest", label: "Сначала новые" },
          { value: "oldest", label: "Сначала старые" }
        ] as const).map((option) => (
          <Tag
            key={option.value}
            color={sortOrder === option.value ? token.colorPrimary : "default"}
            onClick={() => setSortOrder(option.value)}
            className={sortOrder === option.value ? undefined : styles.categoryTag}
            style={{
              cursor: "pointer",
              margin: 2,
              padding: responsive.md ? "4px 8px" : "3px 6px",
              fontSize: responsive.md ? 14 : 12,
              // В темной теме у неактивного тега должен быть светлый текст
              color: sortOrder === option.value ? "#FFFFFF" : textColor,
              borderColor: sortOrder === option.value ? token.colorPrimary : token.colorBorder
            }}
          >
            {option.label}
          </Tag>
        ))}
      </Flex>

      <Timeline
        mode={responsive.md ? "alternate" : "left"}
        style={{ marginLeft: "-8px" }}
        items={sortedAchievements.map((achievement, index) => ({
          color: getMedalColor(achievement.medal),
          children: (
            <Flex vertical style={{ padding: 0 }}>
              <Flex
                align="center"
                gap={8}
                style={{
                  display: "flex",
                  justifyContent: responsive.md ?
                    (index % 2 === 0 ? "flex-start" : "flex-end") : "flex-start",
                  marginBottom: 8
                }}
              >
                <Text strong style={{
                  color: textColor,
                  fontSize: responsive.md ? 18 : 16
                }}>
                  {achievement.date}
                </Text>
                <Tag
                  color={getMedalColor(achievement.medal)}
                  style={{
                    fontSize: responsive.md ? 14 : 12,
                    margin: 0
                  }}
                >
                  {getMedalText(achievement.medal)}
                </Tag>
              </Flex>
              <Text strong style={{
                color: titleColor,
                display: "block",
                fontSize: responsive.md ? 16 : 14
              }}>
                {achievement.event}
              </Text>
              <Text style={{
                color: textColor,
                display: "block",
                fontSize: responsive.md ? 14 : 13,
                lineHeight: 1.4
              }}>
                {achievement.result}
              </Text>
              <Text type="secondary" style={{
                display: "block",
                color: secondaryColor,
                fontSize: responsive.md ? 13 : 12
              }}>
                {achievement.location}
              </Text>
            </Flex>
          ),
        }))}
      />
    </Flex>
  );
};

export default Achievements;