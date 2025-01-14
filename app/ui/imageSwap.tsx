import Image from "next/image";

export default function ImageSwap() {
  return (
    <div className={"lg:min-w-[400px] inline-block relative"}>
      <Image
        src={`/glacier.png`}
        width={500}
        height={500}
        alt={"glacier"}
        className={
          "h-auto w-auto rounded-br-lg rounded-bl-lg rounded-tl-lg rounded-tr-[400px]"
        }
      />
      <Image
        src={"/bike-hill2.svg"}
        width={200}
        height={150}
        alt={"bike-hill"}
        className={"h-auto w-auto absolute top-[-10px] right-0 w-52"}
      />
    </div>
  );
}
