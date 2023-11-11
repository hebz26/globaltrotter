import styles from "../styles/SmoothieList.module.css";
import SmoothieCard from "./SmoothieCard";

const SmoothieList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The World's Best Smoothies!</h1>
      <p className={styles.desc}>
        Indulge your taste buds with a delightful selection of eight unique and
        mouthwatering flavored smoothies at Globetrotter Smoothies. From
        tropical infusions to zesty creations, our diverse range of smoothies
        offers something for every palate.
      </p>
      <div className={styles.wrapper}>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      
      </div>
    </div>
  );
};
export default SmoothieList;
