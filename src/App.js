import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import ShopCart from "./components/ShopCart/ShopCart";

function App() {
  return (
    <div className="tmpl--wrapper">

      <ShopCart />

      <Header />

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
          <ProductCard />
        </ul>
      </main>

    </div>
  );
}

export default App;