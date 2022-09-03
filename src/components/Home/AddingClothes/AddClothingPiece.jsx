import React from "react";
import { v4 } from "uuid";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { useInput, useClothes } from "../../../hooks";

import classes from "./AddClothingPiece.module.css";

const AddClothingPiece = () => {
  const { addClothes } = useClothes();
  const [itemTypeProps, typeValidation, resetItemType] = useInput("", (value) => value.trim() !== "");
  const [colorProps, colorValidation, resetColor] = useInput("#000000", (value) => value.trim() !== "");
  // const [secColorProps, secColorValidation, resetSecColor] = useInput("#000000");

  let formIsValid = false;
  if (typeValidation.valueIsValid && colorValidation.valueIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    addClothes(v4(), itemTypeProps.value, colorProps.value);
    resetItemType();
    resetColor();
  };

  return (
    <Card className={classes.addCard}>
      <form onSubmit={formSubmitHandler}>
        <p>
          <label htmlFor="types">What is the classification of this piece of clothing?</label>
          <select id="types" {...itemTypeProps}>
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
          <input type="color" id="colors" {...colorProps} />
        </p>
        <Button disabled={!formIsValid} type="submit" variant="dark">
          Add
        </Button>
      </form>
    </Card>
  );
};

export default AddClothingPiece;
