import { Button, Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

const ContactForm = () => {
  return (
    <Form className="h-full w-full rounded bg-white p-8! shadow-xl">
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} lg={8}>
          <Input type="text" placeholder="Your Name *" size="large" />
        </Col>
        <Col xs={24} lg={8}>
          <Input
            type="email"
            placeholder="Your Email *"
            required
            size="large"
          />
        </Col>
        <Col xs={24} lg={8}>
          <Input type="tel" placeholder="Your Phone *" required size="large" />
        </Col>
        <Col xs={24}>
          <TextArea placeholder="Your Message" rows={8} size="large" />
        </Col>
        <Col xs={24}>
          <div className="flex justify-end">
            <Button type="primary" htmlType="submit" size="large">
              Send Message
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
