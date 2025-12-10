import { Button } from "antd";
import Link from "next/link";

export const metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <section className="section-container">
      {/* Not Found */}
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="font-poppins text-4xl font-medium text-black md:text-6xl lg:text-9xl">
          404 Not Found
        </h1>
        <p className="text-xs font-normal text-black sm:text-base">
          Your visited page not found. You may go home page.
        </p>{" "}
        <Link href="/" >
          <Button type="primary" size="large">
            Back to home page
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
