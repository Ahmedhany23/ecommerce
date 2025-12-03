import { Button } from "antd";
import Link from "next/link";

export const metadata = {
  title: "Congratulations",
};

const PaymentSuccess = async ({
  searchParams,
}: {
  searchParams: { amount: string };
}) => {
  const { amount } = await searchParams;

  return (
    <section className="section-container">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="font-poppins text-4xl font-medium text-black md:text-6xl lg:text-9xl">
          Congratulations
        </h1>
        <p className="text-xs font-normal text-black sm:text-base">
          You have successfully paid ${amount}
        </p>{" "}
        <Link href="/">
          <Button type="primary" size="large">
            Back to home page
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PaymentSuccess;
