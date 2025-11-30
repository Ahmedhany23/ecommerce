"use client";

import { User } from "@/generated/prisma/browser";
import { Col, Row } from "antd";
import ChangePasswordForm from "./ChangePasswordForm";

const AccountDetails = ({ user }: { user: User }) => {
  if (!user) return null;

  return (
    <div className="mx-auto! h-full w-full max-w-3xl rounded bg-white p-8! shadow-xl">
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <h2 className="mb-4 text-2xl font-bold">Account Details</h2>

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
        </Col>
      </Row>
      <div className="my-6 border-b"></div>

      <ChangePasswordForm />
    </div>
  );
};

export default AccountDetails;
