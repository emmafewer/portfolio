import Image from "next/image";
import { playfairDisplay } from "@/app/ui/fonts";
import ImageSwap from "@/app/ui/imageSwap";

export default function Home() {
  return (
    <div className={"flex flex-col px-6 md:px-24 lg:px-32 gap-10 md:gap-24"}>
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
          <span className={"flex flex-col lg:flex-row gap-10 lg:gap-20"}>
            <p className={`text-l md:text-base`}>
              I like to ride bikes. Road cycling is my favorite. I was
              introduced to the sport in 2022 and was immediately hooked. Having
              been a long distance runner since middle school cross country, the
              stamina and pacing came naturally. But what really hooked me is
              the team aspect of being in a pace line. In a pace line, you’re
              following right behind one another in a single file line to get a
              draft (assuming there isn’t a cross wind). The lead person will
              pull off to the side and rotate to the back of the group, all
              while still pedaling, and the next person will follow suit. It
              creates this beautiful continuous loop, where when done right, you
              won’t touch your brakes because everyone is doing the expected
              consistent amount of pedaling. In a smooth pace line, it feels as
              if time stands still even though you’re going 25 mph because
              you’re all helping each other. It’s always special when you can be
              in a meditative place while being alert and working hard.
            </p>
            <ImageSwap />
          </span>
        </div>
      </div>
    </div>
  );
}
