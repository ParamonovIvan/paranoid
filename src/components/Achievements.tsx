import { Timeline, Typography, Tag, Flex } from "antd";
import { useResponsive } from "antd-style";
import { achievements } from "../achievements";

const { Title, Text } = Typography;

const Achievements = () => {
  const responsive = useResponsive();

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