import React, { useState } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import "antd/dist/antd.css"

const emptyForm = {
    username: '',
    password: ''
}

const Login = (props) => {
    const [info, setInfo] = useState(emptyForm)

    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('api/login', info)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                setInfo(emptyForm)
                props.history.push('/account')
            })
            .catch(error => console.log(error, "Login Error"))
    }

    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={info.username}
                    onChange={handleChange}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={info.password}
                    onChange={handleChange}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" className="button" type="submit">
                    Log in
          </Button>
            </Form.Item>

        </Form>
    )

};

export default Login;
