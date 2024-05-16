import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { changePasswordSchema, playerRegistrationSchema } from "../../Services/FormValidation";

const Changepassword = () => {
  const navigate = useNavigate();

  const initialValue = {
    oldpass: "",
    email: "",
    newpass: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    validationSchema: changePasswordSchema,
    onSubmit: () => {
      console.log(fk.values);
    },
  });

  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <div className="!bg-white !bg-opacity-20 w-1/3 p-4">
        <div className="grid grid-cols-1 gap-[6%] gap-y-4 w-full">
          <div className="">
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
            <p className="font-bold">Old Password</p>
            <TextField
              fullWidth
              size="small"
              id="oldpass"
              name="oldpass"
              placeholder="Sponser ID"
              value={fk.values.oldpass}
              onChange={fk.handleChange}
            />
            {fk.touched.oldpass && fk.errors.oldpass && (
              <div className="error">{fk.errors.oldpass}</div>
            )}
          </div>
          <div>
            <p className="font-bold">New Password</p>
            <TextField
              fullWidth
              size="small"
              id="newpass"
              name="newpass"
              placeholder="Sponser ID"
              value={fk.values.newpass}
              onChange={fk.handleChange}
            />
            {fk.touched.newpass && fk.errors.newpass && (
              <div className="error">{fk.errors.newpass}</div>
            )}
          </div>
          <div className="flex justify-end gap-3">
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
    </div>
  );
};

export default Changepassword;
