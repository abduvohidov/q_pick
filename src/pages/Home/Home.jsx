import Card from "../../UI/Card";
import products from "../../api/products";
import Loader from "../../components/Loader/Loader";

import { ToastContainer } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { LanguagesContext } from "../../context/LanguageContext";
import { languages } from "../../languages/languages";
import { CategoryContext } from "../../context/CategoryContext";
import { ProductContext } from "../../context/ProductContext";
import { SelectedContext } from "../../context/SelectedContext";
import { useDispatch } from "react-redux";

export default function Home() {
  const { lang } = useContext(LanguagesContext);
  const { category } = useContext(CategoryContext);
  const { productsData, setProductsData } = useContext(ProductContext);

  let array = [1, 2, 3, 4];

  async function sortByCategory() {
    try {
      const response =
        category == "All"
          ? await products.getProducts()
          : await products.getCategory(category);
      const result = await response.data;

      if (result) {
        setProductsData(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    sortByCategory();
  }, [category]);

  return (
    <>
      <section>
        <div className="container">
          <div className="bg-black rounded-xl flex justify-around align-items-center px-5">
            <h1 className="text-white text-center text-[34px] w-[450px] py-5">
              {languages[lang].main.title}
            </h1>
            <img
              src={
                "https://www.powerreviews.com/wp-content/uploads/2022/07/wardrobe-22.png"
              }
              className="w-[390px] h-[280px]"
              alt="png"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row py-5">
            <h3 className="text-[20px] text-[#838383]">
              {productsData.category}
            </h3>
            {productsData.length
              ? productsData.map((item) => {
                  return <Card key={item.id} data={item} />;
                })
              : array.map((item) => {
                  return <Loader key={item} />;
                })}
          </div>
        </div>
        <ToastContainer autoClose={1000} />
      </section>
    </>
  );
}
