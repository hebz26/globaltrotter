import { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {

  const[index, setIndex] = useState(0);
  const images = [
    "/images/slide-11.png",
    "/images/slide-12.png",
    "/images/slide-12.png",
  ];

  const handleArrow = (direction) => {
    if(direction==="l")
    {
      setIndex(index !== 0 ? index-1 : 2)
    }
    if(direction==="r")
    {
      setIndex(index !== 2 ? index+1 : 0)
    }
    }
  
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 100}} onClick = {()=>handleArrow("l")}>
        <Image src = "/images/arrowl.png" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 100}} onClick = {()=>handleArrow("r")}>
        <Image src="/images/arrowr.png" layout="fill" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;
