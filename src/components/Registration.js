import React, {useEffect, useState} from 'react'
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
// import {api} from "../utils/AxiosWithAuth";

const Registration = ({values, errors, touched, isSubmitting}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log("Pre Push:", users);
    if (!users.map(item => item.username).includes(values.username)) {
      setUsers([...users, values]);
      // console.log("Post Push:", users);
    } else {
      // console.log("User already exists.");
    }
  }, [isSubmitting, users, values]);
  return (
    <div className="loginForm">
      <Form>
        <label>
          Username
          <br/>
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && <p>{errors.username}</p>}
        </label>
        <div>
          <label>
            Password
            <br/>
            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </label>
        </div>
        <button disabled={isSubmitting} type="submit">Register</button>
      </Form>
    </div>
  )
}

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, 'Please enter a valid username (must be at least 4 characters long).')
      .required('Please enter a username.'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long.')
      .required('Please enter a password.'),
  }),

  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log("axios:", res.data);
        resetForm();
        // data.push(res.data);
        // console.log("data:", data);
      })
      .catch(err => {
        console.log(err);
      });
    setSubmitting(false);
  }
})(Registration);

export default FormikForm;
