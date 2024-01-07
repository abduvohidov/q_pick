import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { PatternFormat } from "react-number-format";

import { ThemeContext } from "../../context/ThemeContext";
import { LanguagesContext } from "../../context/LanguageContext";
import { languages } from "../../languages/languages";
import { FormContext } from "../../context/FormContext.jsx";

import products from "../../api/products";

export default function Order() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguagesContext);

  const {
    number,
    city,
    district,
    house,
    entrance,
    apartment,

    setNumber,
    setCity,
    setDistrict,
    setHouse,
    setEntrance,
    setApartment,
  } = useContext(FormContext);

  const { id } = useParams();

  const [singleData, setSingleData] = useState("");

  async function getAllProducts() {
    const response = await products.getSingle(id);
    const result = await response.data;
    setSingleData(result);
  }

  useEffect(() => {
    getAllProducts();
  });

  function clearFrom() {
    setNumber("");
    setCity("");
    setDistrict("");
    setHouse("");
    setEntrance("");
    setApartment("");

    setTimeout(() => {
      window.location.reload();
    }, 2100);
  }

  const token = "6327859474:AAHeQ5Gi1iJVNis6icAUpZw6ksdiA0bfNMU";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const chat_id = 1247573660;

  function submitOrders(e) {
    e.preventDefault();

    const orders = {
      number,
      city,
      district,
      house,
      entrance,
      apartment,
    };

    const ID_ORDER = `#${singleData.id}HC${singleData.id * 2}DV`;

    const newOrderMessage = `
      Номер заказа: ${ID_ORDER}
      Адрес: ${orders.city} - ${orders.district}
      House: ${orders.house}
      Entrance: ${orders.entrance}
      Apartment: ${orders.apartment}
      Number: ${orders.number}

      Product name: ${singleData.title}

      Тип оплаты: Наличный

      Товары: $${singleData.price}
      Доставка: $5
      Итого: $${singleData.price + 5}

      Ваш заказ № ${ID_ORDER} оформлен.
      На указанный Вами номер, в ближайшее время будет выставлен счёт.
      Расчетное время доставки заказа 45 минут с момента оплаты счета.
      
      `;

    if (
      orders.number &&
      orders.city &&
      orders.district &&
      orders.house &&
      orders.entrance &&
      orders.apartment !== "not found !"
    ) {
      axios.post(url, {
        chat_id: chat_id,
        text: newOrderMessage,
      });

      toast.success(
        `Ваш заказ № #${singleData.id}HC${singleData.id * 2}RE оформлен`
      );

      clearFrom();
    } else {
      toast.error("Заполните таблицу!");
    }
  }

  return (
    <section className={theme}>
      <div className="container">
        {/* FORM TO SUBMIT */}
        <form onSubmit={submitOrders}>
          <div className="row py-5">
            <div className="col-xl-4">
              <div className="bg-white rounded-2xl shadow-sm p-4">
                <div className="w-100 flex justify-between">
                  <h3>{languages[lang].order.card_title}</h3>
                  <p>${singleData.price}</p>
                </div>
                <div className="mt-2 relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="https://i.stack.imgur.com/HILmr.png"
                    className="w-100 mt-4 transition duration-300 ease-in-out hover:scale-110"
                    alt="location"
                  />
                </div>
                <div className="body">
                  <div className="flex align-items-center gap-1 mt-3">
                    <i className="bx bx-location-plus text-[20px]"></i>
                    <h3 className="text-[20px]">
                      {languages[lang].order.location_delivery}
                    </h3>
                  </div>

                  <select
                    defaultValue={city}
                    className="bg-light w-100 px-3 py-1 mt-3 rounded-xl"
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option selected>{languages[lang].order.city}</option>
                    <option defaultValue={"toshkent"}>Toshkent</option>
                  </select>
                  <input
                    type="text"
                    placeholder={languages[lang].order.district}
                    className="bg-light w-100 px-3 py-1 mt-3 rounded-xl"
                    onChange={(e) => setDistrict(e.target.value)}
                  />

                  <div className="flex justify-between">
                    <input
                      type="text"
                      placeholder={languages[lang].order.house}
                      className="bg-light w-25 px-3 py-1 mt-3 rounded-xl"
                      onChange={(e) => setHouse(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder={languages[lang].order.entrance}
                      className="bg-light w-50 px-3 py-1 mt-3 rounded-xl"
                      onChange={(e) => setEntrance(e.target.value)}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder={languages[lang].order.apartment}
                    className="bg-light w-100 px-3 py-1 mt-3 rounded-xl"
                    onChange={(e) => setApartment(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="bg-white rounded-2xl shadow-sm p-4">
                <h3 className="font-bold">{languages[lang].order.order}</h3>
                <ul className="list-unstyled mt-4">
                  <li className="mt-2">{singleData.title}</li>
                  <li className="mt-2">
                    {languages[lang].order.pay} - ${singleData.price}
                  </li>
                </ul>
              </div>
              <div className="bg-white mt-4 rounded-2xl shadow-sm p-4">
                <h3>{languages[lang].order.pay_method}</h3>

                <div className="flex align-items-center mt-3">
                  <i className="bx bxl-visa text-[30px]"></i>
                  <select defaultValue={"accaunt"} className="px-2">
                    <option value={"schet"}>
                      {languages[lang].order.account} kaspi.kz
                    </option>
                  </select>
                </div>

                {/* PROMOCODE */}

                <div className="flex align-items-center mt-3">
                  <i className="bx bx-purchase-tag-alt text-[26px]"></i>
                  <input
                    type="text"
                    placeholder={languages[lang].order.promo}
                    onChange={(e) => {}}
                    className="mx-2 w-100 bg-light px-3 py-2 rounded-xl"
                  />
                </div>
              </div>
              <div className="bg-white mt-4 rounded-2xl shadow-sm p-4">
                <h3>{languages[lang].order.number}</h3>
                <PatternFormat
                  type="text"
                  onChange={(e) => setNumber(e.target.value)}
                  className="mt-4 w-100 bg-light px-3 py-2 rounded-xl"
                  format="+%%% (%%) %%% %% %%"
                  patternChar="%"
                  value={998}
                />
              </div>
              <button
                type="submit"
                className="btn bg-dark text-white w-100 shadow-sm rounded-2xl py-2 mt-4"
              >
                {languages[lang].order.registration}
              </button>
            </div>
          </div>
        </form>
        <ToastContainer autoClose={2000} />
      </div>
    </section>
  );
}
