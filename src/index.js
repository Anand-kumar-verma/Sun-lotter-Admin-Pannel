import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tailwindcss/tailwind.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, createTheme } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { SocketProvider } from "./Shared/ScoketProvider";

const queryClient = new QueryClient();
const lightTheme = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   main: "rgba(0,0,0,0.4)",
    // },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <SocketProvider>
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        limit={2}
        rtl={false}
        toastClassName="!rounded !capitalize top-3 lg:!mx-0"
        pauseOnHover={false}
      />
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </SocketProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
