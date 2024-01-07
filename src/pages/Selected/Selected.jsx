import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguagesContext } from "../../context/LanguageContext";
import { languages } from "../../languages/languages";
import { useSelector } from "react-redux";
import Card from "../../UI/Card";

export default function Selected() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguagesContext);

  const { choosen_products } = useSelector((state) => state);
  const choosen = localStorage.getItem('choosen')

  console.log(choosen)

  return (
    <>
      <section className={`${theme} py-3`}>
        <div className="container">
          <div className="row">
            {choosen_products.length ? (
              choosen_products.map((item, index) => {
                return <Card key={index} data={item} />;
              })
            ) : (
              <div className="container">
                <div className="row py-5">
                  <div className="col-xl-12 mx-auto">
                    <h2 className="text-center text-[30px] font-bold">
                      {languages[lang].selected.title_empty}
                    </h2>
                    <p className="text-center text-[20px] text-[grey]">
                      {languages[lang].cart.info_empty}
                    </p>
                    <Link
                      to={"/"}
                      className="btn btn-dark rounded-2xl py-3 mx-auto d-block w-25 my-5"
                    >
                      {languages[lang].cart.to_catalog}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
