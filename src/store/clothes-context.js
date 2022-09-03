import React from "react";

const ClothesContext = React.createContext({
  clothes: {},
  dispatchClothes: () => {},
});

export default ClothesContext;