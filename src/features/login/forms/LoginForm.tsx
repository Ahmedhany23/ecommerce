"use client";

import { Button, Form, Input, message } from "antd";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const res = await signIn("credentials", {
        email: values.email.toLowerCase(),
        password: values.password,
        redirect: false, // no redirect
      });

      if (!res) {
        messageApi.error("No response from server");
        return;
      }

      if (res.ok) {
        messageApi.success("Logged in successfully");
        router.push("/");
        router.refresh();
      } else {
        // Show proper message
        if (res.error === "CredentialsSignin")
          messageApi.error("Invalid email or password");
        else messageApi.error(res.error || "Login failed");
      }
    } catch (error) {
      console.error("LOGIN ERROR CATCH:", error);
      messageApi.error("Unexpected error");
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        className="w-full space-y-10"
        layout="vertical"
        onFinish={handleLogin}
      >
        {/* Header */}
        <div className="space-y-5">
          <h4 className="font-poppins text-4xl font-medium">
            Log in to Exclusive
          </h4>
          <p className="font-poppins text-md">Enter your details below</p>
        </div>

        {/* Email */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Email" size="large" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter your password" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Login
          </Button>
        </Form.Item>

        {/* Footer */}
        <div className="space-y-5">
          <p className="font-poppins text-md">
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <span className="text-black! underline!">Sign up</span>
            </Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
