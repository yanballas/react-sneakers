import styles from './ProductCard.module.scss'

function ProductCard( proops ) {

  return (
    <li className={styles.card}>
      <div className={styles["card-product"]}>
        <img className={styles["card-pic"]} src={proops.imageUrl} alt="product" />
        <img className={styles["card-follow"]} src="./mainIconUnFollow.svg" alt="follow" />
      </div>
      <h4 className={styles["card-title"]}>
        {proops.title}
      </h4>
      <div className={styles["card-order"]}>
        <div className={styles["card-order-text"]}>
          <p className={styles["card-price"]}>Цена:</p>
          <p><span className={styles["card-price-number"]}>{proops.price}</span></p>
        </div>
        <button onClick={proops.onClick} type="button" className={styles["card-button"]}>
        </button>
      </div>
    </li>
  );
}

export default ProductCard;