import Link from "next/link"
export default function notfound() {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-lbackground">
    <div className="rounded-lg bg-white p-8 text-center shadow-xl">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
      <Link href="/" className="mt-4 inline-block rounded bg-lsecondary px-4 py-2 font-semibold text-white hover:bg-laccent"> Go back to Home </Link>
    </div>
  </div>
  )
}
