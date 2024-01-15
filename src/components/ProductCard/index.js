import { useState } from 'react';
import styles from './ProductCard.module.scss'

function ProductCard( proops ) {

  const [isAddBtn, setIsAddBtn] = useState(false);

  const handleAdd = () => {
    setIsAddBtn(!isAddBtn)
  }

  return (
    <li className={styles.card}>
      <div className={styles["card-product"]}>
        <img className={styles["card-pic"]} src={proops.imageUrl} alt="product" />
        <button onClick={proops.onClickFollow} className={styles["card-button-follow"]} src="./mainIconUnFollow.svg" alt="follow" />
      </div>
      <h4 className={styles["card-title"]}>
        {proops.title}
      </h4>
      <div className={styles["card-order"]}>
        <div className={styles["card-order-text"]}>
          <p className={styles["card-price"]}>Цена:</p>
          <p><span className={styles["card-price-number"]}>{proops.price}</span></p>
        </div>
        <button onClick={handleAdd} type="button" className={`${!isAddBtn ? styles["card-button-un_add"] : styles["card-button-add"]}`}>
        </button>
      </div>
    </li>
  );
}

export default ProductCard;