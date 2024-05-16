import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Authentication/Login";
import Layout from "./Layout";
import PageNotFound from "./Pages/PageNotFound";
import { routes } from "./Routes";

export const App = () => {


  return (
    <BrowserRouter>
      <Routes>
     {/* adf */}
        <Route path="/" index element={<LogIn />} />
        <Route path="*" element={<PageNotFound />} />

        {routes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <Layout 
                  id={route.id}
                  navLink={route.path}
                  navItem={route.navItem}
                  component={route.component}
                />
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
