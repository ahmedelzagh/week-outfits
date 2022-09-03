import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <div className={classes.app}>
        <Home />
      </div>
    </>
  );
}

export default App;
