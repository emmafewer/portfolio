import Image from "next/image";
import { playfairDisplay } from "@/app/ui/fonts";
import ImageSwap from "@/app/ui/imageSwap";

export default function Home() {
  return (
    <div
      className={
        "flex flex-col px-6 md:px-24 lg:px-32 2xl:px-56 gap-10 md:gap-24"
      }
    >
      {/*Heading Section*/}
      <div className={"flex flex-col sm:flex-row gap-x-10 gap-y-4"}>
        <Image
          src="/profile.png"
          width={165}
          height={200}
          className={"rounded-full sm:h-auto sm:w-auto w-[165px] h-[200px]"}
          alt={"profile-pic"}
        />
        <div className={"content-center"}>
          <h1
            className={`${playfairDisplay.className} mb-4 text-4xl md:text-7xl`}
          >
            Emma Fewer
          </h1>
          <span className={"flex flex-row"}>
            <p className={`text-xl md:text-4xl`}>
              Product-focused full stack engineer
            </p>
            <Image
              className={"animate-spin-slow sm:h-auto sm:w-auto"}
              src="/asterisk.svg"
              width={20}
              height={20}
              alt={"asterisk"}
            />
          </span>
        </div>
      </div>
      {/*About Section*/}
      <div className={"flex flex-row"}>
        <div
          className={
            "ml-0 sm:pl-10 sm:border-solid sm:border-l sm:border-black"
          }
        >
          <h1
            className={`${playfairDisplay.className} mb-4 text-xl md:text-5xl`}
          >
            About Me
          </h1>
          <span
            className={"flex flex-col lg:flex-row gap-10 lg:gap-20 2xl:gap-40"}
          >
            <p className={`text-l md:text-base`}>
              I love to ride bikes. Mountain, gravel, road, and cyclocross - we
              have it all here in Montana. But my favorite is road cycling
              because I love the teamwork, coordination, and grit of being in a
              pace line, as well as the strategic thinking for that perfectly
              timed breakaway. Recently, I&#39;ve been coaching a cross-country
              after school program for elementary kids.
              <br />
              <br />
              The central theme between my personal and professional life is
              human connection. Whether it&#39;s being a welcoming face to my
              colleagues, collaborating with product and engineering teams to
              design architectures that meet complex requirements, or working
              closely with end users to create products they love using, I
              thrive on building meaningful relationships. I enjoy the pressure
              and excitement of delivering important features under tight
              deadlines and excel in independently managing end-to-end app
              development.
            </p>
            <ImageSwap />
          </span>
        </div>
      </div>
    </div>
  );
}
