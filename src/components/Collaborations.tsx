import { useState } from "react";
import { Typography, Flex, Row, Col, Card, Tag, Empty, Image, theme } from "antd";
import { createStyles, useResponsive } from "antd-style";
import { collaborationsData } from "../collaborations";
import { useTheme } from "../hooks/useTheme";

const { Title, Paragraph, Text } = Typography;

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

const Collaborations = () => {
  const responsive = useResponsive();
  const { styles } = useStyles();
  const { token } = theme.useToken();
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const [activeTab, setActiveTab] = useState<"collab" | "contract">("collab");

  const filteredData = collaborationsData.filter((item) => item.type === activeTab);

  // Переменные цветов
  const titleColor = isDark ? token.colorText : "#1F1F1F";
  const textColor = isDark ? token.colorText : "#000000E0";
  const secondaryColor = isDark ? token.colorTextSecondary : "#00000073";

  return (
    <Flex vertical style={{ marginBottom: responsive.md ? 64 : 56, marginTop: 16, cursor: "default" }}>
      <Title style={{
        fontSize: responsive.lg ? 30 : 24,
        color: titleColor,
        textAlign: "center",
        marginBottom: 16,
        textTransform: "uppercase"
      }}>
        {activeTab === "collab" ? "Коллаборации" : "Контрактное пивоварение"}
      </Title>

      <Paragraph style={{
        color: textColor,
        textAlign: "center",
        fontSize: responsive.md ? 16 : 14,
        maxWidth: 800,
        margin: "0 auto 24px auto",
        padding: "0 16px"
      }}>
        {activeTab === "collab"
          ? "Общение и знакомства с другими пивоварами часто приводит к совместным варкам. Это обмен опытом и экспериментами."
          : "С 2019 года — контрактные варки для баров и магазинов, которые хотят эксклюзивно представлять пиво в продаже."
        }
      </Paragraph>

      <Flex justify="center" gap={responsive.md ? 16 : 10} style={{ marginBottom: 32 }}>
        {([
          { value: "collab", label: "Коллаборации" },
          { value: "contract", label: "Контракты" }
        ] as const).map((option) => (
          <Tag
            key={option.value}
            color={activeTab === option.value ? token.colorPrimary : "default"}
            onClick={() => setActiveTab(option.value)}
            className={activeTab === option.value ? undefined : styles.categoryTag}
            style={{
              cursor: "pointer",
              margin: 0,
              padding: responsive.md ? "4px 12px" : "3px 8px",
              fontSize: responsive.md ? 14 : 12,
              color: activeTab === option.value ? "#FFFFFF" : textColor,
              borderColor: activeTab === option.value ? token.colorPrimary : token.colorBorder
            }}
          >
            {option.label}
          </Tag>
        ))}
      </Flex>

      <Row gutter={[16, 16]}>
        {filteredData.map((item, index) => (
          <Col xs={24} sm={12} md={12} lg={8} key={index}>
            <Card
              style={{
                height: "100%",
                borderRadius: 8,
                boxShadow: isDark ? token.boxShadowSecondary : "0px 4px 14px 0px #00000014",
                textAlign: "center"
              }}
              styles={{ body: { padding: responsive.md ? 24 : 16, display: "flex", flexDirection: "column", height: "100%" } }}
            >
              <Flex
                justify="center"
                align="center"
                style={{
                  height: responsive.md ? 100 : 80,
                  marginBottom: responsive.md ? 16 : 12,
                  backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "#1F1F1F",
                  border: "none",
                  borderRadius: 8,
                  padding: 8,
                  overflow: "hidden"
                }}
              >
                {item.logoSrc ? (
                  <Image
                    src={item.logoSrc}
                    alt={item.partner}
                    preview={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: 8
                    }}
                    wrapperStyle={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%"
                    }}
                  />
                ) : (
                  <Text strong style={{ fontSize: responsive.md ? 18 : 16, color: isDark ? token.colorText : "#FFFFFF" }}>
                    {item.partner}
                  </Text>
                )}
              </Flex>

              <Text strong style={{
                display: "block",
                color: isDark ? token.colorText : "#1F1F1F",
                fontSize: responsive.md ? 18 : 16,
                marginBottom: 12,
                flex: 1
              }}>
                {item.partner}
              </Text>

              <Text strong style={{
                display: "block",
                color: isDark ? token.colorText : "#1F1F1F",
                fontSize: responsive.md ? 18 : 16,
                marginBottom: 12,
                flex: 1
              }}>
                {item.beerName}
              </Text>

              <Flex vertical gap={4}>
                <Text style={{ fontSize: responsive.md ? 15 : 14, color: textColor }}>
                  <Text style={{ color: secondaryColor }}>Объем: </Text>
                  {item.volume}
                </Text>
                <Text style={{ fontSize: responsive.md ? 15 : 14, color: textColor }}>
                  <Text style={{ color: secondaryColor }}>Место: </Text>
                  {item.location}
                </Text>
                <Text style={{ fontSize: responsive.md ? 15 : 14, color: textColor }}>
                  <Text style={{ color: secondaryColor }}>Дата: </Text>
                  {item.date}
                </Text>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredData.length === 0 && (
        <Empty description="Пока нет данных" style={{ marginTop: 48 }}/>
      )}
    </Flex>
  );
};

export default Collaborations;