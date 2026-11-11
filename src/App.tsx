import { useState } from "react";
import { useAppSelector } from "./hooks/redux.ts";
import { Badge, Button, Flex, Image, Layout, Typography } from "antd";
import { useResponsive } from "antd-style";
import { ShoppingCartOutlined } from "@ant-design/icons";
import logoImage from "./images/logo_black.png";
import BreweryIntro from "./components/BreweryIntro";
import BeerCatalog from "./components/BeerCatalog";
import Achievements from "./components/Achievements";
import Cart from "./components/Cart.tsx";
import SideNav from "./components/SideNav.tsx";
import Collaborations from "./components/Collaborations.tsx";

const {
  Content,
  Header,
  Footer
} = Layout;

const { Title } = Typography;

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const responsive = useResponsive();

  const { itemCount } = useAppSelector((state) => state.cart);

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#F5F5F5" }}>
      <Header style={{
        backgroundColor: "#F5F5F5",
        borderBottom: "1px solid #D5D5D5",
        textAlign: "center",
        padding: "16px 24px",
        height: "auto",
        minHeight: 80,
        cursor: "default"
      }}>
        <Image
          draggable={false}
          src={logoImage}
          preview={false}
          style={{ objectFit: "contain", width: "100%", height: responsive.md ? 100 : 75 }}
        />
        <Title
          level={1}
          style={{ color: "rgb(51 49 44)", margin: 0, fontWeight: 600, fontSize: "clamp(24px, 5vw, 32px)" }}
        >
          Paranoid Brewery
        </Title>
      </Header>
      <SideNav/>
      <Content style={{
        padding: "clamp(12px, 3vw, 24px)",
        maxWidth: 1400,
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <Flex vertical id="catalog">
          <BeerCatalog/>
        </Flex>
        <Flex vertical id="about">
          <BreweryIntro/>
        </Flex>
        <Flex vertical id="achievements">
          <Achievements/>
        </Flex>
        <Flex vertical id="collaborations">
          <Collaborations/>
        </Flex>
      </Content>

      <Footer style={{
        textAlign: "center",
        backgroundColor: "#F5F5F5",
        color: "#000000E0",
        borderTop: "1px solid #D5D5D5",
        padding: "24px 24px",
        fontSize: "clamp(12px, 2vw, 14px)",
        cursor: "default"
      }}>
        Paranoid Brewery ©2017-2026 — Лаборатория жидкостей с характером
      </Footer>
      <Flex style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
        <Badge
          count={itemCount}
          showZero={false}
          offset={[-5, 5]}
          color="#1677ff"
          style={{ boxShadow: "0 0 0 2px #0D0D0D", backgroundColor: "#1677FF", borderColor: "#000000E0" }}
        >
          <Button
            type="primary"
            icon={<ShoppingCartOutlined style={{ fontSize: 24 }}/>}
            onClick={() => setCartOpen(true)}
            style={{
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          />
        </Badge>
      </Flex>

      <Cart open={cartOpen} onClose={() => setCartOpen(false)}/>
    </Layout>
  );
}

export default App;