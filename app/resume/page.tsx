import Image from "next/image";
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";

export default function Page() {
  return (
    <div className={"flex justify-center"}>
      <Card>
        <CardBody>
          <Link href={"/Fewer_Resume.pdf"}>
            <Image
              src={"/Fewer_Resume.jpg"}
              alt={"resume"}
              width={924}
              height={1188}
              className={"h-auto w-auto"}
            ></Image>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}
