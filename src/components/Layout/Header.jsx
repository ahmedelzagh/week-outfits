import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2>Week Outfits</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </header>
  );
};

export default Header;
