import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React from "react";
import MainLayout from "../components/layout/MainLayout";
import ScrollContext from "../context/ScrollContext";

const antdStyle = {
  contentBg: "#f5f5f5", // background
  borderRadiusLG: 8, // border radius
  padding: 20, // padding
  fontSize: 16, // text size
  fontFamily: "Poppins",
  colorSuccess: "#10b981",
  colorError: "#ef4444",
  colorWarning: "#f59e0b",
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Message: {
            ...antdStyle,
          },
        },
      }}
    >
      <AntdRegistry>
        <MainLayout>
          <ScrollContext>{children}</ScrollContext>
        </MainLayout>
      </AntdRegistry>
    </ConfigProvider>
  );
};

export default Providers;
