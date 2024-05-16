import { Button, CircularProgress, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { get_username_by_referralidFunctoin } from "../../Services";
import { playerRegistrationSchema } from "../../Services/FormValidation";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";

const AddPlayer = () => {
  const location = useLocation();
  const id = location?.state?.id;
  console.log(id);
  const [loding, setloding] = useState(false);
  const navigate = useNavigate();

  const initialValue = {
    referral_user_id: id?.sname || "",
    full_name: id?.full_name || "",
    username: id?.username || "",
    password: id?.password || "",
    email: id?.email || "",
    mobile: id?.mobile || "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    validationSchema: playerRegistrationSchema,
    onSubmit: () => {
      id ? playerRegistrationUpdate(fk.values) : playerRegistration(fk.values);
    },
  });

  const { isLoading, data: get_name } = useQuery(
    ["get_name_data", fk.values.referral_user_id, id],
    () =>
      fk.values.referral_user_id &&
      get_username_by_referralidFunctoin({ id: fk.values.referral_user_id }),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
    }
  );
  const name = get_name?.data?.data;

  async function playerRegistration(reqBody) {
    if (!name) return toast("Please check the referral code");
    setloding(true);
    const newBody = {
      ...reqBody,
      referral_user_id: name?.id,
    };

    try {
      const res = await axiosInstance.post(
        API_URLS.player_registration,
        newBody
      );
      toast.success(res?.data?.message);
      if (res?.data?.message === "User added successfully") {
        navigate("/player");
      }
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  }
  async function playerRegistrationUpdate(reqBody) {
    setloding(true);
    const newBody = {
      ...reqBody,
      id: id?.id,
    };
    console.log(newBody);
    try {
      const res = await axiosInstance.put(
        API_URLS.update_player_record,
        newBody
      );
      toast.success(res?.data?.message);
      if (res?.data?.message === "Data updated successfully") {
        navigate("/player");
      }
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  }

  if (loding)
    return (
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  return (
    <div className="!flex justify-center items-center w-full">
     <div className="p-5 lg:w-1/2 bg-white !bg-opacity-30 rounded-lg">
      <p className="!text-center font-bold !py-4 text-lg">
        {id ? "Update Player Record" : "Player Registration"}
      </p>
      <div className="grid grid-cols-1 gap-[6%] gap-y-4">
        <div>
          <p className="font-bold">Sponser ID</p>
          <TextField
            fullWidth
            size="small"
            id="referral_user_id"
            name="referral_user_id"
            placeholder="Sponser ID"
            value={fk.values.referral_user_id}
            onChange={!id && fk.handleChange}
          />
          {fk.touched.referral_user_id && fk.errors.referral_user_id && (
            <div className="error">{fk.errors.referral_user_id}</div>
          )}
        </div>
        <div>
          <p className="font-bold">Sponser Name</p>
          <TextField
            fullWidth
            size="small"
            placeholder="Sponser Name"
            value={name?.full_name}
            InputProps={{ readOnly: true }}
          />
          {fk.values.referral_user_id && (
            <div className="error">{!name && "Invalid Referral Code"}</div>
          )}
        </div>
        <div>
          <p className="font-bold">Name</p>
          <TextField
            fullWidth
            size="small"
            id="full_name"
            name="full_name"
            placeholder="Sponser ID"
            value={fk.values.full_name}
            onChange={!id && fk.handleChange}
          />
          {fk.touched.full_name && fk.errors.full_name && (
            <div className="error">{fk.errors.full_name}</div>
          )}
        </div>
        <div>
          <p className="font-bold">User ID</p>
          <TextField
            fullWidth
            size="small"
            id="username"
            name="username"
            placeholder="User ID"
            value={fk.values.username}
            onChange={!id && fk.handleChange}
          />
          {fk.touched.username && fk.errors.username && (
            <div className="error">{fk.errors.username}</div>
          )}
        </div>
        <div>
          <p className="font-bold">Password</p>
          <TextField
            fullWidth
            size="small"
            id="password"
            name="password"
            placeholder="Password"
            value={fk.values.password}
            onChange={fk.handleChange}
          />
          {fk.touched.password && fk.errors.password && (
            <div className="error">{fk.errors.password}</div>
          )}
        </div>
        <div>
          <p className="font-bold">Email</p>
          <TextField
            fullWidth
            size="small"
            id="email"
            name="email"
            placeholder="Email"
            value={fk.values.email}
            onChange={fk.handleChange}
          />
          {fk.touched.email && fk.errors.email && (
            <div className="error">{fk.errors.email}</div>
          )}
        </div>
        <div>
          <p className="font-bold">Mobile</p>
          <TextField
            fullWidth
            size="small"
            id="mobile"
            name="mobile"
            placeholder="Mobile"
            value={fk.values.mobile}
            onChange={fk.handleChange}
          />
          {fk.touched.mobile && fk.errors.mobile && (
            <div className="error">{fk.errors.mobile}</div>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-5">
        <Button
          onClick={() => fk.handleReset()}
          variant="contained"
          className="!bg-[#E74C3C]"
        >
          Clear
        </Button>
        <Button
          onClick={() => fk.handleSubmit()}
          variant="contained"
          className="!bg-[#07BC0C]"
        >
          Submit
        </Button>
      </div>
    </div>
    </div>
    
  );
};

export default AddPlayer;
