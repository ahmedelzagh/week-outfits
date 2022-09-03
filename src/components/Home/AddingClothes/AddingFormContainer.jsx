import { useState } from "react";
import Button from "../../UI/Button";
import AddClothingPiece from "./AddClothingPiece";
import classes from "./AddingFormContainer.module.css";

const AddingForm = () => {
  const [outDays, setOutDays] = useState(3);
  const [showForm, setShowForm] = useState(false);

  const outDaysHandler = (e) => {
    setOutDays(e.target.value);
  };
  const showFormHandler = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div className={classes.addingForm}>
      <p>
        <label htmlFor="days">How many days will you be out this week? (3-7)</label>
        <input id="days" onChange={outDaysHandler} type="number" min="3" max="7" step="1" defaultValue={outDays} />
      </p>
      <span>
        Please add at least <strong>{outDays}</strong> Tops, and at least one Pants/shoes
      </span>
      {showForm ? (
        <AddClothingPiece />
      ) : (
        <Button variant="light" onClick={showFormHandler}>
          Add Clothes
        </Button>
      )}
    </div>
  );
};

export default AddingForm;
