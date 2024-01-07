import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [number, setNumber] = useState("not found !");
  const [city, setCity] = useState("not found !");
  const [district, setDistrict] = useState("not found !");
  const [house, setHouse] = useState("not found !");
  const [entrance, setEntrance] = useState("not found !");
  const [apartment, setApartment] = useState("not found !");

  return (
    <FormContext.Provider
      value={{
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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
