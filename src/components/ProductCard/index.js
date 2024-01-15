import { useState } from 'react';
import styles from './ProductCard.module.scss'
import classNames from 'classnames';

function ProductCard( proops ) {

  const [isFollowBtn, setIsFollowBtn] = useState(false);
  const [isAddBtn, setIsAddBtn] = useState(false);

  const handleFollow = () => {
    setIsFollowBtn(!isFollowBtn)
  }

  const handleAdd = () => {
    setIsAddBtn(!isAddBtn)
  }

  return (
    <li className={classNames(styles.card)}>
      <div className={classNames(styles["card-product"])}>
        <img className={classNames(styles["card-pic"])} src={proops.imageUrl} alt="product" />
        <button onClick={handleFollow} className={classNames({
          [styles["card-button"]]: true,
          [styles["card-button-follow_off"]]: !isFollowBtn,
          [styles["card-button-follow_on"]]: isFollowBtn,
        })}
        ></button>
      </div>
      <h4 className={classNames(styles["card-title"])}>
        {proops.title}
      </h4>
      <div className={classNames(styles["card-order"])}>
        <div className={classNames(styles["card-order-text"])}>
          <p className={classNames(styles["card-price"])}>Цена:</p>
          <p><span className={classNames(styles["card-price-number"])}>{proops.price}</span></p>
        </div>
        <button onClick={handleAdd} type="button" className={classNames({
          [styles["card-button"]]: true,
          [styles["card-button-add_off"]]: !isAddBtn,
          [styles["card-button-add_on"]]: isAddBtn,
        })}>
        </button>
      </div>
    </li>
  );
}

export default ProductCard;