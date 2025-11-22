import ContactForm from "@/src/features/contact/components/ContactForm";
import ContactUs from "@/src/features/contact/components/ContactUs";
import { Breadcrumb, Col, Row } from "antd";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function Contact() {
  return (
    <main>
      <section className="section-container">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: "Contact",
            },
          ]}
        />

        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} lg={6}>
            <ContactUs />
          </Col>
          <Col xs={24} lg={16}>
            <ContactForm />
          </Col>
        </Row>
      </section>
    </main>
  );
}
