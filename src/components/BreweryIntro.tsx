import { Typography, Flex, Row, Col, Card } from "antd";
import { useResponsive } from "antd-style";

const { Title, Paragraph, Text } = Typography;

const BreweryIntro = () => {
  const responsive = useResponsive();

  const features = [
    {
      icon: "🔄",
      title: "Вечное движение",
      content: "Для нас не существует понятия «очередная партия». Каждая новая варка — это гипотеза, которую мы доказываем на вкус."
    },
    {
      icon: "⚡",
      title: "Алхимия коллабораций",
      content: "Совместные варки с пивоварнями — это не бизнес, это обмен заклинаниями. Результат: стаут, в котором тонешь, как в расплавленном шоколаде."
    },
    {
      icon: "🔥",
      title: "Живое пиво для живых людей",
      content: "Наше пиво дышит, меняется и иногда шепчет вам что-то на языке послевкусия."
    }
  ];

  const advantages = [
    {
      icon: "🏺",
      title: "Артефакт, а не просто пиво",
      content: "Бутылка с историей, которая начинается на нашем котле и продолжается в вашем бокале."
    },
    {
      icon: "🎯",
      title: "Параноики качества",
      content: "Мы одержимы каждой деталью, потому что верим: идеальное пиво — это то, после которого обычное кажется пустым."
    },
    {
      icon: "🏆",
      title: "Орден безумцев",
      content: "Наши награды с фестивалей — не трофеи, а знаки того, что мы на правильном пути."
    }
  ];

  return (
    <Flex vertical style={{ marginBottom: 24 }}>
      <Flex
        justify="space-between"
        align="flex-start"
        vertical={!responsive.md}
        gap={!responsive.md ? 16 : 0}
        style={{ marginBottom: 32 }}
      >
        <Paragraph style={{
          color: "#A0A0A0",
          fontSize: responsive.sm ? 16 : 14,
          margin: 0
        }}>
          от 11/11/2025
        </Paragraph>
        <Paragraph style={{
          color: "#A0A0A0",
          fontSize: responsive.sm ? 16 : 14,
          margin: 0,
          textAlign: responsive.md ? "right" : "left"
        }}>
          Наливайте в бокал, оставляя осадок в бутылке
        </Paragraph>
      </Flex>

      <Title style={{
        color: "#FFF",
        textAlign: "center",
        fontSize: responsive.lg ? 20 : responsive.md ? 18 : 16,
        margin: 0,
        lineHeight: 1.4
      }}>
        На карте Ижевска есть точка, где рождаются жидкости с характером.
      </Title>
      <Title style={{
        color: "#FFF",
        textAlign: "center",
        fontSize: responsive.lg ? 20 : responsive.md ? 18 : 16,
        margin: 0,
        marginTop: 8
      }}>
        Это не завод, это — лаборатория, основанная в декабре 2017 года.
      </Title>

      <Title level={3} style={{
        color: "#DAA520",
        marginTop: responsive.md ? 48 : 32,
        marginBottom: 16,
        fontSize: responsive.md ? 20 : 18
      }}>
        🧪 Что здесь происходит?
      </Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {features.map((item, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              style={{
                height: "100%",
                background: "rgba(139, 69, 19, 0.1)",
                border: "1px solid #8B4513"
              }}
              styles={{ body: { padding: responsive.md ? 16 : 12 } }}
            >
              <Flex align="center" gap={8} style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: responsive.md ? 24 : 20, display: "block" }}>
                  {item.icon}
                </Text>
                <Title level={5} style={{
                  color: "#DAA520",
                  margin: 0,
                  fontSize: responsive.md ? 16 : 14
                }}>
                  {item.title}
                </Title>
              </Flex>
              <Paragraph style={{
                color: "#D0D0D0",
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
        color: "#DAA520",
        marginBottom: 16,
        fontSize: responsive.md ? 20 : 18
      }}>
        ✅ Почему с нами стоит иметь дело?
      </Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {advantages.map((item, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              style={{
                height: "100%",
                background: "rgba(218, 165, 32, 0.1)",
                border: "1px solid #DAA520"
              }}
              styles={{ body: { padding: responsive.md ? 16 : 12 } }}
            >
              <Flex align="center" gap={8} style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: responsive.md ? 24 : 20, display: "block" }}>
                  {item.icon}
                </Text>
                <Title level={5} style={{
                  color: "#DAA520",
                  margin: 0,
                  fontSize: responsive.md ? 16 : 14
                }}>
                  {item.title}
                </Title>
              </Flex>
              <Paragraph style={{
                color: "#D0D0D0",
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
        style={{
          background: "rgba(184, 115, 51, 0.1)",
          border: "1px solid #b87333",
          fontStyle: "italic"
        }}
        styles={{ body: { padding: responsive.md ? 16 : 12 } }}
      >
        <Paragraph style={{
          color: "#b87333",
          margin: 0,
          textAlign: "center",
          fontSize: responsive.md ? 14 : 13,
          lineHeight: 1.5
        }}>
          "Коты Отто, Пряник и Луи, официальные наблюдатели и хранители котлов, заявляют:
          «Мы следим за температурой. И за тем, чтобы пивовар не забыл о главном — о наших консервах.
          Всё остальное — это его алхимия.»"
        </Paragraph>
      </Card>
    </Flex>
  );
};

export default BreweryIntro;