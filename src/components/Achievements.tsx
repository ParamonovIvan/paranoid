import { useMemo, useState } from "react";
import { Timeline, Typography, Tag, Flex } from "antd";
import { createStyles, useResponsive } from "antd-style";
import { achievements } from "../achievements";

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

  return (
    <Flex vertical style={{ marginBottom: 16, cursor: "default" }}>
      <Title style={{
        fontSize: responsive.lg ? 30 : 24,
        color: "#1f1f1f",
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
            color={sortOrder === option.value ? "#1677FF" : "default"}
            onClick={() => setSortOrder(option.value)}
            className={sortOrder === option.value ? undefined : styles.categoryTag}
            style={{
              cursor: "pointer",
              margin: 2,
              padding: responsive.md ? "4px 8px" : "3px 6px",
              fontSize: responsive.md ? 14 : 12
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
                  color: "#000000e0",
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
                color: "#1f1f1f",
                display: "block",
                fontSize: responsive.md ? 16 : 14
              }}>
                {achievement.event}
              </Text>
              <Text style={{
                color: "#000000e0",
                display: "block",
                fontSize: responsive.md ? 14 : 13,
                lineHeight: 1.4
              }}>
                {achievement.result}
              </Text>
              <Text type="secondary" style={{
                display: "block",
                color: "#00000073",
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