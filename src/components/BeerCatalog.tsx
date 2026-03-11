import { useRef, useState } from "react";
import {
  Image,
  Row,
  Col,
  Card,
  Typography,
  Tag,
  Flex,
  Badge,
  Button,
  notification
} from "antd";
import { createStyles, useResponsive } from "antd-style";
import { LeftOutlined, RightOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { beerData, sauceData, accessoriesData } from "../catalog.ts";
import { useAppDispatch, useAppSelector } from "../hooks/redux.ts";
import { addToCart, removeFromCart, updateQuantity } from "../store/cartSlice.ts";
import type { Product, ProductVariant } from "../types/product.ts";
import untappdImage from "../images/untappd.png";
import logoImage from "../images/logo.png";

const {
  Link,
  Text,
  Paragraph
} = Typography;

const useStyles = createStyles(({ token, css }) => ({
  untappdIcon: {
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
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

const BeerCatalog = () => {
  const responsive = useResponsive();
  const categoriesRef = useRef<HTMLDivElement>(null);
  const { styles } = useStyles();
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  const [api, contextHolder] = notification.useNotification();

  const allCategories = [
    ...new Set(beerData.map(item => item.category)),
    "PEPPER SAUCES",
    "ACCESSORIES"
  ];

  const [activeCategory, setActiveCategory] = useState(allCategories[0]);

  const getProductsByCategory = (category: string) => {
    if (category === "PEPPER SAUCES") return sauceData;
    if (category === "ACCESSORIES") return accessoriesData;
    return beerData.filter(item => item.category === category);
  };

  const currentIndex = allCategories.indexOf(activeCategory);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allCategories.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      setActiveCategory(allCategories[currentIndex - 1]);
      setTimeout(() => {
        if (categoriesRef.current) {
          categoriesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      }, 100);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setActiveCategory(allCategories[currentIndex + 1]);
      setTimeout(() => {
        if (categoriesRef.current) {
          categoriesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      }, 100);
    }
  };

  const handleAddToCart = (product: Product, variant: ProductVariant) => {
    const remainingText = variant.remaining;
    const match = remainingText.match(/(\d+)/);
    const maxQuantity = match ? parseInt(match[1], 10) : 0;

    if (maxQuantity <= 0) {
      api.warning({
        message: "Товар закончился!",
        description: `${product.name} (${variant.volume}) больше нет в наличии`,
        placement: "topRight",
        duration: 2
      });
      return;
    }

    const existingItem = items.find(item =>
      item.productId === product.id && item.volume === variant.volume
    );
    const currentQuantity = existingItem?.quantity || 0;

    if (currentQuantity >= maxQuantity) {
      api.warning({
        message: "Достигнут лимит!",
        description: `Максимальное количество: ${maxQuantity} шт.`,
        placement: "topRight",
        duration: 2
      });
      return;
    }

    dispatch(addToCart({
      productId: product.id,
      name: product.name,
      style: product.style,
      volume: variant.volume,
      price: variant.price,
      packaging: variant.packaging,
      imageUrl: product.imageUrl,
      category: product.category,
      maxQuantity: maxQuantity
    }));

    api.success({
      message: "Товар добавлен в корзину!",
      description: `${product.name} (${variant.volume})`,
      placement: "topRight",
      duration: 2
    });
  };

  const renderProductCard = (product: Product) => (
    <Col
      xs={24}
      sm={12}
      lg={8}
      xl={6}
      key={product.id}
      style={{ display: "flex" }}
    >
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          borderRadius: 8,
          boxShadow: "0px 4px 14px 0px #00000014"
        }}
        styles={{
          body: { flex: 1, display: "flex", flexDirection: "column", padding: responsive.md ? 16 : 12 },
          cover: { marginTop: -2 }
        }}
        cover={
          <Flex style={{ position: "relative" }}>
            {product.category === "ACCESSORIES" ? (
              <Flex style={{
                width: "100%",
                height: 278,
                backgroundColor: "#FFF",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8
              }}>
                <Flex style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  border: "2px solid #FFF",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFF"
                }}>
                  <Image
                    loading="lazy"
                    draggable={false}
                    src={logoImage}
                    preview={false}
                    style={{ objectFit: "cover", width: "100%", height: 150 }}
                  />
                </Flex>
              </Flex>
            ) : (
              <Image
                loading="lazy"
                draggable={false}
                src={product.imageUrl}
                preview={false}
                style={{ objectFit: "cover", width: "100%", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                placeholder={
                  <Image
                    preview={false}
                    draggable={false}
                    src={product.imageUrl}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      filter: "blur(20px)",
                      transform: "scale(1.1)"
                    }}
                  />
                }
              />
            )}
            <Flex style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "#FFF",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 14,
              fontWeight: 600
            }}>
              {product.id}
            </Flex>
            {product.untappdUrl && (
              <Link
                href={product.untappdUrl}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
              >
                <Image
                  preview={false}
                  draggable={false}
                  loading="lazy"
                  src={untappdImage}
                  wrapperStyle={{ position: "initial" }}
                  className={styles.untappdIcon}
                  style={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    transition: "transform 0.2s ease-in-out",
                    willChange: "transform"
                  }}
                />
              </Link>
            )}
          </Flex>
        }
        actions={[
          <Flex vertical gap={12} key="variants" style={{ padding: "8px 0", width: "100%", cursor: "default"  }}>
            {product.variants.map((variant, index) => {
              const remainingText = variant.remaining;
              const match = remainingText.match(/(\d+)/);
              const maxQuantity = match ? parseInt(match[1], 10) : 0;

              const cartItem = items.find(item =>
                item.productId === product.id && item.volume === variant.volume
              );
              const quantity = cartItem?.quantity || 0;

              return (
                <Flex
                  vertical
                  align="center"
                  key={index}
                  style={{ marginBottom: index < product.variants.length - 1 ? 8 : 0 }}
                >
                  <Text strong style={{ color: "#1677FF", fontSize: 16, textAlign: "center", marginBottom: 4 }}>
                    {variant.price} / {variant.volume}
                  </Text>
                  {variant.packaging && variant.packaging.length > 0 && (
                    <Flex gap={4} justify="center" style={{ marginBottom: 4 }}>
                      {variant.packaging.map(pack => (
                        <Tag
                          key={pack}
                          color="default"
                          style={{ fontSize: 12, padding: "0 6px", lineHeight: 1.4, margin: 0 }}
                        >
                          {pack}
                        </Tag>
                      ))}
                    </Flex>
                  )}
                  <Text type="secondary" style={{ fontSize: 13, textAlign: "center" }}>
                    {variant.remaining}
                  </Text>

                  {quantity > 0 ? (
                    <Flex align="center" justify="center" gap={8} style={{ marginTop: 6 }}>
                      <Button
                        size="small"
                        type="primary"
                        style={{ width: 36, height: 36 }}
                        onClick={() => {
                          if (quantity === 1) {
                            const itemToRemove = items.find(item =>
                              item.productId === product.id && item.volume === variant.volume
                            );
                            if (itemToRemove) {
                              dispatch(removeFromCart(itemToRemove.id));
                            }
                          } else {
                            const itemToUpdate = items.find(item =>
                              item.productId === product.id && item.volume === variant.volume
                            );
                            if (itemToUpdate) {
                              dispatch(updateQuantity({
                                id: itemToUpdate.id,
                                quantity: quantity - 1
                              }));
                            }
                          }
                        }}
                      >
                       -
                      </Button>

                      <Text strong style={{ minWidth: 30, textAlign: "center" }}>
                        {quantity}
                      </Text>

                      <Button
                        size="small"
                        type="primary"
                        onClick={() => handleAddToCart(product, variant)}
                        disabled={cartItem && cartItem.quantity >= maxQuantity}
                        style={{ width: 36, height: 36 }}
                      >
                        +
                      </Button>
                    </Flex>
                  ) : (
                    <Button
                      type="primary"
                      icon={<ShoppingCartOutlined/>}
                      size="small"
                      onClick={() => handleAddToCart(product, variant)}
                      style={{ maxWidth: 124, paddingInline: 14, height: 36, marginTop: 6 }}
                    >
                      В корзину
                    </Button>
                  )}
                </Flex>
              );
            })}
          </Flex>
        ]}
      >
        <Flex vertical style={{ marginBottom: 12 }}>
          <Text strong style={{ fontSize: 16, display: "block", textAlign: "center" }}>
            {product.name}
          </Text>
          <Text style={{ color: "#1677FF", fontSize: 15, display: "block", marginTop: 4, textAlign: "center" }}>
            {product.style}
          </Text>
        </Flex>

        <Flex
          style={{ marginBottom: 12 }}
          wrap="wrap"
          gap={4}
          justify="center"
        >
          {product.og && <Tag color="default" style={{ fontSize: 12 }}>OG: {product.og}</Tag>}
          {product.abv && <Tag color="default" style={{ fontSize: 12 }}>ABV: {product.abv}</Tag>}
          {product.ibu && <Tag color="default" style={{ fontSize: 12 }}>IBU: {product.ibu}</Tag>}
          {product.spiciness && <Tag color="red" style={{ fontSize: 12 }}>Острота: {product.spiciness}</Tag>}
        </Flex>

        <Flex style={{ flex: 1, marginBottom: 12 }}>
          <Paragraph style={{
            color: "#000000E0",
            fontSize: 15,
            lineHeight: "1.4",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            margin: 0,
            height: "100%",
            textAlign: "center"
          }}>
            {product.description}
          </Paragraph>
        </Flex>

        <Text type="secondary" style={{ fontSize: 14, textAlign: "center", display: "block" }}>
          {product.bottlingDate && `Дата розлива: ${product.bottlingDate}`}
        </Text>
      </Card>
    </Col>
  );

  return (
    <Flex vertical style={{ marginBottom: responsive.md ? 64 : 56, marginTop: 16, cursor: "default" }}>
      {contextHolder}
      <Flex
        justify="space-between"
        align="flex-start"
        vertical={!responsive.md}
        gap={!responsive.md ? 16 : 0}
        style={{ marginBottom: 24 }}
      >
        <Paragraph style={{ color: "#000000E0", fontSize: responsive.sm ? 16 : 14, margin: 0 }}>
          от 11/03/2026
        </Paragraph>
        <Paragraph style={{
          color: "#000000E0",
          fontSize: responsive.sm ? 16 : 14,
          margin: 0,
          textAlign: responsive.md ? "right" : "left"
        }}>
          Наливайте в бокал, оставляя осадок в бутылке
        </Paragraph>
      </Flex>

      <Flex
        ref={categoriesRef}
        justify="center"
        style={{ marginBottom: responsive.md ? 36 : 24 }}
        wrap="wrap"
        gap={responsive.md ? 16 : 10}
      >
        {allCategories.map(category => (
          <Badge
            key={category}
            count={getProductsByCategory(category).length}
            offset={responsive.md ? [1, 8] : [-1, 4]}
            style={{ backgroundColor: "#1677FF", borderColor: "#000000E0" }}
          >
            <Tag
              color={activeCategory === category ? "#1677FF" : "default"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? undefined : styles.categoryTag}
              style={{
                margin: 2,
                padding: responsive.md ? "4px 8px" : "3px 6px",
                fontSize: responsive.md ? 14 : 12
              }}
            >
              {category}
            </Tag>
          </Badge>
        ))}
      </Flex>

      <Row gutter={ responsive.md ? [16, 16] : [32, 32 ]} align="stretch">
        {getProductsByCategory(activeCategory).map(renderProductCard)}
      </Row>

      <Flex
        justify="center"
        gap={16}
        style={{ marginTop: 32 }}
        align="center"
      >
        <Button
          type={hasPrevious ? "primary" : "default"}
          icon={responsive.md ? <LeftOutlined/> : null}
          onClick={handlePrevious}
          disabled={!hasPrevious}
          style={{
            minWidth: responsive.md ? 120 : 40,
            height: 40
          }}
        >
          {responsive.md ? "Назад" : <LeftOutlined/>}
        </Button>

        <Text style={{
          color: "#000000E0",
          fontSize: responsive.md ? 16 : 14,
          minWidth: responsive.md ? 200 : 150,
          textAlign: "center"
        }}>
          {activeCategory} ({getProductsByCategory(activeCategory).length})
        </Text>

        <Button
          type={hasNext ? "primary" : "default"}
          onClick={handleNext}
          disabled={!hasNext}
          icon={responsive.md ? null : <RightOutlined/>}
          style={{
            minWidth: responsive.md ? 120 : 40,
            height: 40,
            gap: responsive.md ? 8 : 0
          }}
        >
          {responsive.md ? "Далее" : ""}
          {responsive.md && <RightOutlined/>}
        </Button>
      </Flex>
    </Flex>
  );
};

export default BeerCatalog;