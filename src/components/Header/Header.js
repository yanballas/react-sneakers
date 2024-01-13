function Header() {
  return (
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
  );
}

export default Header;