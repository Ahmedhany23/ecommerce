import { Row, Col } from "antd";
import Image from "next/image";

const services = [
  {
    imgLink: "/icons/delivery.png",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    imgLink: "/icons/customer.png",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    imgLink: "/icons/secure.png",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const Services = () => {
  return (
    <section className="section-container overflow-hidden">
      <Row
        gutter={[16, 16]}
        justify="center"
        align="middle"
      >
        {services.map((service, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            lg={8}
            className="flex justify-center"
          >
            <div className="mx-auto flex w-full max-w-[256px] flex-col items-center">
              {/* Icon */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#2F2E30]/30 transition duration-200">
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-black transition duration-200">
                  <Image
                    width={42}
                    height={42}
                    src={service.imgLink}
                    alt={service.title}
                    className="object-contain object-center"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-center">
                <p className="font-inter text-xl font-bold whitespace-nowrap">
                  {service.title}
                </p>
                <p className="font-inter text-sm font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
