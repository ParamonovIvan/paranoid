import { useState } from "react";
import { Image, Skeleton, Flex, theme } from "antd";

interface ProductImageProps {
  src?: string;
  alt: string;
  isSquare?: boolean;
}

const ProductImage = ({ src, alt, isSquare = false }: ProductImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { token } = theme.useToken();

  const height = isSquare ? 200 : 278;

  return (
    <Flex
      style={{
        position: "relative",
        width: "100%",
        height: height,
        backgroundColor: token.colorFillSecondary,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: "hidden"
      }}
    >
      {isLoading && (
        <Flex
          align="center"
          justify="center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1
          }}
        >
          <Skeleton.Image
            active
            style={{ width: "100%", height: "100%", borderRadius: 0 }}
          />
        </Flex>
      )}

      {src && (
        <Image
          src={src}
          alt={alt}
          preview={false}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: isSquare ? "contain" : "cover",
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.3s ease"
          }}
        />
      )}
    </Flex>
  );
};

export default ProductImage;