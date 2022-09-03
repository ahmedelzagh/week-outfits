import { useReducer } from "react";
import ClothesContext from "./clothes-context";
import clothesReducer from "../reducers/clothes-reducer";

const ClothesProvider = ( {children} ) => {
  const [clothesState, dispatchClothes] = useReducer(clothesReducer, { tops: [], pants: [], shoes: [] });

  const addClothesHandler = (itemType, color) => {
    dispatchClothes({ type: "ADD_CLOTHES", item: { itemType, color } });
  };

  const value = {
    clothes: clothesState || {},
    addClothes: addClothesHandler,
  };

  return <ClothesContext.Provider value={value}>{children}</ClothesContext.Provider>;
};

export default ClothesProvider;
