import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguagesContext } from "../../context/LanguageContext";
import { languages } from "../../languages/languages";

export default function Footer() {

  const {theme} = useContext(ThemeContext);
  const {lang, setLang} = useContext(LanguagesContext);

  return (
    <footer className={`bg-${theme}`}>
      <div className={`container bg-white rounded-t-3xl py-5 px-5`}>
        <div className="row">
          <div className="col-xl-3">
            <Link to={'/'} className="navbar-brand font-black">
              QPICK
            </Link>
          </div>
          <div className="col-xl-3">
            <ul>
              <li><Link to={'/selected'}>{languages[lang].footer.selected}</Link></li>
              <li><Link to={'/carts'}>{languages[lang].footer.trash}</Link></li>
              <li><Link to={'/contact'}>{languages[lang].footer.contacts}</Link></li>
            </ul>
          </div>
          <div className="col-xl-3">
            <Link to={'/service'}>
              <p>{languages[lang].footer.terms}</p>
            </Link>
            <ul className="flex justify-start align-items-center gap-1 mt-4">
              <li className="d-block"><i className='bx bx-globe mt-2'></i></li>
              <select defaultValue={lang} onChange={(e) => {
                setLang(e.target.value);
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}>
                <option value="english">english</option>
                <option value="uzbek">uzbek</option>
                <option value="russian">russian</option>
              </select>
            </ul>
          </div>
          <div className="col-xl-3">
            <ul className="flex gap-3">
              <li><i className='bx bxl-vk text-[30px]'></i></li>
              <li><i className='bx bxl-instagram text-[30px]'></i></li>
              <li><i className='bx bxl-telegram text-[30px]'></i></li>
              <li><i className='bx bxl-whatsapp text-[30px]'></i></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
