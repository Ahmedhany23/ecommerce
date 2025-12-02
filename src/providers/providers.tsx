"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React from "react";

import { SessionProvider } from "next-auth/react";

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
        token: {
          fontFamily: "Poppins",
        },
        components: {
          Message: {
            ...antdStyle,
          },
        },
      }}
    >
      <AntdRegistry>
        <SessionProvider>{children}</SessionProvider>
      </AntdRegistry>
    </ConfigProvider>
  );
};

export default Providers;
