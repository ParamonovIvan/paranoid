import { useRef, useState } from "react";
import { Image, Row, Col, Card, Typography, Tag, Flex, Badge, Button } from "antd";
import { useResponsive } from "antd-style";
import { beerData, sauceData, accessoriesData, type Product } from "../catalog.ts";
import untappdImage from "../images/untappd.png";
import logoImage from "../images/logo.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Link, Title, Text, Paragraph } = Typography;

const BeerCatalog = () => {
  const responsive = useResponsive();
  const categoriesRef = useRef<HTMLDivElement>(null);

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

  const renderProductCard = (product: Product) => (
    <Col
      xs={24}
      sm={12}
      lg={8}
      xl={6}
      key={product.id}
      style={{ display: "flex" }}
    >
      <Card style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", borderRadius: 8 }}
        styles={{
          body: { flex: 1, display: "flex", flexDirection: "column", padding: responsive.md ? 16 : 12 },
          cover: { marginTop: -2 }
      }}
        cover={
          <Flex style={{ position: "relative" }}>
            {product.category === "ACCESSORIES" ? (
              <Flex
                style={{
                  width: "100%",
                  height: 278,
                  backgroundColor: "#FFF",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Flex
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    border: "2px solid #FFF",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FFF"
                  }}
                >
                  <Image
                    loading="lazy"
                    src={logoImage}
                    preview={false}
                    style={{ objectFit: "cover", width: "100%", height: 150 }}
                  />
                </Flex>
              </Flex>
            ) : (
              <Image
                loading="lazy"
                src={product.imageUrl}
                preview={false}
                style={{ objectFit: "cover", width: "100%", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
              />
            )}
            <Flex
              style={{
                position: "absolute",
                left: 8,
                top: 8,
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 14,
                fontWeight: "bold"
              }}
            >
              {product.id}
            </Flex>
            {product.untappdUrl && (
              <Link
                href={product.untappdUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  preview={false}
                  loading="lazy"
                  src={untappdImage}
                  wrapperStyle={{ position: "initial" }}
                  style={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
                  }}
                />
              </Link>
            )}
          </Flex>
        }
        actions={[
          <Flex vertical key="variants" style={{ padding: "8px 0", width: "100%" }}>
            {product.variants.map((variant, index) => (
              <Flex vertical key={index} style={{
                marginBottom: index < product.variants.length - 1 ? 8 : 0,
                padding: "0 16px"
              }}>
                <Flex
                  justify={variant.packaging && variant.packaging.length > 0 ? "space-between" : "center"}
                  align="center"
                  style={{ marginBottom: 4 }}
                  vertical={!responsive.sm}
                  gap={!responsive.sm ? 4 : 0}
                >
                  <Text strong style={{ color: "#1677FF", fontSize: 16, textAlign: "center" }}>
                    {variant.price} / {variant.volume}
                  </Text>
                  {variant.packaging && variant.packaging.length > 0 && (
                    <Flex gap={4} justify="center">
                      {variant.packaging.map(pack => (
                        <Tag
                          key={pack}
                          color="default"
                          style={{
                            fontSize: 12,
                            padding: "0 4px",
                            lineHeight: 1.2,
                            margin: !responsive.sm ? "2px 0" : 0
                          }}
                        >
                          {pack}
                        </Tag>
                      ))}
                    </Flex>
                  )}
                </Flex>
                <Text type="secondary" style={{ fontSize: 13, textAlign: "center" }}>
                  {variant.remaining}
                </Text>
              </Flex>
            ))}
          </Flex>
        ]}
      >
        <Flex vertical style={{ marginBottom: 12 }}>
          <Text strong style={{ fontSize: 16, display: "block", textAlign: "center" }}>
            {product.name}
          </Text>
          <Text style={{
            color: "#1677FF",
            fontSize: 15,
            display: "block",
            marginTop: 4,
            textAlign: "center"
          }}>
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
          <Paragraph
            style={{
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
            }}
          >
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
    <Flex vertical style={{ marginBottom: 56, marginTop: 56 }}>
      <Title style={{
        fontSize: responsive.lg ? 30 : 24,
        color: "#DAA520",
        textAlign: "center",
        marginBottom: responsive.md ? 48 : 24,
        textTransform: "uppercase"
      }}>
        Каталог
      </Title>

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
              color={activeCategory === category ? "#8B4513" : "default"}
              onClick={() => setActiveCategory(category)}
              style={{
                cursor: "pointer",
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

      <Row gutter={[16, 16]} align="stretch">
        {getProductsByCategory(activeCategory).map(renderProductCard)}
      </Row>

      <Flex
        justify="center"
        gap={16}
        style={{ marginTop: 32 }}
        align="center"
      >
        <Button
          type="primary"
          icon={responsive.md ? <LeftOutlined/> : null}
          onClick={handlePrevious}
          disabled={!hasPrevious}
          style={{
            backgroundColor: hasPrevious ? "#8B4513" : "rgba(218, 165, 32, 0.3)",
            borderColor: hasPrevious ? "#8B4513" : "rgba(218, 165, 32, 0.2)",
            minWidth: responsive.md ? 120 : 40,
            height: 40
          }}
        >
          {responsive.md ? "Назад" : <LeftOutlined/>}
        </Button>

        <Text style={{
          color: "#DAA520",
          fontSize: responsive.md ? 16 : 14,
          minWidth: responsive.md ? 200 : 150,
          textAlign: "center"
        }}>
          {activeCategory} ({getProductsByCategory(activeCategory).length})
        </Text>

        <Button
          type="primary"
          onClick={handleNext}
          disabled={!hasNext}
          icon={responsive.md ? null : <RightOutlined/>}
          style={{
            backgroundColor: hasNext ? "#8B4513" : "rgba(139, 69, 19, 0.4)",
            borderColor: hasNext ? "#8B4513" : "rgba(139, 69, 19, 0.3)",
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