import { Button, CircularProgress, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    subAdminRegistrationSchema
} from "../../Services/FormValidation";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";

const AddSubAdmin = () => {
//   const location = useLocation();
//   const id = location?.state?.id;
//   console.log(id);
  const [loding, setloding] = useState(false);
  const navigate = useNavigate();

  const initialValue = {
    sub_admin_name: "",
    sub_admin_login_id: "",
    sub_admin_email: "",
    sub_admin_contact_no: "",
    sub_admin_password: "",
    sub_admin_confirm_password: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
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

      <p className="!text-center font-bold !py-4 text-lg">Add Subadmin</p>
      <div className="grid grid-cols-1 gap-[6%] gap-y-4">
        <div>
          <p className="font-bold">Name</p>
          <TextField
            fullWidth
            size="small"
            id="sub_admin_name"
            name="sub_admin_name"
            placeholder="Enter Name"
            value={fk.values.sub_admin_name}
            onChange={fk.handleChange}
          />
          {fk.touched.sub_admin_name && fk.errors.sub_admin_name && (
            <div className="error">{fk.errors.sub_admin_name}</div>
          )}
        </div>

        <div>
          <p className="font-bold">Email</p>
          <TextField
            fullWidth
            size="small"
            id="sub_admin_email"
            name="sub_admin_email"
            placeholder="Enter mail id"
            value={fk.values.sub_admin_email}
            onChange={fk.handleChange}
          />
          {fk.touched.sub_admin_email && fk.errors.sub_admin_email && (
            <div className="error">{fk.errors.sub_admin_email}</div>
          )}
        </div>
        <div>
          <p className="font-bold">Contact No</p>
          <TextField
            fullWidth
            type="number"
            size="small"
            id="sub_admin_contact_no"
            name="sub_admin_contact_no"
            placeholder="User ID"
            value={fk.values.sub_admin_contact_no}
            onChange={fk.handleChange}
          />
          {fk.touched.sub_admin_contact_no &&
            fk.errors.sub_admin_contact_no && (
              <div className="error">{fk.errors.sub_admin_contact_no}</div>
            )}
        </div>
        <div>
          <p className="font-bold">Login Id</p>
          <TextField
            fullWidth
            size="small"
            id="sub_admin_login_id"
            name="sub_admin_login_id"
            placeholder="Login Id"
            value={fk.values.sub_admin_login_id}
            onChange={fk.handleChange}
          />
          {fk.touched.sub_admin_login_id && fk.errors.sub_admin_login_id && (
            <div className="error">{fk.errors.sub_admin_login_id}</div>
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

export default AddSubAdmin;
