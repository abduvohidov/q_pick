const initialState = {
  choosen_products: JSON.parse(localStorage.getItem("choosen")) || [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST":
        const choosen = [...state.choosen_products, action.payload];
        localStorage.setItem('choosen', JSON.stringify(choosen))
      return {
        ...state,
        choosen_products: choosen,
      };
    default:
      return { ...state };
  }
};
