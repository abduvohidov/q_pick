import { createContext, useEffect, useState } from "react";

export const LanguagesContext = createContext();

export const LanguagesProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'english');
    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang])
  

  return(
     <LanguagesContext.Provider value={{lang, setLang}}>
        {children}
    </LanguagesContext.Provider>
  )
}