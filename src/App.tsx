import { Image, Layout, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useResponsive } from "antd-style";
import BreweryIntro from "./components/BreweryIntro";
import BeerCatalog from "./components/BeerCatalog";
import Achievements from "./components/Achievements";
import logoImage from "./images/logo.png";

const { Header, Footer } = Layout;
const { Title } = Typography;

function App() {
  const responsive = useResponsive();

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#0D0D0D", color: "#F5F5F5" }}>
      <Header style={{
        backgroundColor: "#1A1A1A",
        borderBottom: "1px solid #8B4513",
        textAlign: "center",
        padding: "16px 24px",
        height: "auto",
        minHeight: 80
      }}>
        <Image
          src={logoImage}
          preview={false}
          style={{ objectFit: "cover", width: "100%", height: responsive.md ? 100 : 75 }}
        />
        <Title
          level={1}
          style={{
            color: "#FFF",
            margin: 0,
            fontWeight: 600,
            fontSize: "clamp(24px, 5vw, 32px)"
          }}
        >
          Paranoid Brewery
        </Title>
      </Header>

      <Content style={{
        padding: "clamp(12px, 3vw, 24px)",
        maxWidth: 1400,
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <BreweryIntro/>
        <BeerCatalog/>
        <Achievements/>
      </Content>

      <Footer style={{
        textAlign: "center",
        backgroundColor: "#1A1A1A",
        color: "#A0A0A0",
        borderTop: "1px solid #333",
        padding: "16px 24px",
        fontSize: "clamp(12px, 2vw, 14px)"
      }}>
        Paranoid Brewery ©2017-2025 — Лаборатория жидкостей с характером
      </Footer>
    </Layout>
  );
}

export default App;