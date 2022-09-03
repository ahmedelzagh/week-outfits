import { useContext } from "react";
import ClothesContext from "../store/clothes-context";

const useClothes = () => {
  const ctx = useContext(ClothesContext);
  return ctx;
};

export default useClothes;
