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
              width={824}
              height={1060}
              className={"h-auto"}
            ></Image>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}
