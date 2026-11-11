import { Typography, Flex, Row, Col, Card, theme } from "antd";
import { useResponsive } from "antd-style";
import {
  SyncOutlined,
  ExperimentOutlined,
  FireOutlined,
  GoldOutlined,
  AimOutlined,
  TrophyOutlined
} from "@ant-design/icons";
import { useTheme } from "../hooks/useTheme";

const { Title, Paragraph, Text } = Typography;

const BreweryIntro = () => {
  const responsive = useResponsive();
  const { token } = theme.useToken();
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const blueCardStyle = {
    height: "100%",
    background: isDark ? "rgba(22, 119, 255, 0.1)" : "#E6F4FF",
    border: `1px solid ${isDark ? token.colorPrimaryBorder : "#91CAFF"}`
  };

  const greenCardStyle = {
    height: "100%",
    background: isDark ? "rgba(82, 196, 26, 0.1)" : "#F6FFED",
    border: `1px solid ${isDark ? "rgba(82, 196, 26, 0.3)" : "#B7EB8F"}`
  };

  const yellowCardStyle = {
    background: isDark ? "rgba(250, 173, 20, 0.1)" : "#FFFBE6",
    border: `1px solid ${isDark ? "rgba(250, 173, 20, 0.3)" : "#FFE58F"}`,
    fontStyle: "italic"
  };

  const textColor = isDark ? token.colorText : "#000000E0";
  const titleColor = isDark ? token.colorText : "#000000E0";

  const features = [
    {
      icon: <SyncOutlined style={{ fontSize: responsive.md ? 24 : 20, color: isDark ? token.colorPrimary : "#1677FF" }}/>,
      title: "Вечное движение",
      content: "Для нас не существует понятия «очередная партия». Каждая новая варка — это гипотеза, которую мы доказываем на вкус."
    },
    {
      icon: <ExperimentOutlined style={{ fontSize: responsive.md ? 24 : 20, color: isDark ? token.colorPrimary : "#1677FF" }}/>,
      title: "Алхимия коллабораций",
      content: "Совместные варки с пивоварнями — это не бизнес, это обмен заклинаниями. Результат: стаут, в котором тонешь, как в расплавленном шоколаде."
    },
    {
      icon: <FireOutlined style={{ fontSize: responsive.md ? 24 : 20, color: isDark ? token.colorPrimary : "#1677FF" }}/>,
      title: "Живое пиво для живых людей",
      content: "Наше пиво дышит, меняется и иногда шепчет вам что-то на языке послевкусия."
    }
  ];

  const advantages = [
    {
      icon: <GoldOutlined style={{ fontSize: responsive.md ? 24 : 20, color: "#52C41A" }}/>,
      title: "Артефакт, а не просто пиво",
      content: "Бутылка с историей, которая начинается на нашем котле и продолжается в вашем бокале."
    },
    {
      icon: <AimOutlined style={{ fontSize: responsive.md ? 24 : 20, color: "#52C41A" }}/>,
      title: "Параноики качества",
      content: "Мы одержимы каждой деталью, потому что верим: идеальное пиво — это то, после которого обычное кажется пустым."
    },
    {
      icon: <TrophyOutlined style={{ fontSize: responsive.md ? 24 : 20, color: "#52C41A" }}/>,
      title: "Орден безумцев",
      content: "Наши награды с фестивалей — не трофеи, а знаки того, что мы на правильном пути."
    }
  ];

  return (
    <Flex vertical style={{ marginBottom: responsive.md ? 64 : 56, cursor: "default" }}>
      <Title style={{
        fontSize: responsive.lg ? 30 : 24,
        color: titleColor,
        textAlign: "center",
        marginBottom: responsive.md ? 36 : 24,
        textTransform: "uppercase"
      }}>
        О нас
      </Title>
      <Text style={{
        color: textColor,
        textAlign: "center",
        fontSize: responsive.lg ? 18 : responsive.md ? 16 : 14,
        margin: 0,
        lineHeight: 1.4
      }}>
        На карте Ижевска есть точка, где рождаются жидкости с характером.
      </Text>
      <Text style={{
        color: textColor,
        textAlign: "center",
        fontSize: responsive.lg ? 18 : responsive.md ? 16 : 14,
        margin: 0,
        marginTop: 8
      }}>
        Это не завод, это — лаборатория, основанная в декабре 2017 года.
      </Text>

      <Title style={{
        color: titleColor,
        marginTop: responsive.md ? 48 : 32,
        marginBottom: 16,
        fontSize: responsive.md ? 20 : 18
      }}>
        Что здесь происходит?
      </Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {features.map((item, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              style={blueCardStyle}
              styles={{ body: { padding: responsive.md ? 16 : 12 } }}
            >
              <Flex align="center" gap={8} style={{ marginBottom: 8 }}>
                {item.icon}
                <Title level={5} style={{
                  color: titleColor,
                  margin: 0,
                  fontSize: responsive.md ? 16 : 14
                }}>
                  {item.title}
                </Title>
              </Flex>
              <Paragraph style={{
                color: textColor,
                margin: 0,
                fontSize: responsive.md ? 14 : 13,
                lineHeight: 1.5
              }}>
                {item.content}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={3} style={{
        color: titleColor,
        marginBottom: 16,
        fontSize: responsive.md ? 20 : 18
      }}>
        Почему с нами стоит иметь дело?
      </Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {advantages.map((item, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              style={greenCardStyle}
              styles={{ body: { padding: responsive.md ? 16 : 12 } }}
            >
              <Flex align="center" gap={8} style={{ marginBottom: 8 }}>
                {item.icon}
                <Title level={5} style={{
                  color: titleColor,
                  margin: 0,
                  fontSize: responsive.md ? 16 : 14
                }}>
                  {item.title}
                </Title>
              </Flex>
              <Paragraph style={{
                color: textColor,
                margin: 0,
                fontSize: responsive.md ? 14 : 13,
                lineHeight: 1.5
              }}>
                {item.content}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Card
        style={yellowCardStyle}
        styles={{ body: { padding: responsive.md ? 16 : 12 } }}
      >
        <Paragraph style={{
          color: textColor,
          margin: 0,
          textAlign: "center",
          fontSize: responsive.md ? 14 : 13,
          lineHeight: 1.5
        }}>
          "Коты Пряник и Луис, официальные наблюдатели и хранители котлов, заявляют:
          «Мы следим за температурой. И за тем, чтобы пивовар не забыл о главном — о наших консервах.
          Всё остальное — это его алхимия.»"
        </Paragraph>
      </Card>
    </Flex>
  );
};

export default BreweryIntro;