import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import MainApp from "./MainApp";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);
