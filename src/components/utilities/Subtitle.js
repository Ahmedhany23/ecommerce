import Link from "next/link";

export default function Subtitle({ title, btnTitle, path = "/" }) {
  return (
    <div className="flex justify-between pt-4 px-2">
      <p className=" text-ltext text-xl ">{title}</p>
      {btnTitle && (
        <Link href={path} className="text-ltext rounded-2xl hover:bg-white duration-200 hover:text-slate-900 border p-2 cursor-pointer">
          {btnTitle}
        </Link>
      )}
    </div>
  );
}
