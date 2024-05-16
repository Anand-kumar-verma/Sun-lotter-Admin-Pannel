import { Button, CircularProgress, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    subAdminRegistrationSchema
} from "../../Services/FormValidation";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";

const Fund = () => {
//   const location = useLocation();
//   const id = location?.state?.id;
//   console.log(id);
  const [loding, setloding] = useState(false);
  const navigate = useNavigate();

  const initialValue = {
    login_id: "",
    wal_type: "Select Wallet Type",
    type_id: "Select Transaction Type",
    sub_admin_password: "",
    sub_admin_confirm_password: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize:true,
    validationSchema: subAdminRegistrationSchema,
    onSubmit: () => {
        if(fk.values.sub_admin_password != fk.values.sub_admin_confirm_password)return toast("Password and confirm password should be same.")
      subAdminRegistration(fk.values);
    },
  });

  async function subAdminRegistration(reqBody) {
    setloding(true);
    try {
      const res = await axiosInstance.post(
        API_URLS.add_sub_admin,
        reqBody
      );
      toast.success(res?.data?.message);
      if (res?.data?.message === "Sub Admin added successfully") {
        fk.handleReset();
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
     <div className="p-5 lg:w-1/2 md:w-3/4 w-full bg-white !bg-opacity-30 !rounded-lg">

      <p className="!text-center font-bold !py-4 text-lg">Add Fund</p>
      <div className="grid grid-cols-1 gap-[6%] gap-y-4">
        <div>
          <p className="font-bold">Login ID</p>
          <TextField
            fullWidth
            size="small"
            id="login_id"
            name="login_id"
            placeholder="Enter Name"
            value={fk.values.login_id}
            onChange={fk.handleChange}
          />
          {fk.touched.login_id && fk.errors.login_id && (
            <div className="error">{fk.errors.login_id}</div>
          )}
        </div>

        <div>
          <p className="font-bold">Wallet Type</p>
          <TextField
            fullWidth
            select
            size="small"
            id="wal_type"
            name="wal_type"
            placeholder="Wallet Type"
            value={fk.values.wal_type}
            onChange={fk.handleChange}
          >
          <MenuItem value={"Select Wallet Type"}>Select Wallet Type</MenuItem>
          <MenuItem value={"2"}>Wallet</MenuItem>
        </TextField>
          {fk.touched.wal_type && fk.errors.wal_type && (
            <div className="error">{fk.errors.wal_type}</div>
          )}
        </div>
        <div>
          <p className="font-bold">Transaction Type</p>
          <TextField
            fullWidth
            select
            type="number"
            size="small"
            id="type_id"
            name="type_id"
            placeholder="User ID"
            value={fk.values.type_id}
            onChange={fk.handleChange}
          >
          <MenuItem value={"Select Transaction Type"}>Select Transaction Type</MenuItem>
          <MenuItem value={"1"}>Credit</MenuItem>
          <MenuItem value={"2"}>Debit</MenuItem>
          </TextField>
          {fk.touched.type_id &&
            fk.errors.type_id && (
              <div className="error">{fk.errors.type_id}</div>
            )}
        </div>
        <div>
          <p className="font-bold">Login Id</p>
          <TextField
            fullWidth
            size="small"
            id="wal_type"
            name="wal_type"
            placeholder="Login Id"
            value={fk.values.wal_type}
            onChange={fk.handleChange}
          />
          {fk.touched.wal_type && fk.errors.wal_type && (
            <div className="error">{fk.errors.wal_type}</div>
          )}
        </div>
        <div>
          <p className="font-bold">Password</p>
          <TextField
            fullWidth
            size="small"
            id="sub_admin_password"
            name="sub_admin_password"
            placeholder="Password"
            value={fk.values.sub_admin_password}
            onChange={fk.handleChange}
          />
          {fk.touched.sub_admin_password && fk.errors.sub_admin_password && (
            <div className="error">{fk.errors.sub_admin_password}</div>
          )}
        </div>
        <div>
          <p className="font-bold">Confirm Password</p>
          <TextField
            fullWidth
            size="small"
            id="sub_admin_confirm_password"
            name="sub_admin_confirm_password"
            placeholder="Confirm Password"
            value={fk.values.sub_admin_confirm_password}
            onChange={fk.handleChange}
          />
          {fk.touched.sub_admin_confirm_password &&
            fk.errors.sub_admin_confirm_password && (
              <div className="error">
                {fk.errors.sub_admin_confirm_password}
              </div>
            )}
        </div>
      </div>
      <div className="flex justify-end gap-3 !mt-5">
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

export default Fund;

