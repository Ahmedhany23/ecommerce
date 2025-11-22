import { SectionTitle } from "@/src/components/ui/SectionTitle";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const NewArrival = () => {
  return (
    <section className="section-container overflow-hidden">
      <div className="relative container mx-auto px-2 sm:px-0">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center gap-20">
          <SectionTitle title={"Featured"}>
            <h1 className="font-inter text-3xl font-semibold text-black">
              New Arrival
            </h1>
          </SectionTitle>
        </div>

        {/* Grid */}
        <Row gutter={[16, 16]} align={"middle"} justify={"center"}>
          {/* Left PS5 Card */}
          <Col xs={24} xl={12}>
            <div className="relative mx-auto h-[400px] w-full max-w-[570px] rounded bg-black px-[30px] pt-[89px] sm:h-[600px]">
              <Image
                src="/images/ps5.png"
                alt="ps5"
                fill
                className="right-0 bottom-0 left-0 object-contain object-center"
              />
              <div className="relative z-10 flex h-full max-w-[255px] flex-col justify-end gap-4 pb-6 pl-6">
                <h4 className="font-inter text-2xl font-semibold whitespace-nowrap text-white">
                  PlayStation 5
                </h4>
                <p className="text-sm text-white">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Link
                  href={"/shop"}
                  className="w-fit border-b border-white font-medium text-white!"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </Col>

          {/* Right Side */}
          <Col xs={24} xl={8}>
            <Row gutter={[30, 30]}>
              {/* Women’s Collection */}
              <Col span={24}>
                <div className="relative h-[284px] w-full rounded bg-[#1a1717]">
                  <div className="relative z-10 flex h-full max-w-[255px] flex-col justify-end gap-4 pb-6 pl-6">
                    <h4 className="font-inter text-2xl font-semibold whitespace-nowrap text-white">
                      Women’s Collections
                    </h4>
                    <p className="text-sm text-white">
                      Featured woman collections that give you another vibe.
                    </p>
                    <Link
                      href={"/shop"}
                      className="w-fit border-b border-white font-medium text-white!"
                    >
                      Shop Now
                    </Link>
                  </div>

                  <Image
                    src="/images/woman.png"
                    alt="woman"
                    width={570}
                    height={600}
                    className="absolute right-0 bottom-0 h-full w-full"
                  />
                </div>
              </Col>

              {/* Speakers + Perfume */}
              <Col xs={24} sm={12}>
                <div className="relative mx-auto flex h-[284px] w-full max-w-[270px] items-center justify-center bg-black py-[30px] pr-[55px] pl-[24px]">
                  <Image
                    src="/images/speakers.png"
                    alt="speakers"
                    width={200}
                    height={284}
                    className="absolute top-[50%] left-[50%] z-10 -translate-x-1/2 -translate-y-1/2 object-contain object-center"
                  />
                  <div className="bg-opacity-90 absolute top-7 right-0 bottom-0 left-0 z-0 h-[196px] w-[196px] bg-[#D9D9D9] blur-2xl" />
                  <div className="relative z-20 flex h-full max-w-[255px] flex-col justify-end gap-2">
                    <h4 className="font-inter text-2xl font-semibold whitespace-nowrap text-white">
                      Speakers
                    </h4>
                    <p className="text-sm text-white">
                      Amazon wireless speakers
                    </p>
                    <Link
                      href={"/shop"}
                      className="w-fit border-b border-white font-medium text-white!"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={12}>
                <div className="relative mx-auto flex h-[284px] w-full max-w-[270px] items-center justify-center bg-black py-[30px] pr-[55px] pl-[24px]">
                  <Image
                    src="/images/perfume.png"
                    alt="perfume"
                    width={200}
                    height={284}
                    className="absolute top-[50%] left-[50%] z-10 -translate-x-1/2 -translate-y-1/2 object-contain object-center"
                  />
                  <div className="bg-opacity-90 absolute top-7 right-0 bottom-0 left-0 h-[196px] w-[196px] bg-[#D9D9D9] blur-3xl" />
                  <div className="relative z-20 flex h-full max-w-[255px] flex-col justify-end gap-2">
                    <h4 className="font-inter text-2xl font-semibold whitespace-nowrap text-white">
                      Perfume
                    </h4>
                    <p className="text-sm text-white">GUCCI INTENSE OUD EDP</p>
                    <Link
                      href={"/shop"}
                      className="w-fit border-b border-white font-medium text-white!"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default NewArrival;
