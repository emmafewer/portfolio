import Image from "next/image";
import Link from "next/link";
import {Card, CardBody} from "@nextui-org/card";
import styles from './resume.module.css'

export default function Page() {
    return (
        <div className={styles.container}>
            {/*<embed className="pdf"*/}
            {/*        src=*/}
            {/*            "/Fewer_Resume.pdf"*/}
            {/*       width="100%"*/}
            {/*       height="100%"*/}
            {/*        >*/}
            {/*</embed>*/}
            <Card><CardBody>
                <Link href={'/Fewer_Resume.pdf'}>
                    <Image src={'/Fewer_Resume.jpg'} width={900} height={1100}></Image>
                </Link>
            </CardBody></Card>

        </div>
    );
}