import { Button, Tooltip, theme } from "antd";
import { BulbFilled, BulbOutlined } from "@ant-design/icons";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useTheme();
  const { token } = theme.useToken();
  const isDark = mode === "dark";

  return (
    <Tooltip title={isDark ? "Включить светлую тему" : "Включить темную тему"}>
      <Button
        type="default"
        shape="circle"
        icon={isDark ? <BulbFilled/> : <BulbOutlined/>}
        onClick={toggleTheme}
        style={{
          fontSize: 20,
          color: "#1677FF",
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isDark ? token.colorBgContainer : "#FFFFFF",
          border: `1px solid ${token.colorBorderSecondary}`,
          boxShadow: token.boxShadowSecondary
        }}
      />
    </Tooltip>
  );
};

export default ThemeSwitcher;