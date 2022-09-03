import React from "react";

const ClothesContext = React.createContext({
  clothes: {},
  addClothes: () => {},
});

export default ClothesContext;