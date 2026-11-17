import { useState, useMemo } from "react";
import { Typography, Flex, Row, Col, Card, Tag, Image, theme } from "antd";
import { createStyles, useResponsive } from "antd-style";
import { archiveData, type ArchiveSeries } from "../archive";
import { useTheme } from "../hooks/useTheme";
import { HistoryOutlined, StarOutlined, FireOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const useStyles = createStyles(({ token, css }) => ({
  seriesTab: css`
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: ${token.colorPrimaryBg} !important;
      border-color: ${token.colorPrimaryBorder} !important;
      color: ${token.colorPrimary} !important;
    }
  `
}));

const seriesConfig = {
  "2020": { label: "2020", icon: <HistoryOutlined/> },
  "2021": { label: "2021", icon: <HistoryOutlined/> },
  "2022": { label: "2022", icon: <HistoryOutlined/> },
  defo: { label: "Defo", icon: <StarOutlined/> },
  sauces: { label: "Соусы", icon: <FireOutlined/> }
};

const Archive = () => {
  const responsive = useResponsive();
  const { styles } = useStyles();
  const { token } = theme.useToken();
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const [selectedSeries, setSelectedSeries] = useState<ArchiveSeries>("2020");

  const filteredData = useMemo(() => {
    return archiveData.filter(item => item.series === selectedSeries);
  }, [selectedSeries]);

  const titleColor = isDark ? token.colorText : "#1F1F1F";
  const textColor = isDark ? token.colorText : "#000000E0";

  return (
    <Flex vertical style={{ marginBottom: responsive.md ? 64 : 56, marginTop: 32, cursor: "default" }}>
      <Title style={{
        fontSize: responsive.lg ? 30 : 24,
        color: titleColor,
        textAlign: "center",
        marginBottom: 16,
        textTransform: "uppercase"
      }}>
        Архив варок
      </Title>

      <Paragraph style={{
        color: textColor,
        textAlign: "center",
        fontSize: responsive.md ? 16 : 14,
        maxWidth: 800,
        margin: "0 auto 32px auto",
        padding: "0 16px"
      }}>
        История наших некоторых экспериментов по годам и линейкам.
      </Paragraph>

      <Flex justify="center" gap={responsive.md ? 12 : 8} wrap="wrap" style={{ marginBottom: 32 }}>
        {(Object.keys(seriesConfig) as Array<keyof typeof seriesConfig>).map((key) => (
          <Tag
            key={key}
            color={selectedSeries === key ? token.colorPrimary : "default"}
            onClick={() => setSelectedSeries(key)}
            className={selectedSeries === key ? undefined : styles.seriesTab}
            style={{
              cursor: "pointer",
              margin: 0,
              padding: responsive.md ? "6px 16px" : "4px 12px",
              fontSize: responsive.md ? 14 : 12,
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: selectedSeries === key ? "#FFFFFF" : textColor,
              borderColor: selectedSeries === key ? token.colorPrimary : token.colorBorder
            }}
          >
            {seriesConfig[key].icon}
            {seriesConfig[key].label}
          </Tag>
        ))}
      </Flex>

      <Row gutter={[16, 16]} justify="center">
        {filteredData.map((item) => (
          <Col xs={24} sm={12} lg={8} xl={6} key={item.id}>
            <Card
              style={{
                height: "100%",
                borderRadius: 8,
                backgroundColor: isDark ? token.colorBgContainer : "#F9F9F9",
                boxShadow: isDark ? token.boxShadowSecondary : "0px 4px 14px 0px #00000014",
                border: "none",
                textAlign: "center",
                overflow: "hidden"
              }}
              styles={{ body: { padding: responsive.md ? 16 : 12 } }}
            >
              <Flex
                align="center"
                justify="center"
                style={{
                  width: "100%",
                  aspectRatio: item.series === "sauces" ? undefined : "1 / 1",
                  marginBottom: 12,
                  overflow: "hidden",
                  borderRadius: 6
                }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  preview={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: item.series === "sauces" ? "contain" : "cover"
                  }}
                />
              </Flex>

              <Text strong style={{ display: "block", fontSize: responsive.md ? 16 : 18, color: titleColor, marginBottom: 4 }}>
                {item.name}
              </Text>

              <Text style={{ display: "block", fontSize: responsive.md ? 13 : 15, color: token.colorPrimary, marginBottom: 8 }}>
                {item.style}
              </Text>

              {item.note && (
                <Text
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontSize: responsive.md ? 12 : 14,
                    color: textColor,
                    lineHeight: 1.4,
                    marginBottom: 8,
                    textAlign: "center",
                    minHeight: 34
                  }}
                >
                  {item.note}
                </Text>
              )}

              {item.series === "sauces" ? (
                <Tag color="red" style={{ margin: 0, fontSize: responsive.md ? 11 : 12 }}>
                  Острота: {item.spiciness}
                </Tag>
              ) : (
                <>
                  <Tag color={isDark ? "blue" : "default"} style={{ margin: 0, fontSize: responsive.md ? 11 : 12 }}>
                    ABV: {item.abv}
                  </Tag>
                  <Tag color={isDark ? "blue" : "default"} style={{ margin: 0, fontSize: responsive.md ? 11 : 12 }}>
                    IBU: {item.ibu}
                  </Tag>
                </>
              )}
            </Card>
          </Col>
        ))}
      </Row>

      {filteredData.length === 0 && (
        <Flex justify="center" style={{ padding: "48px 0" }}>
          <Text type="secondary">В этой серии пока нет записей.</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Archive;