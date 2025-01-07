import styles from './footer.module.css'
import Image from "next/image";
export default function Footer() {
    return (
        // className={styles.reverseScallop}
        <div className={styles.footer}>
            <Image src={'/github.svg'} alt={'github logo'} height={40} width={40}/>
            <Image src={'/linkedin.svg'} alt={'linkedin logo'} height={40} width={40}/>
        </div>
    )
}