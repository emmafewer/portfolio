import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={"flex justify-center gap-5"}>
      <Link href={"https://github.com/emmafewer"} target={"_blank"}>
        <Image
          src={"/github.svg"}
          alt={"GitHub icon"}
          height={40}
          width={39.18}
          className={
            "transition-all duration-1000 origin-[50%_50%] hover:scale-125"
          }
        />
      </Link>
      <Link href={"https://www.linkedin.com/in/emma-fewer/"} target={"_blank"}>
        <Image
          src={"/linkedin.svg"}
          alt={"LinkedIn icon"}
          height={40}
          width={40}
          className={
            "transition-all duration-1000 origin-[50%_50%] hover:scale-125 "
          }
        />
      </Link>
      {/*<ThemeToggle />*/}
    </div>
  );
}
