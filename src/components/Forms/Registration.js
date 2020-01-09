import React from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class Registration extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Habitual Residence">
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              { type: 'array', required: true, message: 'Please select your habitual residence!' },
            ],
          })(<Cascader options={residences} />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Website">
          {getFieldDecorator('website', {
            rules: [{ required: true, message: 'Please input website!' }],
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>,
          )}
        </Form.Item>
        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default Registration








/*





/*
 Date: 07.01.2020
 Author: Handell


import React, { useEffect, useState } from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegistrationForm = ({ values, errors, touched, isSubmitting }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Pre Push:", users);
    if (!users.map(item => item.email).includes(values.email) && !users.map(item => item.username).includes(values.username) && values.termsOfService) {
      setUsers([...users, values]);
      console.log("Post Push:", users);
    } else {
      console.log("User already exists.");
    }
  }, [isSubmitting, users, values]);
  return (
    <div className="loginForm">
      <Form>
        <label>
          Username
          <br />
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type="text" name="username" placeholder="Username" />
        </label>
        <div>
          <label>
            Email
            <br />
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <br />
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
          </label>
        </div>
        <div>
          <label>
            {touched.termsOfService && errors.termsOfService && <p>{errors.termsOfService}</p>}
            <Field type='checkbox' name='termsOfService' checked={values.termsOfService} />
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

const Registration = withFormik({
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

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
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

export default Registration;

*/