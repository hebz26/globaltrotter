import styles from "../../styles/Order.module.css";
import Image from "next/image";
import { useState } from "react";

const Order = () => {

  const status = 0;

  const statusClass = (index) =>{
      if(index-status < 1) return styles.done
      if(index-status === 1) return styles.inProgress
      if(index-status > 1) return styles.undone
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitles}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}> 123456</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span> {/* Replace with dynamic price */}
              </td>
              <td>
                <span className={styles.address}>313 Main St. MI</span> {/* Replace with dynamic quantity */}
              </td>
              <td>
                <span className={styles.total}>$12.00</span> {/* Replace with dynamic total */}
              </td>
            </tr>

          </tbody>
        </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/images/paid.png" width={30}  height={30} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
            <Image className = {styles.checkedIc} src="/images/checked.png" width={20}  height={20} />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/images/mix.png" width={30}  height={30} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
            <Image className = {styles.checkedIc} src="/images/checked.png" width={20}  height={20} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/images/done.png" width={30}  height={30} />
            <span>Ready</span>
            <div className={styles.checkedIcon}>
            <Image className = {styles.checkedIc} src="/images/checked.png" width={20}  height={20} />
            </div>
          </div>
          
        </div>
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
          <button disabled className={styles.button}> PAID</button>
        </div>
      </div>

    </div>
    
  )
}

export default Order;