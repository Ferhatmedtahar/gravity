import Image from "next/image";
import Link from "next/link";
import Button from "../../common/button/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center gap-12 md:gap-16 lg:gap-20  sm:my-14 my-10"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center max-w-4xl ">
        {/** title with background */}
        <div className=" ">
          <h2 className=" text-2xl sm:text-4xl md:text-6xl  font-medium ">
            Join Gravity Team
          </h2>

          <Image
            src="/blobs/blue-blob.png"
            alt="blobs"
            width={500}
            height={100}
            className="  blur-xl  opacity-60 absolute -top-0 -left-[40%] sm:-left-[20%] lg:-left-[30%] -z-10 focus:outline-none   cursor-default  animate-spin "
            aria-label="Blob"
          />
          <Image
            src="/blobs/gold-blob.png"
            alt="blobs"
            width={500}
            height={400}
            className="   blur-3xl  opacity-90 absolute -top-10 -left-[60%] sm:-left-[30%] lg:-left-[40%] -z-10 focus:outline-none   cursor-default  animate-spin-and-go "
            aria-label="Blob"
          />
        </div>

        {/** text join */}
        <div className="flex flex-col text-center md:text-start ">
          <p className="  text-sm sm:text-base md:text-lg leading-6  sm:max-w-md md:max-w-xl mx-auto my-4 md:my-6">
            Join our community of innovators, problem solvers and owners who
            apply scientific discovery techniques to make crypto markets a
            better place for everyone.
          </p>
          <p className="  text-sm sm:text-base md:text-lg leading-6 sm:max-w-md md:max-w-xl mx-auto my-1 md:my-2">
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

      {/*contact us  blobs */}

      <div className="relative flexCenter flex-col gap-8 sm:gap-12 mt-14">
        <h2 className="uppercase text-xl sm:text-3xl md:text-4xl   ">
          contact us
        </h2>

        <p className="text-center text-sm sm:text-base md:text-lg leading-6 sm:max-w-md md:max-w-xl mx-auto ">
          We are always open to discuss new value-adding partnerships. Do reach
          out if you are an exchange or a project looking for liquidity; an
          algorithmic trader or a software developer looking to improve the
          markets with us or just have a great idea you can’t wait to share with
          us! Get In Touch
        </p>
        <Button variant="primary" size="large">
          get in touch
        </Button>
        <Image
          src="/blobs/purple-blob.png"
          alt="blobs"
          width={500}
          height={100}
          className="   blur-2xl opacity-90 absolute -top-[50%]   -z-10 focus:outline-none   cursor-default  animate-spin-and-go "
          aria-label="Blob"
        />
        <Image
          src="/blobs/blue-blob.png"
          alt="blobs"
          width={500}
          height={100}
          className="   blur-3xl opacity-90 absolute -top-0 -left-[40%] sm:-left-[20%] lg:-left-[30%] -z-10 focus:outline-none   cursor-default  animate-spin-and-go "
          aria-label="Blob"
        />
        <Image
          src="/blobs/gold-blob.png"
          alt="blobs"
          width={200}
          height={200}
          className="   blur-xs  opacity-90 absolute -bottom-10 -left-[60%] sm:-left-[30%] lg:left-[40%] -z-10 focus:outline-none   cursor-default  animate-pulse "
          aria-label="Blob"
        />
      </div>
    </section>
  );
}
