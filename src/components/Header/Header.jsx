import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { CounterContext } from "../../context/CounterContext";
import { CategoryContext } from "../../context/CategoryContext";

import products from "../../api/products";

export default function Header() {
  const [categories, setCategories] = useState([]);

  const { category, setCategory } = useContext(CategoryContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { counter, counterCart } = useContext(CounterContext);

  async function loadCategoryData() {
    try {
      const response = await products.getProducts();
      const productsList = await response.data;

      const categoriesList = productsList.map((product) => product.category);
      const uniqueCategoriesList = [...new Set(categoriesList)];

      setCategories(uniqueCategoriesList);
    } catch (error) {
      console.log(error);
    }
  }

  function printCategoriesOption() {
    if (!categories?.length) return;

    return categories?.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));
  }

  useEffect(() => {
    loadCategoryData();
  }, []);

  return (
    <header className={`bg-${theme}`}>
      <nav className={`navbar navbar-expand-lg navbar-light py-3`}>
        <div className="container">
          <div className="brand flex justify-center align-items-center gap-4">
            <Link to={"/"} className="navbar-brand font-black">
              QPICK
            </Link>
            <select
              defaultValue={category}
              className={`bg-${theme} text-sm rounded-lg w-[110px]`}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={"All"} selected>
              All category
              </option>

              {printCategoriesOption()}
            </select>
            <select
              defaultValue={theme}
              className={`bg-${theme} text-sm rounded-lg w-[60px]`}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="light">light</option>
              <option value="secondary">secondary</option>
              <option value="warning">warning</option>
              <option value="danger">danger</option>
            </select>
          </div>

          <div className="category flex justify-between w-[80px]">
            <div className="category_item relative">
              <Link to={"/selected"}>
                <i className="bx bx-heart text-[30px]"></i>
              </Link>
              <span className="text-[10px] bg-orange-400 rounded-full text-white px-1 absolute top-[-4px] right-[-2px]">
                {counter}
              </span>
            </div>
            <div className="category_item relative">
              <Link to={"/carts"}>
                <i className="bx bx-cart-alt text-[30px]"></i>
              </Link>
              <span className="text-[10px] bg-orange-400 rounded-full text-white px-1 absolute top-[-4px] right-[-2px]">
                {counterCart}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
