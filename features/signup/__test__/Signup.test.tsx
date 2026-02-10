import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupForm, { RegsiterFieldForm } from "../forms/SignupForm";

type FieldForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

jest.mock("next/link", () => {
  return function Link({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    return <a href={href}>{children}</a>;
  };
});

const messageApi = {
  success: jest.fn(),
  error: jest.fn(),
};

jest.mock("antd", () => {
  const React = require("react");

  function Form({ children, onFinish }: any) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFinish?.({
            name: "Ahmed",
            email: "ahmedhany22@hotmail.com",
            password: "123456",
            confirmPassword: "123456",
          });
        }}
      >
        {children}
      </form>
    );
  }

  Form.Item = ({ children }: any) => <div>{children}</div>;

  Form.useForm = () => [
    {
      setFieldsValue: jest.fn(),
    },
  ];

  function Input(props: any) {
    return <input {...props} />;
  }

  Input.Password = (props: any) => <input type="password" {...props} />;

  function Button({ children, htmlType }: any) {
    return (
      <button type={htmlType === "submit" ? "submit" : "button"}>
        {children}
      </button>
    );
  }

  return {
    Button,
    Form,
    Input,
    message: {
      useMessage: () => [messageApi, <div key="holder" />],
    },
  };
});

describe("RegisterForm handleSignup", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    pushMock.mockClear();
    messageApi.success.mockClear();
    messageApi.error.mockClear();
  });

  it("success: calls signUp, navigates to login", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    }) as any;

    const user = userEvent.setup();
    render(<SignupForm />);

    await user.click(screen.getByRole("button", { name: /Sign Up/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });


    expect(messageApi.success).toHaveBeenCalledWith("Account created successfully");

    expect(pushMock).toHaveBeenCalledWith("/login");
  });

  it("invalid credentials: shows error message from server", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Email already exists" }),
    }) as any;

    const user = userEvent.setup();
    render(<SignupForm />);

    await user.click(screen.getByRole("button", { name: /Sign Up/i }));

    await waitFor(() => {
      expect(messageApi.error).toHaveBeenCalledWith("Email already exists");
    });

    expect(pushMock).not.toHaveBeenCalled();
  });

  it("network failure: shows catch block error", async () => {
    // This triggers the 'catch' block
    global.fetch = jest.fn().mockRejectedValue(new Error("Network Error"));

    const user = userEvent.setup();
    render(<SignupForm />);

    await user.click(screen.getByRole("button", { name: /Sign Up/i }));

    await waitFor(() => {
      expect(messageApi.error).toHaveBeenCalledWith("Failed to sign up. Try again later.");
    });
  });
});