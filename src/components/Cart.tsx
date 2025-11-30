import React from "react";
import {
  Drawer,
  Button,
  List,
  Typography,
  Flex,
  Image,
  Tag,
  InputNumber,
  Divider,
  Card, notification
} from "antd";
import { DeleteOutlined, ShoppingCartOutlined, ExportOutlined, CopyOutlined } from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";
import { createStyles, useResponsive } from "antd-style";
import logoImage from "../images/logo.png";

const { Title, Text } = Typography;

interface CartProps {
  open: boolean;
  onClose: () => void;
}

const useStyles = createStyles({
  inputNumber: {
    "& .ant-input-number-input": {
      textAlign: "center"
    }
  }
});

const Cart: React.FC<CartProps> = ({ open, onClose }) => {
  const { items, total, itemCount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const responsive = useResponsive();
  const { styles } = useStyles();

  const generateOrderMessage = () => {
    const orderLines = items.map(item => {
      let emoji = "📦";

      if (item.category.includes("BEER") || item.category.includes("STRONG") || item.category.includes("BIRTHDAY")) {
        emoji = "🍺";
      } else if (item.category.includes("SAUCE")) {
        emoji = "🌶️";
      } else if (item.category.includes("ACCESSORIES")) {
        emoji = "🛍️";
      }

      return `${emoji} ${item.name} (${item.style}) - ${item.volume} - ${item.price}₽ x ${item.quantity}`;
    }).join("\n");

    return `Здравствуйте! Хочу заказать:\n\n${orderLines}\n\n💰 Итого: ${total}₽`;
  };

  const openTelegram = () => {
    const message = generateOrderMessage();
    const encodedMessage = encodeURIComponent(message);
    const telegramUrl = `https://t.me/spool_ka?text=${encodedMessage}`;
    
    try {
      const opened = window.open(telegramUrl, "_blank", "noopener,noreferrer");
      if (!opened) {
        window.location.href = telegramUrl;
      }
    } catch {
      try {
        const link = document.createElement("a");
        link.href = telegramUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch {
        window.open(telegramUrl, "_blank", "noopener,noreferrer");
      }
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateOrderMessage());
      notification.success({
        message: "Заказ скопирован!",
        description: "Теперь вы можете отправить его в Telegram"
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Drawer
      title={
        <Flex align="center" gap={8}>
          <ShoppingCartOutlined/>
          <Text strong>Корзина ({itemCount})</Text>
        </Flex>
      }
      placement="right"
      onClose={onClose}
      open={open}
      width={responsive.md ? 500 : "100%"}
      styles={{
        body: {
          padding: responsive.md ? 16 : 12,
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }
      }}
      extra={
        items.length > 0 && (
          <Button
            type="link"
            danger
            size="small"
            onClick={() => dispatch(clearCart())}
          >
            Очистить
          </Button>
        )
      }
    >
      {items.length === 0 ? (
        <Flex vertical align="center" justify="center" style={{ flex: 1 }}>
          <ShoppingCartOutlined style={{ fontSize: 48, color: "#1677ff", marginBottom: 16 }}/>
          <Title level={4} style={{ color: "#666", textAlign: "center" }}>
            Корзина пуста
          </Title>
          <Text type="secondary" style={{ textAlign: "center" }}>
            Добавьте товары из каталога
          </Text>
        </Flex>
      ) : (
        <Flex vertical style={{ flex: 1, gap: 16 }}>
          <List
            dataSource={items}
            renderItem={(item) => (
              <List.Item>
                <Card
                  size="small"
                  style={{ width: "100%" }}
                  styles={{
                    body: { padding: 12 }
                  }}
                >
                  <Flex gap={12} align="flex-start">
                      <Image
                        src={item.imageUrl || logoImage}
                        width={60}
                        height={60}
                        preview={false}
                        style={{
                          borderRadius: item.category === "ACCESSORIES" ? 30 : 6,
                          objectFit: item.category === "ACCESSORIES" ? "contain" : "cover",
                          backgroundColor: item.category === "ACCESSORIES" ? "#000" : "transparent"
                        }}
                      />

                    <Flex vertical style={{ flex: 1, gap: 8 }}>
                      <Flex justify="space-between" align="flex-start">
                        <Flex vertical style={{ flex: 1 }}>
                          <Text strong style={{ fontSize: 14, lineHeight: 1.2 }}>
                            {item.name}
                          </Text>
                          <Text type="secondary" style={{ fontSize: 12 }}>
                            {item.style}
                          </Text>
                          <Flex gap={4} style={{ marginTop: 4 }}>
                            <Tag color="blue" style={{ margin: 0, fontSize: 10 }}>
                              {item.volume}
                            </Tag>
                            {item.packaging?.map(pack => (
                              <Tag key={pack} style={{ margin: 0, fontSize: 10 }}>
                                {pack}
                              </Tag>
                            ))}
                          </Flex>
                          <Text strong style={{ color: "#00000073", fontSize: 13, marginTop: 4 }}>
                            {item.quantity} × {item.price}₽ = {(parseFloat(item.price) * item.quantity).toFixed(0)}₽
                          </Text>
                        </Flex>

                        <Button
                          type="text"
                          danger
                          size="small"
                          icon={<DeleteOutlined/>}
                          onClick={() => dispatch(removeFromCart(item.id))}
                        />
                      </Flex>

                      <Flex justify="space-between" align="center">
                        <Text strong style={{ color: "#1677FF", fontSize: 16 }}>
                          {item.price}₽
                        </Text>

                        <Flex align="center" gap={8}>
                          <Button
                            size="small"
                            onClick={() => dispatch(updateQuantity({
                              id: item.id,
                              quantity: item.quantity - 1
                            }))}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>

                          <InputNumber
                            size="small"
                            min={1}
                            max={99}
                            value={item.quantity}
                            onChange={(value) => dispatch(updateQuantity({
                              id: item.id,
                              quantity: value || 1
                            }))}
                            style={{ width: 60 }}
                            className={styles.inputNumber}
                          />

                          <Button
                            size="small"
                            onClick={() => dispatch(updateQuantity({
                              id: item.id,
                              quantity: item.quantity + 1
                            }))}
                          >
                            +
                          </Button>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Card>
              </List.Item>
            )}
          />

          <Divider style={{ margin: "8px 0" }} />

          <Flex vertical gap={12}>
            <Flex justify="space-between" align="center">
              <Text strong>Итого:</Text>
              <Title level={4} style={{ margin: 0, color: "#1677FF" }}>
                {total}₽
              </Title>
            </Flex>

            <Button
              onClick={openTelegram}
              block
              icon={<ExportOutlined/>}
              type="primary"
              style={{ height: 36 }}
            >
              Отправить в Telegram
            </Button>

            <Button
              icon={<CopyOutlined/>}
              onClick={copyToClipboard}
              style={{ height: 36 }}
            >
              Копировать заказ
            </Button>
          </Flex>
        </Flex>
      )}
    </Drawer>
  );
};

export default Cart;