import { useContext, useEffect, useState } from "react";
import { LanguagesContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { CounterContext } from "../../context/CounterContext";
import { languages } from "../../languages/languages";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartItem } from "../../context/ItemCart";

import products from "../../api/products";
import Card from "../../UI/Card";

export default function Single() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguagesContext);
  const { counterCart, setCounterCart } = useContext(CounterContext);
  const { itemCart, setItemCart } = useContext(CartItem);

  const [datas, setDatas] = useState({});
  const { id } = useParams([]);

  async function getSingleProduct() {
    try {
      const response = await products.getSingle(id);
      const result = await response.data;
      if (result) {
        setDatas(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function addToCart(item) {
    if (item.id) {
      setItemCart(item.id);
    }

    if (item.id === itemCart) {
      dispatch({ type: "POST", payload: item });
      toast.success("Успешно добавлен !");
      if (choosen && !iconType) {
        setIconType("s");
      } else {
        setIconType("s");
      }
    }
  }

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <section className={theme}>
      <div className="container">
        <div className="row py-5">
          <Card key={datas.id} data={datas} />

          <div className="col-xl-4">
            <div className="bg-white h-[500px] rounded-lg shadow-sm p-4 mt-4">
              <h3 className="font-bold text-[20px]">
                {languages[lang].single.about} <br />
                <span className="text-[grey] text-[14px] font-normal">
                  {`(${datas.title})`}
                </span>
              </h3>
              <p className="text-[14px] mt-2">
                {languages[lang].single.category}:
                <span className="text-[grey] text-[14px] font-normal">
                  {datas.category}
                </span>
              </p>
              <p className="text-[14px] mt-2">
                {languages[lang].single.price}:
                <span className="text-[grey] text-[14px] font-normal">
                  ${datas.price}
                </span>
              </p>
              <p className="text-[14px] mt-3">{datas.description}</p>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="rounded-lg h-[420px] bg-white shadow-sm mt-4 p-4 duration-200">
              <p className="flex align-items-center gap-2">
                <i className="d-block bx bx-location-plus text-[28px]"></i>
                <p>
                  <span className="d-block p-0 m-0 text-[14px]">
                    Аксай-3а, 62ф, Алматы, Казахстан
                  </span>
                  <span className="d-block p-0 m-0 text-[11px]">
                    {languages[lang].contact.dot_address}
                  </span>
                </p>
              </p>
              <div className="mt-2 relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://i.stack.imgur.com/HILmr.png"
                  className="w-100 mt-4 transition duration-300 ease-in-out hover:scale-110"
                  alt="location"
                />
              </div>
            </div>
            <div className="buttons-box mt-4 flex gap-4">
              <Link
                to={`/products/${id}/order`}
                className="btn btn-dark px-5 py-2"
              >
                {languages[lang].single.buy}
              </Link>
              <Link
                className="btn btn-dark px-5 py-2"
                onClick={() => {
                  setCounterCart(counterCart + 1);
                  addToCart();
                }}
              >
                {languages[lang].single.cart}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
