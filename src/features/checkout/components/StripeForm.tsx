"use client";
import convertToSubCurrency from "@/src/lib/convertToSubcurrency";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button, Col, Form, Row, Skeleton } from "antd";
import { useEffect, useState } from "react";

const StripeForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!stripe || !elements) return;

    setLoading(true);

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (result.error) {
      setErrorMessage(result.error.message || "Something went wrong");
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex w-full flex-col gap-3">
        <Skeleton.Input active size="large" />
        <Skeleton.Input active size="large" />
        <Skeleton.Input active size="large" />
      </div>
    );
  }

  return (
    <Form onFinish={handleSubmit}>
      <Row gutter={[16, 16]}>
        <Col xs={24}>{clientSecret && <PaymentElement />}</Col>
        <Col xs={24}>{errorMessage && <p>{errorMessage}</p>}</Col>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          disabled={!stripe || loading}
          loading={loading}
          className="w-full"
        >
          Pay ${amount}
        </Button>
      </Row>
    </Form>
  );
};

export default StripeForm;
