import "./App.css";
import { useEffect, useState } from "react";
import { getCategories } from "./apicalls/categoryApi";
import { getProducts } from "./apicalls/productsApi";
import { IoCreateSharp } from "react-icons/io5";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import CategoryForm from "./components/CategoryForm";
import ProductForm from "./components/ProductForm";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [select, setSelect] = useState(null);
  const [editcat, setEditcat] = useState(false);
  const [editpro, setEditpro] = useState(false);
  const [createcat, setCreatecat] = useState(false);
  const [createpro, setCreatepro] = useState(false);
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState({});

  const createHandler = () => {
    setCreatecat((prev) => !prev);
  };

  const createproHandler = () => {
    setCreatepro((prev) => !prev);
  };

  const catHandler = (item) => {
    setSelect(null);
    setCategory(item);
    setEditcat((prev) => !prev);
  };

  const editProdHandler = (item) => {
    setSelect(null);
    setProduct(item);
    setEditpro((prev) => !prev);
  };

  const getProductsData = async (id) => {
    const data = await getProducts(id);
    setProducts((prev) => data);
  };

  const accHandler = (i, id) => {
    if (select === i) {
      return setSelect(null);
    }
    setProducts((prev) => []);
    setSelect(i);
    setEditcat(false);
    setEditpro(false);
    setCreatecat(false);
    setCreatepro(false);
    getProductsData(id);
  };

  const getData = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  useEffect(() => {
    getData();
  }, [editcat, createcat, editpro, createpro]);
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="heading">Choose a Category to Explore</h1>
        <div className="accordion">
          {categories.length > 0 ? (
            categories.map((item, i) => (
              <div className="item" key={item._id}>
                <div className="title">
                  <h2>{item.name}</h2>
                  <div className="acc">
                    <span className="icon" onClick={() => catHandler(item)}>
                      <AiFillEdit />
                    </span>

                    <span
                      className="acc-handler"
                      onClick={() => accHandler(i, item._id)}
                    >
                      {select === i ? <GrSubtract /> : <GrAdd />}
                    </span>
                  </div>
                </div>
                <div className={select === i ? "content show" : "content"}>
                  <ul>
                    {products.length > 0 ? (
                      products.map((product) => (
                        <li key={product._id}>
                          <span>
                            <img
                              src={product.image}
                              height="100px"
                              width="100px"
                              alt={product.name}
                            />
                          </span>
                          <span>{product.name}</span>
                          <span>rating-{product.rating}/5</span>
                          <span>&#8377;{product.price}</span>
                          <span>{product.discount}%-discount</span>
                          <span
                            className="icon"
                            onClick={() => editProdHandler(product)}
                          >
                            <AiFillEdit />
                          </span>
                        </li>
                      ))
                    ) : (
                      <div className="loading">Loading...</div>
                    )}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <div className="buttons">
          <button onClick={createHandler}>
            <IoCreateSharp /> Create new category
          </button>
          <button onClick={createproHandler}>
            <IoCreateSharp /> Create new Product
          </button>
        </div>
        {createpro ? (
          <ProductForm
            product={product}
            create={createpro}
            setCreate={setCreatepro}
            categories={categories}
          />
        ) : null}
        {editpro ? (
          <ProductForm
            product={product}
            edit={editpro}
            setEdit={setEditpro}
            categories={categories}
          />
        ) : null}
        {createcat ? (
          <CategoryForm create={createcat} setCreatecat={setCreatecat} />
        ) : null}
        {editcat ? (
          <CategoryForm
            editcat={editcat}
            category={category}
            setEditcat={setEditcat}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
