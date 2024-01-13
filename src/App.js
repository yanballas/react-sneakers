function App() {
  return (
    <div className="tmpl--wrapper">

      <div className="tmpl--cart">
        <div className="tmpl--cart-orders">
          <div className="tmpl--cart-orders-first">
            <div className="tmpl--cart-orders-up">
              <h3 className="tmpl--cart-title">
                  Корзина
              </h3>
              <button className="tmpl_close-btn"></button>
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
      <header className="tmpl--header">
        <div className="tmpl--header-left">
        <img className="tmpl--header-left-logo" src="./logo.png" alt="logo"></img>
          <div className="tmpl--header-left-container">
            <h2 className="tmpl--header-left-title">
              REACT SNEAKERS
            </h2>
            <p className="tmpl--header-left-text">
              Магазин лучших кроссовок
            </p>
          </div>
        </div>
        <nav className="tmpl--header-right">
          <ul className="tmpl--header-right-menu">
            <li className="tmpl--header-right-list">
              <img className="tmpl--header-right-icon" src="./headerIcon1.svg" alt="icon" />
              <p>1205 руб.</p>
            </li>
            <li className="tmpl--header-right-list">
              <img className="tmpl--header-right-icon" src="./headerIcon2.svg" alt="icon" />
              <p>Закладки</p>
            </li>
            <li className="tmpl--header-right-list">
              <img className="tmpl--header-right-icon" src="./headerIcon3.svg" alt="icon" />
              <p>Профиль</p>
            </li>
          </ul>
        </nav>
      </header>
      <main className="tmpl--main">
        <div className="tmpl--main-up">
          <h1 className="tmpl--main-title">
            Все кроссовки
          </h1>
          <div className="tmpl--main-search">
            <img className="tmpl--main-search-pic" src="./mainIconSearch.svg" alt="search" />
            <input className="tmpl--main-search-input" placeholder="Поиск..." type="text" />
          </div>
        </div>
        <ul className="tmpl--main-cards">
          <li className="tmpl--main-card">
            <div className="tmpl--main-card-product">
              <img className="tmpl--main-card-pic" src="./cardItem1.jpg" alt="product" />
              <img className="tmpl--main-card-follow" src="./mainIconUnFollow.svg" alt="follow" />
            </div>
            <h4 className="tmpl--main-card-title">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h4>
            <div className="tmpl--main-card-order">
              <div>
                <p className="tmpl--main-card-price">Цена:</p>
                <p><span className="tmpl--main-card-price_number">12 999 руб.</span></p>
              </div>
              <button type="button" className="tmpl--main-card-button">
              </button>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;