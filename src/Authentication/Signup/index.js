import React, { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Slide from "../../Assets/loginImage.png";
import logo from "../../Assets/capture.jpg";
import { CircleOutlined } from "@mui/icons-material";
import {
  AiOutlineMail,
  AiFillLock,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { signupFn } from "../../Services/Signup";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
const Signup = () => {
  const navigate = useNavigate();

  const [hidePssword, setHidePssword] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  function submithandler(data) {
    console.log(data);
    mutate(data);
    reset();
  }

  const { mutate, isLoading } = useMutation(signupFn, {
    onSuccess: (response) => {
      console.log(response);
      if (response?.data) {
        localStorage.setItem(
          "erm_signup_response",
          JSON.stringify(response?.data)
        );
        localStorage.setItem("erm_user_id", response?.data?.user_id);

        localStorage.setItem("token1", response?.data?.token);
      } else {
        toast("Something went Wrong");
      }
      toast(response?.data?.message);
      response?.data?.message ===
        "Project Based Admin user created successfully." &&
        navigate("/create-company");
    },
  });

  return (
    <>
      <div className="flex w-screen relative">
        <img
          src={Slide}
          className="w-full h-screen object-fill absolute"
          alt=""
        />

        <div className="flex justify-end  h-screen w-[40%] absolute right-0 top-0 overflow-auto z-20 shadow-">
          <div className="w-full flex  justify-evenly h-full">
            <form
              className="flex flex-col  items-center rounded-2xl w-full h-full justify-evenly"
              onSubmit={handleSubmit(submithandler)}
            >
              <div className="flex flex-col gap-5 items-center">
                <img className="Capture w-[25rem] pt-5" src={logo} alt="" />

                <p className="text-lg hover:underline text-gray-500">
                  Create Account
                </p>
              </div>
              <div className="w-[70%] ">
                <label className="text-gray-500">First Name:</label>
                <br />
                <div className="flex items-center">
                  <input
                    type="text"
                    {...register("first_name")}
                    placeholder="Enter your first name here"
                    className="w-full h-14 focus:outline-none  bg-[#E8F0FE] rounded-l-lg px-3 py-2 border border-r-0 border-t-0 border-l-0 tracking-wider "
                  />
                  <div className="bg-[#E8F0FE]">
                    <p className="bg-[#1E2772] text-white h-14 w-14  flex justify-center items-center text-[1.5rem] rounded-xl">
                      <GoPerson />
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[70%] ">
                <label className="text-gray-500">Last Name:</label>
                <br />
                <div className="flex items-center">
                  <input
                    type="text"
                    {...register("last_name")}
                    placeholder="Enter your last name here"
                    className="w-full h-14 focus:outline-none  bg-[#E8F0FE] rounded-l-lg px-3 py-2 border border-r-0 border-t-0 border-l-0 tracking-wider "
                  />
                  <div className="bg-[#E8F0FE]">
                    <p className="bg-[#1E2772] text-white h-14 w-14  flex justify-center items-center text-[1.5rem] rounded-xl">
                      <GoPerson />
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[70%] ">
                <label className="text-gray-500">Email:</label>
                <br />
                <div className="flex items-center">
                  <input
                    type="text"
                    {...register("email")}
                    placeholder="Enter your email here"
                    className="w-full h-14 focus:outline-none  bg-[#E8F0FE] rounded-l-lg px-3 py-2 border border-r-0 border-t-0 border-l-0 tracking-wider "
                  />
                  <div className="bg-[#E8F0FE]">
                    <p className="bg-[#1E2772] text-white h-14 w-14  flex justify-center items-center text-[1.5rem] rounded-xl">
                      <AiOutlineMail />
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[70%] ">
                <label className="text-gray-500">Password:</label>
                <br />
                <div className="flex items-center">
                  <input
                    type={hidePssword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Enter your password here"
                    className="w-full h-14 focus:outline-none  bg-[#E8F0FE] rounded-l-lg px-3 py-2 border border-r-0 border-t-0 border-l-0 tracking-wider "
                  />
                  <div className="bg-[#E8F0FE]">
                    <p
                      onClick={() => setHidePssword(!hidePssword)}
                      className="h-14 w-14 text-gray-700  flex justify-center items-center text-[1.5rem] rounded-xl"
                    >
                      {hidePssword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </p>
                  </div>

                  <div className="bg-[#E8F0FE]">
                    <p className="bg-[#1E2772] text-white h-14 w-14  flex justify-center items-center text-[1.5rem] rounded-xl">
                      <AiFillLock />
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    className="!flex"
                  >
                    <FormControlLabel
                      value="True"
                      control={<Radio />}
                      label="Manufacturer"
                      {...register("is_manufacturer")}
                    />
                    <FormControlLabel
                      value="False"
                      control={<Radio />}
                      label="Project"
                      {...register("is_manufacturer")}
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div className=" w-[70%]">
                <button
                  type="submit"
                  size="large"
                  className="w-full z-20 shadow-md cursor-pointer bg-[#1E2772] !rounded-lg !px-10 py-2 text-white "
                >
                  {isLoading ? <CircleOutlined /> : "Sign up"}
                </button>
              </div>

              <div></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
