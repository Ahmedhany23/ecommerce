import Services from "@/src/components/Services";
import AboutCardSkeleton from "@/src/features/about/components/AboutCardSkeleton";
import AboutCarousel from "@/src/features/about/components/AboutCarousel";
import AboutServices from "@/src/features/about/components/AboutServices";
import { Breadcrumb, Col, Row } from "antd";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main>
      <section className="section-container">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: "About",
            },
          ]}
        />

        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} lg={8}>
            <div className="text-center sm:text-left">
              <h1 className="font-inter mb-10 text-6xl font-bold text-black">
                Our Story
              </h1>
              <p className="mb-6 text-base font-normal text-black">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p className="text-base font-normal text-black">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </Col>
          <Col xs={24} lg={14}>
            <Image
              src="/images/about.webp"
              alt="Two african Females"
              width={837}
              height={609}
              className="w-full rounded-md object-cover object-center"
            />
          </Col>
        </Row>

        <AboutServices />

        <Suspense fallback={<AboutCardSkeleton />}>
          <AboutCarousel />
        </Suspense>

        <Services />
      </section>
    </main>
  );
}
