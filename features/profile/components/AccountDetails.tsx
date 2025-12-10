"use client";

import { KeyOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";

import ChangePasswordForm from "./ChangePasswordForm";
import Orders from "./Orders";

const AccountDetails = ({
  user,
}: {
  user: { name: string | null; email: string | null; createdAt: Date };
}) => {
  const [activeTab, setActiveTab] = useState("profile");

  if (!user) return null;

  const tabList = [
    {
      key: "profile",
      tab: (
        <span className="flex items-center gap-2">
          <UserOutlined />
          Profile
        </span>
      ),
    },
    {
      key: "orders",
      tab: (
        <span className="flex items-center gap-2">
          <ShoppingOutlined />
          Orders
        </span>
      ),
    },
    {
      key: "change-password",
      tab: (
        <span className="flex items-center gap-2">
          <KeyOutlined />
          Change Password
        </span>
      ),
    },
  ];

  const contentList: Record<string, React.ReactNode> = {
    profile: (
      <div className="space-y-4">
        <div className="rounded-md border bg-gray-50 p-4">
          <p className="text-gray-500">Name</p>
          <p className="font-semibold">{user.name ?? "No Name"}</p>
        </div>
        <div className="rounded-md border bg-gray-50 p-4">
          <p className="text-gray-500">Email</p>
          <p className="font-semibold">{user.email ?? "No Email"}</p>
        </div>
        <div className="rounded-md border bg-gray-50 p-4">
          <p className="text-gray-500">Account Created</p>
          <p className="font-semibold">{user.createdAt.toDateString()}</p>
        </div>
      </div>
    ),
    "change-password": <ChangePasswordForm />,
    orders: <Orders />,
  };

  return (
    <div className="mx-auto h-full w-full max-w-4xl rounded p-4">
      <Card
        title={<h1 className="text-2xl font-bold">Account Settings</h1>}
        tabList={tabList}
        activeTabKey={activeTab}
        onTabChange={(key) => {
          setActiveTab(key);
        }}
        className="shadow-xl"
      >
        {contentList[activeTab]}
      </Card>
    </div>
  );
};

export default AccountDetails;
