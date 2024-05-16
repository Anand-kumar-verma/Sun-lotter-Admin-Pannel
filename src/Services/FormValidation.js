import * as Yup from "yup";
export const playerRegistrationSchema = Yup.object().shape({
  referral_user_id: Yup.string().required("Referral is mandatory"),
  full_name: Yup.string().required("Full name is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, {
      message:
        "Invalid mobile number format. It must be a 10-digit number without dots.",
    })
    .test(
      "no-dots",
      "Dots are not allowed in the mobile number.",
      (value) => !/\./.test(value)
    )
    .required("Mobile number is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  username: Yup.string().required("User id is required field"),
});

export const changePasswordSchema = Yup.object().shape({
  oldpass: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  newpass: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
});

export const subAdminRegistrationSchema = Yup.object().shape({
  sub_admin_name: Yup.string().required("Name is mandatory"),
  sub_admin_login_id: Yup.string().required("Login Id is required"),
  sub_admin_password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  sub_admin_contact_no: Yup.string()
    .matches(/^[0-9]{10}$/, {
      message:
        "Invalid mobile number format. It must be a 10-digit number without dots.",
    })
    .test(
      "no-dots",
      "Dots are not allowed in the mobile number.",
      (value) => !/\./.test(value)
    )
    .required("Mobile number is required"),
  sub_admin_email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
});
