import { useContext, useEffect } from "react";
import { LanguagesContext } from "../../context/LanguageContext";
import { languages } from "../../languages/languages";
import { ThemeContext } from "../../context/ThemeContext";
export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguagesContext);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <section className={theme}>
      <div className="container">
        <div className="row m-auto align-items-center">
          <div className="col-xl-8">
            <div className="rounded-lg bg-white shadow-sm my-5 p-5 duration-200">
              <h5>{languages[lang].contact.title}</h5>
              <div className="mt-4 relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="https://i.stack.imgur.com/HILmr.png"
                  className="w-100 mt-4 transition duration-300 ease-in-out hover:scale-110"
                  alt="location"
                />
              </div>
              <p className="mt-4 flex align-items-center gap-2">
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
            </div>
          </div>
          <div className="col-xl-2">
            <ul className="flex flex-column align-items-center">
              <li className="rounded bg-white shadow-sm my-4 relative overflow-hidden bg-cover bg-no-repeat">
                <i className="bx bxl-vk text-[80px] p-4 transition duration-300 ease-in-out hover:scale-110"></i>
              </li>
              <li className="rounded bg-white shadow-sm my-4 relative overflow-hidden bg-cover bg-no-repeat">
                <i className="bx bxl-instagram text-[80px] p-4 transition duration-300 ease-in-out hover:scale-110"></i>
              </li>
              <li className="rounded bg-white shadow-sm my-4 relative overflow-hidden bg-cover bg-no-repeat">
                <i className="bx bxl-telegram text-[80px] p-4 transition duration-300 ease-in-out hover:scale-110"></i>
              </li>
              <li className="rounded bg-white shadow-sm my-4 relative overflow-hidden bg-cover bg-no-repeat">
                <i className="bx bxl-whatsapp text-[80px] p-4 transition duration-300 ease-in-out hover:scale-110"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
