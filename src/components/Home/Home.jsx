import React, { useContext } from "react";
import AddedClothes from "./AddedClothes/AddedClothes";
import AddingFormContainer from "./AddingClothes/AddingFormContainer";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <section className={classes.formDesc}>
        <h2>What should I do?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt placeat, facilis consectetur ullam aliquam sunt ipsum in rerum doloribus inventore velit quam rem asperiores cum distinctio
          necessitatibus magnam officiis deleniti?
        </p>
      </section>
      <section>
        <h2>Add Your Clothes</h2>
        <AddingFormContainer />
      </section>
      <section>
        <h2>Added Clothes</h2>
        <AddedClothes />
      </section>
    </div>
  );
};

export default Home;
