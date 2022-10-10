import { Route, Routes, useRoutes } from "react-router-dom";
import classes from "./App.module.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import MainRoute from "./routes";

function App() {
  return (
    <div className={classes.main}>
      <Header />
      <ScrollToTop />
      <MainRoute />
      <Footer />
    </div>
  );
}

export default App;
