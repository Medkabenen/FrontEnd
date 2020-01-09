import React, { useState } from "react";
import { api } from "../../utils/AxiosWithAuth";
import { Form, Icon, Input, Button } from "antd";

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
        api()
            .post('auth/login', info)
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
                    value={info.username}
                    onChange={handleChange}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={info.password}
                    onChange={handleChange}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary submit" htmlType="submit" className="login-form-button button">
                    Log in
          </Button>
            </Form.Item>

        </Form>
    )
};

export default Login;
