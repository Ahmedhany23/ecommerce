"use client";
import { Button, Col, Form, Input, message, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";

type FieldForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePasswordForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = React.useState(false);

  const [form] = useForm();

  const handleChangePassword = async (values: FieldForm) => {
    setLoading(true);
    const res = await fetch("/api/account/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (!res.ok) {
      messageApi.error(data.error);
    } else {
      form.resetFields();
      messageApi.success("Password updated successfully");
    }

    setLoading(false);
  };

  return (
    <>
      {contextHolder}

      <Form form={form} layout="vertical" onFinish={handleChangePassword}>
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <h2 className="mb-4 text-xl font-bold">Change Password</h2>
          </Col>

          <Col xs={24}>
            <Form.Item<FieldForm>
              label="Current Password"
              name="currentPassword"
              rules={[
                { required: true, message: "Enter your current password" },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item<FieldForm>
              label="New Password"
              name="newPassword"
              rules={[{ required: true, message: "Enter your new password" }]}
            >
              <Input.Password size="large" />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item<FieldForm>
              label="Confirm New Password"
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                { required: true, message: "Confirm your new password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Passwords do not match!");
                  },
                }),
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <div className="flex justify-end">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                disabled={loading}
              >
                Update Password
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ChangePasswordForm;
