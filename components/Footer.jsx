import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}> 
            <Image src = "/images/aigenimage.jpg" layout="fill" objectFit="cover"></Image>
            </div>
            <div className={styles.item}> 
            <div className={styles.card}>
                <h2 className={styles.motto}>
                    Embrace the World, Sip by Sip! Come join us, explore, and let the world unfold in every delightful blend."
                </h2>
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>FIND OUR SHOPS</h1>

                <p className={styles.text}>
                225 Main Street
                <br />Metropolitanville, NY 10001
                <br />United States
                <br />(602) 867-1010
                </p>

                <p className={styles.text}>
                543 River Street
                <br />Detroit, MI 48126
                <br />United States
                <br />(313) 444-3245
                </p>

                <p className={styles.text}>
                34 Ocean View Drive
                <br />Beachside Town, CA 90210
                <br />United States
                <br />(079) 173-8756
                </p>

            </div>
            <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>

            <p className={styles.text}>
                MONDAY - FRIDAY
                <br />10am - 9pm
                </p>
                <br />
            <p className={styles.text}>
                SATURDAY - SUNDAY
                <br />12pm - 8pm
            </p>

            </div>
            </div>
        </div>
    )


}

export default Footer