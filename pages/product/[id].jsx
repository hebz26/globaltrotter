import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);
  const smoothie = {
    id: 1,
    img: "/images/redsmoothie.jpg",
    name: "Strawberry Smoothie",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}  >
        <Image src={smoothie.img} objectFit="contain" layout="fill" alt=""  />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{smoothie.name}</h1>
        <span className={styles.price}>${smoothie.price[size]}</span>
        <p className={styles.desc}>{smoothie.desc}</p>
        <h3 className={styles.choose}>Choose a size</h3>
        <div className={styles.sizes}>
            <div className={styles.size} onClick={()=>setSize(0)}>
                <Image src = "/images/size.png" layout="fill"/>
                <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size} onClick={()=>setSize(1)}>
                <Image src = "/images/size.png" layout="fill"/>
                <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.size} onClick={()=>setSize(2)}>
                <Image src = "/images/size.png" layout="fill"/>
                <span className={styles.number}>Large</span>
            </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
        </div>
      </div>
  );
};

export default Product;