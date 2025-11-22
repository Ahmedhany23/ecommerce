import Link from "next/link";

export const Banner = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex flex-row items-center justify-center gap-10 px-2 py-4">
        <p className="font-poppins text-xs font-normal text-white sm:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link
            className="font-poppins ml-1 text-xs font-semibold text-white underline decoration-white sm:text-sm"
            href="/products"
          >
            ShopNow
          </Link>
        </p>
        <select className="bg-black text-xs text-white sm:text-sm">
          <option value="EN">English</option>
          <option value="AR">Arabic</option>
        </select>
      </div>
    </div>
  );
};
