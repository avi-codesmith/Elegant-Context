import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product";
import CardContextLogic from "./store/shop-context";

function App() {
  return (
    <CardContextLogic>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CardContextLogic>
  );
}

export default App;
