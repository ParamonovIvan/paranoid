import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux.ts";
import { Badge, Button, Flex, Image, Layout, notification, theme, Typography } from "antd";
import { createStyles, useResponsive } from "antd-style";
import { useTheme } from "./hooks/useTheme";
import { ShoppingCartOutlined, ArrowUpOutlined } from "@ant-design/icons";
import logoImage from "./images/logo_black.png";
import BreweryIntro from "./components/BreweryIntro";
import BeerCatalog from "./components/BeerCatalog";
import Achievements from "./components/Achievements";
import Cart from "./components/Cart.tsx";
import SideNav from "./components/SideNav.tsx";
import Collaborations from "./components/Collaborations.tsx";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { syncCart } from "./store/cartSlice.ts";
import { accessoriesData, beerData, sauceData } from "./catalog.ts";
import { useWideScreen } from "./hooks/useWideScreen.ts";

const {
  Content,
  Header,
  Footer
} = Layout;

const useStyles = createStyles(({ token, css }) => ({
  backTopBtn: css`
    transition: all 0.2s ease;
    &:hover {
      background-color: ${token.colorPrimaryBg} !important;
      border-color: ${token.colorPrimaryBorder} !important;
    }
    &:hover .anticon {
      color: ${token.colorPrimaryHover} !important;
    }
  `
}));

const { Title } = Typography;

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  const { styles } = useStyles();
  const { mode } = useTheme();
  const { token } = theme.useToken();
  const dispatch = useAppDispatch();
  const responsive = useResponsive();
  const { items, itemCount } = useAppSelector((state) => state.cart);
  const isWide = useWideScreen(1600);

  useEffect(() => {
    const allProducts = [...beerData, ...sauceData, ...accessoriesData];

    const validItems = items.filter(item => {
      const product = allProducts.find(p => p.id === item.productId);
      if (!product) return false;

      return product.variants.some(v => v.volume === item.volume);
    });

    if (validItems.length !== items.length) {
      dispatch(syncCart(validItems));

      notification.warning({
        key: "cart-sync",
        message: "Корзина обновлена",
        description: "Некоторые товары больше не доступны и были удалены из корзины.",
        placement: "topRight",
        duration: 4
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout style={{ minHeight: "100vh", background: token.colorBgLayout }}>
      <Header style={{
        backgroundColor: token.colorBgLayout,
        borderBottom: `1px solid ${token.colorBorder}`,
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
          style={{
            objectFit: "contain",
            width: "100%",
            height: responsive.md ? 100 : 75,
            filter: mode === "dark" ? "invert(1) brightness(2)" : "none",
            opacity: mode === "dark" ? 0.85 : 1
          }}
        />
        <Title
          level={1}
          style={{ color: token.colorText, margin: 0, fontWeight: 600, fontSize: "clamp(24px, 5vw, 32px)" }}
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
        backgroundColor: token.colorBgLayout,
        color: token.colorTextSecondary,
        borderTop: `1px solid ${token.colorBorder}`,
        padding: "24px 24px",
        fontSize: "clamp(12px, 2vw, 14px)",
        cursor: "default"
      }}>
        Paranoid Brewery ©2017-2026 — Лаборатория жидкостей с характером
      </Footer>

      {!isWide && (
        <Flex
          style={{
            position: "fixed",
            bottom: 24,
            left: 24,
            zIndex: 1000
          }}
        >
          <ThemeSwitcher/>
        </Flex>
      )}

      <Flex
        vertical
        gap={12}
        style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000, alignItems: "center" }}
      >
        {showBackTop && (
          <Button
            type="default"
            shape="circle"
            className={styles.backTopBtn}
            icon={<ArrowUpOutlined style={{ fontSize: 24, color: token.colorPrimary }}/>}
            onClick={scrollToTop}
            style={{
              boxShadow: token.boxShadowSecondary,
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: token.colorBgContainer,
              border: `1px solid ${token.colorBorderSecondary}`
            }}
          />
        )}

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