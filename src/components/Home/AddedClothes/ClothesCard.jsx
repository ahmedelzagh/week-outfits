import { GiPoloShirt, GiTrousers, GiConverseShoe } from "react-icons/gi";

import Card from "../../UI/Card";

import classes from "./ClothesCard.module.css";

const ClothesCard = (props) => {
  const { itemType, color } = props.info;
  return (
    <li>
      <Card variant="dark">
        {itemType === "top" && <GiPoloShirt className={classes.icon} style={{ color: color }} />}
        {itemType === "pants" && <GiTrousers className={classes.icon} style={{ color: color }} />}
        {itemType === "shoes" && <GiConverseShoe className={classes.icon} style={{ color: color }} />}
      </Card>
    </li>
  );
};

export default ClothesCard;
