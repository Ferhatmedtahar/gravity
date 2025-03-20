import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center gap-2  sm:my-14 my-10"
    >
      <div className="flex gap-20 items-center max-w-4xl">
        {/** title with background */}
        <div className=" ">
          <h2 className=" text-2xl sm:text-4xl md:text-6xl  ">
            Join Gravity Team
          </h2>
          <div className="">
            <Image
              src="/blobs/blue-blob.png"
              alt="blobs"
              width={500}
              height={100}
              className="  blur-md  opacity-50 absolute -top-0 -left-[40%] sm:-left-[20%] lg:-left-[30%] -z-10 focus:outline-none   cursor-default  animate-spin "
              aria-label="Blob"
            />
            <Image
              src="/blobs/gold-blob.png"
              alt="blobs"
              width={500}
              height={400}
              className="   blur-xs  opacity-90 absolute -top-10 -left-[60%] sm:-left-[30%] lg:-left-[40%] -z-10 focus:outline-none   cursor-default  animate-spin "
              aria-label="Blob"
            />
          </div>
        </div>

        {/** text join */}
        <div className="flex flex-col">
          <p className=" text-start text-sm sm:text-base md:text-lg leading-8 sm:max-w-md md:max-w-xl mx-auto my-4 md:my-6">
            Join our community of innovators, problem solvers and owners who
            apply scientific discovery techniques to make crypto markets a
            better place for everyone.
          </p>
          <p className=" text-start text-sm sm:text-base md:text-lg leading-8 sm:max-w-md md:max-w-xl mx-auto my-1 md:my-2">
            As we emphasize it in our name – Gravity Team, we are a team. A team
            of bright, talented people, each masters of their specialty, curious
            about the world and eager to solve the new exciting cryptocurrency
            market problems, build cool stuff and have fun whilst doing so!
          </p>
          <Link href="/">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl purple-gradient">
              Learn more about working with us →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
