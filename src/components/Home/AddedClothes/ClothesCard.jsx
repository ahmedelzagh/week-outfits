import React from "react";

import Card from "../../UI/Card";

import classes from "./ClothesCard.module.css";

const ClothesCard = (props) => {
  return (
    <li>
      <Card variant="dark">
        <p>Color: {props.info.color}</p>
        <p>2nd Color: {props.info.secColor ? props.info.secColor : "none"}</p>
        <span
          className={classes.colorIndicator}
          style={{ backgroundImage: `linear-gradient(to bottom, ${props.info.color} 50%, ${props.info.secColor ? props.info.secColor : props.info.color} 50%)` }}
        ></span>
      </Card>
    </li>
  );
};

export default ClothesCard;
