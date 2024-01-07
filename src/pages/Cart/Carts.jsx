import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from '../../context/ThemeContext'
import { LanguagesContext } from "../../context/LanguageContext";
import { languages } from "../../languages/languages";
export default function Cart() {
  const {theme} = useContext(ThemeContext);
  const {lang} = useContext(LanguagesContext);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section className={theme}>
      <div className="container">
        <div className="row py-5">
          <div className="col-xl-12 mx-auto">
            <img 
              className="w-25 mx-auto py-5"
              src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f6d2.png" 
              alt="cart" 
            />
            <h2 className="text-center text-[30px] font-bold">{languages[lang].cart.title_empty}</h2>
            <p className="text-center text-[20px] text-[grey]">{languages[lang].cart.info_empty}</p>
            <Link to={'/'} className="btn btn-dark rounded-2xl py-3 mx-auto d-block w-25 my-5">{languages[lang].cart.to_catalog}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
