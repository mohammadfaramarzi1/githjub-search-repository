import FavoritesPage from "./Pages/FavoritesPage";
import MainPage from "./Pages/MainPage";

const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
];

export default routes;
