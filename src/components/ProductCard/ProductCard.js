function ProductCard( proops ) {
  return (
    <li className="tmpl--main-card">
      <div className="tmpl--main-card-product">
        <img className="tmpl--main-card-pic" src={proops.imageUrl} alt="product" />
        <img className="tmpl--main-card-follow" src="./mainIconUnFollow.svg" alt="follow" />
      </div>
      <h4 className="tmpl--main-card-title">
        {proops.title}
      </h4>
      <div className="tmpl--main-card-order">
        <div className="tmpl--main-card-order-text">
          <p className="tmpl--main-card-price">Цена:</p>
          <p><span className="tmpl--main-card-price_number">        {proops.price}</span></p>
        </div>
        <button type="button" className="tmpl--main-card-button">
        </button>
      </div>
    </li>
  );
}

export default ProductCard;