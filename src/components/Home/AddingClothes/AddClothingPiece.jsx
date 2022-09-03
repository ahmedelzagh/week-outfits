import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

import classes from "./AddClothingPiece.module.css";

import { useInput, useClothes } from "../../../hooks";

const AddClothingPiece = () => {
  const { addClothes } = useClothes();
  const [itemType, resetItemType] = useInput("");
  const [color, resetColor] = useInput("#000000");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    addClothes(itemType.value, color.value);
    resetItemType();
    resetColor();
  };

  return (
    <Card className={classes.addCard}>
      <form onSubmit={formSubmitHandler}>
        <p>
          <label htmlFor="types">What is the classification of this piece of clothing?</label>
          <select id="types" {...itemType}>
            <option value="" disabled>
              ---
            </option>
            <option value="top">top</option>
            <option value="pants">pants</option>
            <option value="shoes">shoes</option>
          </select>
        </p>
        <p>
          <label htmlFor="colors">What color is it?</label>
          <input type="color" id="colors" {...color} />
        </p>
        <Button type="submit" variant="dark">
          Add
        </Button>
      </form>
    </Card>
  );
};

export default AddClothingPiece;
