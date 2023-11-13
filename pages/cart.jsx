import Image from 'next/image';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitles}>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/images/redsmoothie.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>Strawberry Smoothie</span>
              </td>
              <td>
                <span className={styles.price}>$12.00</span> {/* Replace with dynamic price */}
              </td>
              <td>
                <span className={styles.quantity}>5</span> {/* Replace with dynamic quantity */}
              </td>
              <td>
                <span className={styles.total}>$12.00</span> {/* Replace with dynamic total */}
              </td>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/images/redsmoothie.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>Strawberry Smoothie</span>
              </td>
              <td>
                <span className={styles.price}>$12.00</span> {/* Replace with dynamic price */}
              </td>
              <td>
                <span className={styles.quantity}>5</span> {/* Replace with dynamic quantity */}
              </td>
              <td>
                <span className={styles.total}>$12.00</span> {/* Replace with dynamic total */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$12.00 {/* Replace with dynamic subtotal */}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00 {/* Replace with dynamic discount */}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$12.00 {/* Replace with dynamic total */}
          </div>
          <button className={styles.button}>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
