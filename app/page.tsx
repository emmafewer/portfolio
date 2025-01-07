
import Image from "next/image";
import styles from './home.module.css'
import {lusitana} from "@/app/ui/fonts";
import {Card, CardBody} from "@nextui-org/card";


export default function Home() {
  return (
      <div>
          {/*Introduction Section*/}
          <div className={styles.test}>
              <Image src="/profile2.png" width={200} height={200} style={{borderRadius: '50%'}} alt={"profile-pic"}/>
              <div className={styles.column}>
                  <h1 className={`${lusitana.className} mb-4 text-xl md:text-5xl`}>Hi!</h1>
                  <p className={`${lusitana.className}  mb-2 text-xl md:text-xl`}>My name is Emma Fewer. Welcome to my
                      site!</p>
                  <Image src="/asterisk.svg" width={80} height={80}  alt={"asterisk"}/>
              </div>
          </div>
          <div className={styles.circleContainer}>
          <div className={styles.circle} id={"outer-circle"}>
              <div className={styles.innerCircle} id={"inner-circle"}>e</div>
          </div>
          <div className={styles.circle1}></div>
          <div className={styles.circle}></div>
          </div>
          {/*About Section*/}
          <div className={styles.test2}>
              <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>About Me</h1>
              <p className={`${lusitana.className}  mb-2 text-xl md:text-xl`}>I am a full stack software engineer with a
                  focus on the frontend. I love building...</p>
          </div>

      </div>
  );
}
