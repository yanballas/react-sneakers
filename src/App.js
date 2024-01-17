import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard";
import ShopCart from "./components/ShopCart/ShopCart";


function App() {
  
  const [productCards, setProductCards] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [shortCartOpened, setShortCartOpened] = useState(false)

  useEffect(() => {
    let controller = new AbortController();
    const requestProducts = () => {
      fetch('http://localhost:8000/products').then(response => {
        return response.json()
      }).then(json => {
        setProductCards(json)
      })
    }
    requestProducts()
    return () => controller?.abort();
  }, [])

  const onProductToCart = (el) => {

    let flag = false
    cartItems.forEach(item => {
      if (item.id === el.id) {
        flag = !flag
      }
    })
    if (flag) {
      setCartItems(state => state.filter(val => val.id !== el.id))
    } else {
      setCartItems([...cartItems, el])
    }


  }

  return (
    <div className="tmpl--wrapper">

      {shortCartOpened && <ShopCart cartItems={cartItems}onClickCloseShopCart={() => setShortCartOpened(false)} />}

      <Header onClickOpenShopCart={() => setShortCartOpened(true)} />

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
            productCards.map((el) => (
              <ProductCard 
              title={el.title} 
              price={el.price} 
              imageUrl={el.imageUrl}
              onAddCart={() => onProductToCart(el)}
              />
            ))
          }
        </ul>
      </main>

    </div>
  );
}

export default App;