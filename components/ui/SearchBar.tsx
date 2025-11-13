"use client";

import { Form, Input, Button, Space } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { SearchOutlined } from "@ant-design/icons";
export const SearchBar = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    router.push(`/search?query=${value}`, { scroll: false });
  };

  return (
    <Form onFinish={handleSubmit} className="w-full">
      <Space.Compact style={{ width: "100%" }}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What are you looking for?"
        />
        <Button htmlType="submit">
          <SearchOutlined />
        </Button>
      </Space.Compact>
    </Form>
  );
};
