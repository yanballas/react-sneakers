import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard";
import ShopCart from "./components/ShopCart/ShopCart";

const infoProductCards = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: './cardItem1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 16999,
    imageUrl: './cardItem2.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: './cardItem3.jpg'
  },
]

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
          {
            infoProductCards.map((el) => (
              <ProductCard 
              title={el.title} 
              price={el.price} 
              imageUrl={el.imageUrl} 
              onClickFollow={() => console.log('follow')} 
              // onClickAdd={() => ""} 
              />
            ))
          }
        </ul>
      </main>

    </div>
  );
}

export default App;