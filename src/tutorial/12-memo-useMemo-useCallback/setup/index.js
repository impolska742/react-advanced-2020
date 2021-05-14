import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const CartContext = React.createContext();

const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const [cartValue, setCartValue] = useState(0);
  const addToCart = useCallback(
    (price) => {
      setCart(cart + 1);
      // console.log("PRICEEEEEEEEEEEEEEEEEEEEEEEE >>>> ", fields.price);
      setCartValue(cartValue + price);
    },
    [cart]
  );

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );

  return (
    <>
      {/* <CartContext.Provider value={{ addToCart }}> */}
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>Cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <h1>Cart Value : ${cartValue}</h1>
      <BigList products={products} addToCart={addToCart} />
      {/* </CartContext.Provider> */}
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("big list called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("single item called");
  });
  // const { addToCart } = useContext(CartContext);
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={() => addToCart(price)}>Add To Cart</button>
    </article>
  );
};
export default Index;
