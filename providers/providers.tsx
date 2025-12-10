"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";
import React from "react";

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
  const queryClient = new QueryClient();

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
        {" "}
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </SessionProvider>
      </AntdRegistry>
    </ConfigProvider>
  );
};

export default Providers;
