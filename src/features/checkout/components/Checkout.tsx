"use client";
import { type Session } from "next-auth";

import { Suspense, useState } from "react";
import BillingDetailsForm, {
  BillingDetailsSkeleton,
} from "./BillingDetailsForm";
import { Col, Row } from "antd";
import StripeCheckout, { IBillingDetails } from "./StripeCheckout";

const Checkout = ({ user }: { user?: Session["user"] }) => {
  const [billingDetails, setBillingDetails] = useState<IBillingDetails>(
    {} as IBillingDetails,
  );

  return (
    <Row gutter={[50, 50]} justify={"space-between"} align={"middle"}>
      <Col xs={24} md={12} xl={10}>
        <Suspense fallback={<BillingDetailsSkeleton />}>
          <BillingDetailsForm setBillingDetails={setBillingDetails} />
        </Suspense>
      </Col>
      <Col xs={24} md={12} xl={8}>
        <StripeCheckout billingDetails={billingDetails} />
      </Col>
    </Row>
  );
};

export default Checkout;
