import { Button, Tooltip, theme } from "antd";
import { BulbFilled, BulbOutlined } from "@ant-design/icons";
import { useTheme } from "../hooks/useTheme";
import { useResponsive } from "antd-style";

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useTheme();
  const { token } = theme.useToken();
  const isDark = mode === "dark";
  const responsive = useResponsive();

  const button = (
    <Button
      type="default"
      shape="circle"
      icon={isDark ? <BulbFilled/> : <BulbOutlined/>}
      onClick={toggleTheme}
      style={{
        fontSize: 20,
        color: "#1677FF",
        width: responsive.md ? 50 : 40,
        height: responsive.md ? 50 : 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isDark ? token.colorBgContainer : "#FFFFFF",
        border: `1px solid ${token.colorBorderSecondary}`,
        boxShadow: token.boxShadowSecondary
      }}
    />
  );

  if (!responsive.md) {
    return button;
  }

  return (
    <Tooltip title={isDark ? "Включить светлую тему" : "Включить темную тему"}>
      {button}
    </Tooltip>
  );
};

export default ThemeSwitcher;