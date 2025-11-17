import { Timeline, Typography, Tag, Flex } from "antd";
import { useResponsive } from "antd-style";
import { achievements } from "../achievements";

const { Title, Text } = Typography;

const Achievements = () => {
  const responsive = useResponsive();

  const getMedalColor = (medal?: string) => {
    switch (medal) {
      case "gold": return "#FFD700";
      case "silver": return "#C0C0C0";
      case "bronze": return "#CD7F32";
      case "special": return "#8B4513";
      default: return undefined;
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
    <Flex vertical style={{ marginBottom: 16 }}>
      <Title style={{
        fontSize: responsive.lg ? 30 : 24,
        color: "#DAA520",
        textAlign: "center",
        marginBottom: 30,
        textTransform: "uppercase"
      }}>
        Наши достижения
      </Title>

      <Timeline
        mode={responsive.md ? "alternate" : "left"}
        items={achievements.map((achievement, index) => ({
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
                  color: "#F5F5F5",
                  fontSize: responsive.md ? 18 : 16
                }}>
                  {achievement.date}
                </Text>
                <Tag
                  color={getMedalColor(achievement.medal)}
                  style={{
                    color: (achievement.medal === "gold" || achievement.medal === "silver")
                      ? "#000000e0"
                      : undefined,
                    fontSize: responsive.md ? 14 : 12,
                    margin: 0
                  }}
                >
                  {getMedalText(achievement.medal)}
                </Tag>
              </Flex>
              <Text strong style={{
                color: "#DAA520",
                display: "block",
                fontSize: responsive.md ? 16 : 14
              }}>
                {achievement.event}
              </Text>
              <Text style={{
                color: "#F5F5F5",
                display: "block",
                fontSize: responsive.md ? 14 : 13,
                lineHeight: 1.4
              }}>
                {achievement.result}
              </Text>
              <Text type="secondary" style={{
                display: "block",
                color: "#A0A0A0",
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