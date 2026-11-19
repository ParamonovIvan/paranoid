import React, { useState } from "react";
import { Modal, Button, Typography, Flex, theme, Image } from "antd";
import logoImage from "../images/logo_black.png";

const { Title, Text } = Typography;

interface AgeGateProps {
  children: React.ReactNode;
}

const AgeGate = ({ children }: AgeGateProps) => {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(() => {
    return localStorage.getItem("age-confirmed") === "true";
  });

  const [isDeclined, setIsDeclined] = useState(false);

  const { token } = theme.useToken();

  const handleConfirm = () => {
    localStorage.setItem("age-confirmed", "true");
    setIsConfirmed(true);
  };

  const handleDecline = () => {
    setIsDeclined(true);
  };

  const handleChangeMind = () => {
    setIsDeclined(false);
  };

  if (isConfirmed) return <>{children}</>;

  if (isDeclined) {
    return (
      <>
        <Modal
          open={true}
          closable={false}
          footer={null}
          centered
          width={400}
          styles={{
            content: {
              borderRadius: 16,
              padding: 32,
              textAlign: "center",
              backgroundColor: token.colorBgContainer
            }
          }}
        >
          <Flex vertical align="center" gap={16}>
            <Text style={{ fontSize: 64, lineHeight: 1 }}>🐱</Text>

            <Title level={3} style={{ margin: 0 }}>
              Приходите, когда подрастете!
            </Title>

            <Text type="secondary" style={{ textAlign: "center", fontSize: 14 }}>
              Коты Пряник и Луис не пускают тех, кто младше 18 лет.
              Но если вы ошиблись — мы всегда рады вас видеть.
            </Text>

            <Button
              type="primary"
              size="large"
              block
              onClick={handleChangeMind}
              style={{ marginTop: 16 }}
            >
              Я ошибся, мне есть 18
            </Button>
          </Flex>
        </Modal>

        <Flex
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: token.colorBgLayout,
            zIndex: 1000
          }}
        />
      </>
    );
  }

  return (
    <>
      <Modal
        open={!isConfirmed}
        closable={false}
        footer={null}
        centered
        width={400}
        styles={{
          content: {
            borderRadius: 16,
            padding: 32,
            textAlign: "center",
            backgroundColor: token.colorBgContainer
          }
        }}
      >
        <Flex vertical align="center" gap={16}>
          <Image
            src={logoImage}
            alt="Paranoid Brewery"
            preview={false}
            style={{ width: 120, height: 120, objectFit: "contain" }}
          />

          <Title level={3} style={{ margin: 0 }}>
            Вам есть 18 лет?
          </Title>

          <Text type="secondary" style={{ textAlign: "center", fontSize: 14 }}>
            Сайт содержит информацию об алкогольной продукции.
            Пожалуйста, подтвердите свой возраст.
          </Text>

          <Flex gap={12} style={{ width: "100%", marginTop: 16 }}>
            <Button
              type="primary"
              size="large"
              block
              onClick={handleConfirm}
            >
              Да, мне есть 18
            </Button>
            <Button
              size="large"
              block
              onClick={handleDecline}
            >
              Нет
            </Button>
          </Flex>
        </Flex>
      </Modal>

      <Flex
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: token.colorBgLayout,
          zIndex: 1000
        }}
      />
    </>
  );
};

export default AgeGate;