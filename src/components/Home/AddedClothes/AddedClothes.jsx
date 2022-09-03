import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ClothesCard from "./ClothesCard";
import classes from "./AddedClothes.module.css";
import { useClothes } from "../../../hooks";

const AddedClothes = () => {
  const { clothes } = useClothes();
  return (
    <Card className={classes.addedClothesCard}>
      <div className={classes.addedClothes}>
        <div className={classes.classContainer}>
          <h3>Tops</h3>
          <ul className={classes.item}>{clothes.tops.length > 0 ? clothes.tops.map((top, i) => <ClothesCard key={i} info={top} />) : <p>Nothing to Show</p>}</ul>
        </div>
        <div className={classes.classContainer}>
          <h3>Pants</h3>
          <ul className={classes.item}>{clothes.pants.length > 0 ? clothes.pants.map((pant, i) => <ClothesCard key={i} info={pant} />) : <p>Nothing to Show</p>}</ul>
        </div>
        <div className={classes.classContainer}>
          <h3>Shoes</h3>
          <ul className={classes.item}>{clothes.shoes.length > 0 ? clothes.shoes.map((shoe, i) => <ClothesCard key={i} info={shoe} />) : <p>Nothing to Show</p>}</ul>
        </div>
      </div>
      <Button variant="dark">Generate Outfits</Button>
    </Card>
  );
};

export default AddedClothes;
