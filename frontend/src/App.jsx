import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Layout/RootLayout";
import HomePage from "./Pages/Home/Home";
import AboutPage from "./Pages/About/About";
import CheckChallan from "./Pages/Challan/CheckChallan";
import ModelList from "./Pages/Model-Brief/ModelList";
import Model1 from "./Pages/Models/Model1";
import Model2 from "./Pages/Models/Model2";
import Model3 from "./Pages/Models/Model3";
import Model4 from "./Pages/Models/Model4";
import Model5 from "./Pages/Models/Model5";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/challan", element: <CheckChallan /> },
        { path: "/models", element: <ModelList /> },
        { path: "/model1", element: <Model1 /> },
        { path: "/model2", element: <Model2 /> },
        { path: "/model3", element: <Model3 /> },
        { path: "/model4", element: <Model4 /> },
        { path: "/model5", element: <Model5 /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
