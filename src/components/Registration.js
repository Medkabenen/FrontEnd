
import React, {useEffect, useState} from 'react'
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

const Registration = ({values, errors, touched, isSubmitting}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Pre Push:", users);
    if (!users.map(item => item.email).includes(values.email) && !users.map(item => item.username).includes(values.username) && values.termsOfService) {
      setUsers([...users, values]);
      console.log("Post Push:", users);
    } else {
      console.log("User already exists.");
    }
  }, [isSubmitting]);
  return (
    <div className="loginForm">
      <Form>
        <label>
          Username
          <br/>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type="text" name="username" placeholder="Username" />
        </label>
        <div>
          <label>
            Email
            <br/>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <br/>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
          </label>
        </div>
        <div>
          <label>
            {touched.termsOfService && errors.termsOfService && <p>{errors.termsOfService}</p>}
            <Field type='checkbox' name='termsOfService' checked={values.termsOfService}/>
            Accept Terms of Service
          </label>
        </div>
        <button disabled={isSubmitting} type="submit">Register</button>
        <div>
          {users.map(user => {
            return (
              <div>
                <h3>{user.username}</h3>
                <p>{user.email}</p>
              </div>
            )
          })}
        </div>
      </Form>
    </div>
  )
}

const FormikForm = withFormik({
  mapPropsToValues({ username, email, password, termsOfService }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      termsOfService: termsOfService || false
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, 'Please enter a valid username (must be at least 4 characters long).')
      .required('Please enter a username.'),
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('Please enter an email address.'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long.')
      .required('Please enter a password.'),
    termsOfService: Yup.boolean().oneOf([true], 'Please accept Terms of Service.')
  }),

  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    setTimeout(() => {
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
    }, 1000);
    setSubmitting(false);
  }
})(Registration);

export default FormikForm;
