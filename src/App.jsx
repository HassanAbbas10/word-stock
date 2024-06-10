import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";



import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

//TODO:Well i still need to add use navigation so i can go to the page giving product info 🎃

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
