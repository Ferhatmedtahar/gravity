import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-[#141619]  grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <Navbar />
      <h1 className="text-4xl font-bold ">Gravity</h1>
      <p className="text-2xl text-center">
        A simple and modern Crypto Market built with Next.js and Tailwind CSS.
      </p>
    </div>
  );
}
