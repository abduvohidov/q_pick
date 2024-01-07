import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguagesContext } from "../../context/LanguageContext";
import { languages } from "../../languages/languages";

export default function Service() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguagesContext);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <section className={theme}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-3">
            <div className="rounded-xl h-[300px] bg-white shadow-md p-4">
              <h2 className="text-[20px]">
                {languages[lang].service.title_service}
              </h2>
              <p className="mt-3 text-[16px]">{languages[lang].service.info}</p>
              <p className="mt-3 text-[16px]">{languages[lang].service.info}</p>
            </div>
          </div>
          <div className="col-lg-12 my-3">
            <div className="rounded-xl h-[300px] bg-white shadow-md p-4">
              <h2 className="text-[20px]">
                {languages[lang].service.title_service}
              </h2>
              <p className="mt-3 text-[16px]">{languages[lang].service.info}</p>
              <p className="mt-3 text-[16px]">{languages[lang].service.info}</p>
            </div>
          </div>
          <div className="col-lg-12 my-3">
            <div className="rounded-xl h-[300px] bg-white shadow-md p-4">
              <h2 className="text-[20px]">
                {languages[lang].service.title_service}
              </h2>
              <p className="mt-3 text-[16px]">{languages[lang].service.info}</p>
              <p className="mt-3 text-[16px]">{languages[lang].service.info}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
