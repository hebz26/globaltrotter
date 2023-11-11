import Image from "next/image"
import styles from "../styles/Navbar.module.css"
const Navbar = () => {
    return (
       
        
        <div className={styles.container}>
            <div className={styles.item}> 
                <div className={styles.telephone}>
                <Image src = "/images/phone.png" width= {50} height={50} />
                </div>

                <div className={styles.texts}> 
                <div className={styles.text}>ORDER NOW</div>
                <div className={styles.text}>Call 313-313-3131</div>
                </div>

             </div>

            <div className={styles.item}>

                <ul className={styles.list} >
                 <li className={styles.listItem}>Homepage</li>
                <li className={styles.listItem}>Menu</li>
                <Image src = "/images/homelogo.png" width= {80} height={80} />
                <li className={styles.listItem}>Contact</li>
                <li className={styles.listItem}>Blog</li>
                </ul>

             </div>

            <div className={styles.item}> 
                <div className={styles.cart}> 
                <Image src = "/images/cart.png" width= {50} height={50} />
                <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
        
    );
}

export default Navbar