import Image from "next/image";
import { playfairDisplay } from "@/app/ui/fonts";

const aboutInnerContent = [
  {
    title: "Adaptable",
    description:
      "I thrive in ambiguity. Whether it’s shaping a greenfield project from scratch or refining existing systems, I’m comfortable stepping into the unknown and driving projects to completion. I love turning loose ideas into thoughtful, polished solutions.",
    icon: "wind-spiral.svg",
    id: "wind-spiral",
  },
  {
    title: "Positive & Collaborative",
    description:
      "I trust my teammates and challenge ideas with care. I believe constructive feedback makes us stronger, and once we decide on a direction, I commit fully to the path forward. Building great products is a team effort, and I aim to make that journey positive for everyone involved.",
    icon: "splash-line.svg",
    id: "splash-line",
  },
  {
    title: "Curious & Growth-Oriented",
    description:
      "I’m always looking for ways to improve — whether it’s pivoting to Next.js’ latest features or exploring new libraries that excite the community. I enjoy learning how things work and figuring out how to make them better.",
    icon: "double-diamond.svg",
    id: "double-diamond",
  },
  {
    title: "Outside of Work",
    description:
      "When I’m not coding, you’ll find me on skis, playing board games, or out on my bike trainer watching reruns of Survivor. I'm always up for a challenge!",
    icon: "motion.svg",
    id: "motion",
  },
];

export default function Home() {
  return (
    <div className={"grid gap-y-24 w-5/6 justify-self-center"}>
      {/*Heading Section*/}
      <div className={"flex flex-row gap-x-10"}>
        <Image
          src="/profile.png"
          width={165}
          height={200}
          className={"rounded-full h-auto w-auto"}
          alt={"profile-pic"}
        />
        <div className={"content-center"}>
          <h1
            className={`${playfairDisplay.className} mb-4 text-xl md:text-7xl`}
          >
            Emma Fewer
          </h1>
          <span className={"flex flex-row"}>
            <p className={`mb-2 text-xl md:text-4xl`}>
              Product-focused full stack engineer
            </p>
            <Image
              className={"animate-spin-slow h-auto w-auto"}
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
        <div style={{ borderLeft: "1px solid #171717" }}></div>
        <div className={"ml-16"}>
          <h1
            className={`${playfairDisplay.className} mb-4 text-xl md:text-5xl`}
          >
            About Me
          </h1>
          {aboutInnerContent.map(({ title, description, icon, id }) => (
            <span key={id} className={"flex space-x-5 space-y-5"}>
              <Image
                src={`/${icon}`}
                width={50}
                height={id == "splash-line" ? 144 : 120}
                alt={id}
                className={"h-auto w-auto"}
              />
              <div>
                <p className={`mb-2 text-xl md:text-3xl`}>{title}</p>
                <p className={`mb-2 text-xl md:text-base`}>{description}</p>
              </div>
            </span>
          ))}
        </div>
        <div className={"lg:hidden w-96 -ml-20"}>
          <Image
            src={"/mobile-bike-hill.svg"}
            width={120}
            height={100}
            alt={"bike-hill"}
            className={"h-auto w-auto"}
          />
        </div>
        <div className={"hidden lg:inline-block w-96 -ml-20"}>
          <Image
            src={"/bike-hill.svg"}
            width={200}
            height={150}
            alt={"bike-hill"}
            className={"h-auto w-auto"}
          />
        </div>
      </div>
    </div>
  );
}
