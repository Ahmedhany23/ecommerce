import { SectionTitle } from "@/components/ui/SectionTitle";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const BrowseByCategory = () => {
  const categories = [
    {
      title: "Phones",
      image: "/icons/phone_white.png",
      imageHover: "/icons/phone_black.png",
    },
    {
      title: "Computers",
      image: "/icons/computer_white.png",
      imageHover: "/icons/computer_black.png",
    },
    {
      title: "SmartWatch",
      image: "/icons/smartwatch_white.png",
      imageHover: "/icons/smartwatch_black.png",
    },
    {
      title: "Camera",
      image: "/icons/camera_white.png",
      imageHover: "/icons/camera_black.png",
    },
    {
      title: "HeadPhones",
      image: "/icons/headphone_white.png",
      imageHover: "/icons/headphone_black.png",
    },
    {
      title: "Gaming",
      image: "/icons/gamepad_white.png",
      imageHover: "/icons/gamepad_black.png",
    },
  ];

  return (
    <section className="section-container">
      <div className="relative container mx-auto px-2 sm:px-0">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center gap-20">
          <SectionTitle title={"Categories"}>
            <h1 className="font-inter text-3xl font-semibold text-black">
              Browse By Category
            </h1>
          </SectionTitle>
        </div>

        <Row gutter={[16, 16]}>
          {categories.map((category, index) => (
            <Col key={index} xs={24} sm={12} md={8} xl={4}>
              <CategoryCard
                title={category.title}
                image={category.image}
                imageHover={category.imageHover}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default BrowseByCategory;

export const CategoryCard = ({
  title,
  image,
  imageHover,
}: {
  title: string;
  image: string;
  imageHover: string;
}) => {
  return (
    <Link href={`/products?categories=${title.toLocaleLowerCase()}`}>
      <div className="border-surface-alt group hover:bg-accent-danger transtion mx-auto flex h-[145px] w-[170px] flex-col items-center justify-center gap-4 rounded border py-[25px] duration-200 hover:border-none">
        <Image
          width={56}
          height={56}
          src={image}
          alt={title}
          className="mx-auto hidden h-14 w-14 group-hover:block"
        />
        <Image
          width={56}
          height={56}
          src={imageHover}
          alt={title}
          className="mx-auto block h-14 w-14 group-hover:hidden"
        />
        <p className="text-black group-hover:text-white">{title}</p>
      </div>
    </Link>
  );
};
