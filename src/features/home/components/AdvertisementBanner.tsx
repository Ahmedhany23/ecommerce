import { CountdownAdvertisementTimer } from "@/src/features/home/components/CountdownAdvertisementTimer";
import { Button } from "antd";
import Image from "next/image";

const AdvertisementBanner = () => {
  return (
    <section className="section-container overflow-hidden">
      <div className="flex w-full flex-col items-center justify-center gap-[27px] rounded-md bg-black md:h-[500px] md:flex-row md:px-11">
        <div className="flex flex-col items-center justify-center gap-8 py-[69px] sm:items-start sm:justify-normal">
          <p className="text-accent-success">Categories</p>
          <h4 className="max-w-[443px] text-center text-3xl text-white sm:text-left sm:text-4xl lg:text-5xl lg:leading-[60px]">
            Enhance Your Music Experience
          </h4>

          <CountdownAdvertisementTimer />

          <div className="mt-[7px]">
            <Button
              type="link"
              size="large"
              className="border-white! text-white!"
            >
              Buy Now!
            </Button>
          </div>
        </div>
        <div className="relative flex h-full w-full max-w-[600px] items-center">
          <Image
            src="/images/jbl-speaker.png"
            alt="Jbl Speaker"
            width={600}
            height={500}
            className="z-10 w-full max-w-[568px] object-contain object-center sm:h-[330px]"
          />
          <div className="absolute top-0 right-0 bottom-0 left-10 rounded-full bg-[#d9d9d9] opacity-60 blur-3xl sm:h-[500px] sm:w-[504px]"></div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementBanner;
