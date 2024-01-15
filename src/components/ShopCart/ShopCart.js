function ShopCart(proops) {
  return (
    <div className="tmpl--cart">
      <div className="tmpl--cart-orders">
        <div className="tmpl--cart-orders-first">
          <div className="tmpl--cart-orders-up">
            <h3 className="tmpl--cart-title">
                Корзина
            </h3>
            <button onClick={proops.onClickCloseShopCart} className="tmpl_close-btn"></button>
          </div>
          <ul className="tmpl--cart-items">
            <li className="tmpl--cart-item">
                <img className="tmpl--cart-item-pic" src="./cardItem1.jpg" alt="product" />
                <div className="tmpl--cart-item-text">
                    <h5 className="tmpl--cart-item-title">Мужские Кроссовки Nike Air Max 270</h5>
                    <span className="tmpl--cart-item-price">12 999 руб.</span>
                </div>
                <button className="tmpl_close-btn"></button>
            </li>
            <li className="tmpl--cart-item">
                <img className="tmpl--cart-item-pic" src="./cardItem1.jpg" alt="product" />
                <div className="tmpl--cart-item-text">
                    <h5 className="tmpl--cart-item-title">Мужские Кроссовки Nike Air Max 270</h5>
                    <span className="tmpl--cart-item-price">12 999 руб.</span>
                </div>
                <button className="tmpl_close-btn"></button>
            </li>
          </ul>
        </div>
        <div className="tmpl--cart-orders-second">
          <ul className="tmpl--cart-info">
            <li className="tmpl--cart-info-sum">
              <p className="tmpl--cart-info-sum-text">Итого:</p>
              <div className="tmpl--cart-info-decoration"></div>
              <span className="tmpl--cart-info-sum-number">404 руб.</span>
            </li>
            <li className="tmpl--cart-info-sum">
              <p className="tmpl--cart-info-sum-text">Налог 5%:</p>
              <div className="tmpl--cart-info-decoration"></div>
              <span className="tmpl--cart-info-sum-number">100 руб.</span>
            </li>
          </ul>
          <button className="tmpl_green-btn tmpl--cart-btn">
            Оформить заказ
            <button className="tmpl--cart-sell"></button>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;