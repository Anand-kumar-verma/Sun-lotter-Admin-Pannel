import { useFormik } from "formik";
import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { useMutation } from "react-query";
import { loginFn } from "../Services/Login";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import slide from "../Assets/Slide.png";
import loginLogo from "../Assets/bharatLogo.svg";
import { Button } from "@mui/material";
import { CustomButton } from "./CustomButton";

const LogIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,

    onSubmit: (values) => {
      const reqBody = {
        email: formik.values.email,
        password: formik.values.password,
      };
      console.log("sajkdgaskldgb");
      mutate(reqBody);
    },
  });

  const { mutate } = useMutation(loginFn, {
    onSuccess: (response) => {
      if (response.data?.data) {
        localStorage.setItem("crm_user", JSON.stringify(response?.data?.data));
        localStorage.setItem("crm_token", response?.data?.data?.token);
        localStorage.setItem("crm_store_id", response?.data?.data?.store_id);
        localStorage.setItem("crm_email", response?.data?.data?.chk_user_email);
        localStorage.setItem("crm_user_id", response?.data?.data?.user_id);

        localStorage.setItem("crm_role", response?.data?.data?.role);
        localStorage.setItem(
          "crm_permission_list",
          JSON.stringify(response?.data?.data?.permission_list)
        );

        navigate("/campaigns");
      } else {
        toast("Something went Wrong");
      }
      toast(response?.data?.msg);
      console.log(response);
      formik.resetForm();
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("crm_token");
    const user = localStorage.getItem("crm_user");
    // if (token || user) {
    //   navigate("/lead");
    // }
  }, []);

  return (
    <>
      <div
        className="h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center  bg-opacity-10 "
        style={{ backgroundImage: `url(${slide})`, backgroundSize: "cover" }}
      >
        <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
        <div className="h-40-r w-40-r bg-gradient-to-r from-pink-700 to-purple-500 rounded-full absolute top-96  -left-20 animate-pulse"></div>
        <div className="flex justify-end w-4/5">
          <Tilt>
            <div className="h-35-r w-35-r bg-white  rounded-lg shadow-5xl">
              <form
                className="h-full flex flex-col justify-evenly items-center bg-white rounded-2xl w-full"
                onSubmit={formik.handleSubmit}
              >
                <img className="Capture w-48" src={loginLogo} alt="" />
                <div className="">
                  <p className="text-black text-center font-bold text-xl tracking-wider">
                    Log In
                  </p>
                  <p className="text-xs text-gray-500">
                    Login now for manage your customers
                  </p>
                </div>
                <input
                  formik={formik}
                  type="text"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="username"
                  className="focus:outline-none px-3 py-2 border border-r-0 border-t-0 border-l-0 tracking-wider"
                />
               

                <input
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Password"
                  className="focus:outline-none px-3 py-2 border border-r-0 border-t-0 border-l-0 tracking-wider"
                />

                <CustomButton
                  type="submit"
                  size="large"
                  className="cursor-pointer bg-gradient-to-r from-[#8B39CD] to-rose-500 !rounded-full !px-8 py-1 bg-white bg-opacity-50 hover:bg-opacity-80"
                >
                  Submit
                </CustomButton>

                <p className="text-xs text-purple-600 hover:text-gray-300 hover:underline">
                  Already have a account? Login
                </p>
              </form>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default LogIn;
