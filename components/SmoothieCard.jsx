import Image from "next/image"
import styles from "../styles/SmoothieCard.module.css";

const SmoothieCard = () => {
    return (
        <div className={styles.container}>
             <Image src = "/images/redsmoothie.jpg" width= {250} height={250} className={styles.roundedImage} />
            <h1 className={styles.title}>Red Smoothie</h1>
            <span className={styles.price}> $7.99 </span>
            <p className={styles.desc}>
                Yummy strawberry smoothie. A fan favorite
            </p>
        </div>
    );
};
export default SmoothieCard