import "./App.css";
import { useEffect, useState } from "react";
import { getCategories } from "./apicalls/products";
import { getProducts } from "./apicalls/products";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [select, setSelect] = useState(null);

  const getProductsData = async (id) => {
    const data = await getProducts(id);
    setProducts(data);
  };

  const accHandler = (i, id) => {
    if (select === i) {
      return setSelect(null);
    }
    getProductsData(id);
    setSelect(i);
  };

  const getData = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  console.log(products);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="wrapper">
      <div className="accordion">
        {categories.length > 0 ? (
          categories.map((item, i) => (
            <div className="item" key={item._id}>
              <div className="title" onClick={() => accHandler(i, item._id)}>
                <h2>{item.name}</h2>
                <span>{select === i ? "-" : "+"}</span>
              </div>
              <div className={select === i ? "content show" : "content"}>
                <ul>
                  {products.length > 0 ? (
                    products.map((product) => (
                      <li key={product._id}>{product.name}</li>
                    ))
                  ) : (
                    <div></div>
                  )}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
