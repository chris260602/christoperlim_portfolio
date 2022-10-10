import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";
import NotFound from "../views/NotFound/NotFound";
import Portfolio from "../views/Portfolio/Portfolio";
import Welcome from "../views/Welcome/Welcome";
const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/Portfolio",
      element: <Portfolio />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};
export default MainRoute;
