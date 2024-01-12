function App() {
  return (
    <div className="tmpl--wrapper">
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
              <p></p>
            </li>
          </ul>
        </nav>
      </header>
      <main className="tmpl--main">
        <h1 className="tmpl--main-title">
          Все кроссовки
        </h1>
        <ul className="tmpl--main-cards">
          <li className="tmpl--main-card">
            <div className="tmpl--main-card-product">
              <img className="tmpl--main-card-pic" src="./cardItem1.jpg" alt="product" />
              <img className="tmpl--main-card-follow" src="./mainIconUnFollow.svg" alt="icon" />
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