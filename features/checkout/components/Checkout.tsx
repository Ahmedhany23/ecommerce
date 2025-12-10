"use client";

import { Col, Row } from "antd";
import { Suspense, useState } from "react";
import BillingDetailsForm, {
  BillingDetailsSkeleton,
} from "./BillingDetailsForm";
import StripeCheckout, { IBillingDetails } from "./StripeCheckout";

const Checkout = () => {
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
