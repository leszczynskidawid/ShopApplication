
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GoogleIcon from "@mui/icons-material/Google";

import Button from "components/atoms/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { firebaseAuthContext } from "../data/FirebaseContext";



function FormRegister() {

  const user = useSelector(state=> state.user); 



  

     

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
      reapetPassword: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(20, "Must be 15 char or less")
        .required("Requaired"),
      email: yup
        .string()
        .email("Invalid email")
        .required("Requaier")
        .required("Requaired"),
      password: yup
        .string()
        .required("Please enter your password.")
        .min(6, "Your password is too short."),
      reapetPassword: yup
        .string()
        .required("Please retype your password.")
        .oneOf([yup.ref("password")], "Your passwords do not match."),
    }),

    onSubmit: values => {
   

      console.log("work")

      
  
    },
  });

  return (
    <div className="registerPage" style={{border:"2px solid black", display:"flex", 
    flexDirection:"column"}}>
      <h1>Zarejestruj się </h1>


      <form className="form register-form" onSubmit={formik.handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="name"> Imię: </label>
          <input
            type="text"
            id="name"
            className="inputRegister"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <p>{formik.errors.firstName}</p>
          ) : null}
        </div>
        <div className="inputContainer">
          <label htmlFor="name">email</label>
          <input
            type="email"
            id="email"
            className="inputRegister"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="inputContainer">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            className="inputRegister"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="inputContainer">
          <label htmlFor="reapet">reapet password</label>
          <input
            type="password"
            id="reapet"
            className="inputRegister"
            name="reapetPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.reapetPassword}
          />
          {formik.errors.reapetPassword && formik.touched.reapetPassword ? (
            <p>{formik.errors.reapetPassword}</p>
          ) : null}
        </div>
      
        <div className="btnContainer">
          <Button
          title="Zarejsestruj sie"
            className="btnRegister btn"
            type={"submit"}
            onSubmit={formik.handleSubmit}
          />
          <Link to = "/">Mam juz konto</Link>
         
      
        </div>
      </form>
    </div>
  );
}

export default FormRegister;
