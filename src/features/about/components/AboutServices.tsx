import {
  DollarOutlined,
  ShopOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";

const services = [
  {
    icon: (
      <ShopOutlined className="text-4xl text-white! transition duration-200 group-hover:text-black!" />
    ),
    number: "10.5k",
    title: "Sallers active our site",
  },
  {
    icon: (
      <DollarOutlined className="text-4xl text-white! transition duration-200 group-hover:text-black!" />
    ),
    number: "33k",
    title: "Mopnthly Produduct Sale",
  },
  {
    icon: (
      <ShoppingOutlined className="text-4xl text-white! transition duration-200 group-hover:text-black!" />
    ),
    number: "45.5k",
    title: "Customer active in our site",
  },
  {
    icon: (
      <DollarOutlined className="text-4xl text-white! transition duration-200 group-hover:text-black!" />
    ),
    number: "25k",
    title: "Anual gross sale in our site",
  },
];

export default function AboutServices() {
  return (
    <section className="section-container">
      <Row gutter={[16, 16]} justify="center" align="middle">
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} lg={6}>
            <div className="group border-text-muted hover:bg-accent-danger mx-2 flex flex-col items-center rounded-md border px-[29px] py-[30px] transition duration-200 hover:border-none lg:mx-0">
              {" "}
              {/* Icon */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#2F2E30]/30 transition duration-200 group-hover:bg-white/30">
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-black transition duration-200 group-hover:bg-white">
                  {service.icon}
                </div>
              </div>
              {/* Service Details */}
              <div className="text-center">
                <p className="font-inter text-[2rem] font-bold transition duration-200 group-hover:text-white">
                  {service.number}
                </p>
                <p className="text-base font-normal transition duration-200 group-hover:text-white">
                  {service.title}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
