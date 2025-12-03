"use client";
import {
  Checkbox,
  CheckboxChangeEvent,
  Form,
  Input,
  Skeleton,
  Space,
} from "antd";
import React, { useEffect, useState } from "react";

const BillingDetailsForm = ({
  setBillingDetails,
}: {
  setBillingDetails: React.Dispatch<React.SetStateAction<{}>>;
}) => {
  const [form] = Form.useForm();

  const [stored, setStored] = useState<{} | null>(null);

  const handleSaveInformation = (e: CheckboxChangeEvent) => {
    form.validateFields().then((values) => {
      setBillingDetails(values);
      if (e.target.checked)
        localStorage.setItem("billingDetails", JSON.stringify(values));
      else localStorage.removeItem("billingDetails");
    });
  };

  useEffect(() => {
    // Safe access inside browser
    const item =
      typeof window !== "undefined"
        ? localStorage.getItem("billingDetails")
        : null;

    if (item) {
      const parsed = JSON.parse(item);
      setStored(parsed);
      setBillingDetails(parsed);
      form.setFieldsValue(parsed);
    }
  }, []);

  return (
    <Form form={form} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
      <h3 className="font-inter my-5 text-4xl font-medium">Billing Details</h3>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input
          type="text"
          size="large"
          onChange={(e) =>
            setBillingDetails((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
      </Form.Item>
      <Form.Item name="company_name" label="Company Name">
        <Input
          type="text"
          size="large"
          onChange={(e) =>
            setBillingDetails((prev) => {
              return { ...prev, company_name: e.target.value };
            })
          }
        />
      </Form.Item>
      <Form.Item
        name="street_address"
        label="Street Address"
        rules={[{ required: true }]}
      >
        <Input
          type="text"
          size="large"
          onChange={(e) =>
            setBillingDetails((prev) => {
              return { ...prev, street_address: e.target.value };
            })
          }
        />
      </Form.Item>

      <Form.Item name="apartment" label="Apartment, floor, etc. (optional)">
        <Input
          type="text"
          size="large"
          onChange={(e) =>
            setBillingDetails((prev) => {
              return { ...prev, apartment: e.target.value };
            })
          }
        />
      </Form.Item>
      <Form.Item name="city" label="Town/City" rules={[{ required: true }]}>
        <Input
          type="text"
          size="large"
          onChange={(e) =>
            setBillingDetails((prev) => {
              return { ...prev, city: e.target.value };
            })
          }
        />
      </Form.Item>
      <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
        <Input
          type="text"
          size="large"
          onChange={(e) =>
            setBillingDetails((prev) => {
              return { ...prev, phone: e.target.value };
            })
          }
        />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input
          type="text"
          size="large"
          onChange={(e) =>
            setBillingDetails((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />
      </Form.Item>

      <Checkbox
        defaultChecked={stored !== null}
        onChange={handleSaveInformation}
        disabled={!form.isFieldsTouched()}
      >
        Save this information for next time
      </Checkbox>
    </Form>
  );
};

export default BillingDetailsForm;

export const BillingDetailsSkeleton = () => {
  return (
    <div>
      <Skeleton.Input
        active
        style={{ width: 200, height: 32, marginBottom: 20 }}
      />

      <Space direction="vertical" style={{ width: "100%" }} size={24}>
        {/* Name */}
        <div>
          <Skeleton.Input style={{ width: 120, marginBottom: 8 }} active />
          <Skeleton.Input style={{ width: "100%", height: 40 }} active />
        </div>

        {/* Company Name */}
        <div>
          <Skeleton.Input style={{ width: 150, marginBottom: 8 }} active />
          <Skeleton.Input style={{ width: "100%", height: 40 }} active />
        </div>

        {/* Street Address */}
        <div>
          <Skeleton.Input style={{ width: 160, marginBottom: 8 }} active />
          <Skeleton.Input style={{ width: "100%", height: 40 }} active />
        </div>

        {/* Apartment */}
        <div>
          <Skeleton.Input style={{ width: 260, marginBottom: 8 }} active />
          <Skeleton.Input style={{ width: "100%", height: 40 }} active />
        </div>

        {/* City */}
        <div>
          <Skeleton.Input style={{ width: 120, marginBottom: 8 }} active />
          <Skeleton.Input style={{ width: "100%", height: 40 }} active />
        </div>

        {/* Phone */}
        <div>
          <Skeleton.Input style={{ width: 160, marginBottom: 8 }} active />
          <Skeleton.Input style={{ width: "100%", height: 40 }} active />
        </div>

        {/* Email */}
        <div>
          <Skeleton.Input style={{ width: 100, marginBottom: 8 }} active />
          <Skeleton.Input style={{ width: "100%", height: 40 }} active />
        </div>

        {/* Checkbox */}
        <div style={{ marginTop: 10 }}>
          <Skeleton.Input style={{ width: 220, height: 20 }} active />
        </div>
      </Space>
    </div>
  );
};
