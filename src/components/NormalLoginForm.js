import React from 'react';

import axios from 'axios';
import { Form, Icon, Input, Checkbox, Button } from 'antd';
import { Redirect } from 'react-router';

import './NormalLoginForm.css';
import 'antd/dist/antd.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    const appname = "itself"
    const apppasswd = "hTE2Ugzf52jZZHo4XGtCeRMV%2BwybnqYX"

    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  
    axios({ // validación que devuelve roles de usuario
      method: 'post',
      url: 'http://192.168.27.17:9734/sgapi/restservices/auth/user',
      data: {
        username: this.state.username, // admin
        password: this.state.password // qazwsx1234
      },
      auth: {
        username: appname,
        password: apppasswd
      }
    })
    .then(response => {
      console.log(response)
      response.status === 200 ? 
        console.log("puede pasar")
      :
        console.log("x")
    })
    .catch(err => {
      console.log(err.response)
      console.log(err.response.data)
    });
  }

  render() {

    const { getFieldDecorator } = this.props.form;

    return (

      <Form 
        onSubmit={this.handleSubmit} 
        className="login-form"
      >

        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input 
                prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
                placeholder="Username" 
                setFieldValue={this.state.username}
                onChange={this.handleChangeUsername}
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input 
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />} 
                type="password" 
                placeholder="Password" 
                setFieldValue={this.state.password}
                onChange={this.handleChangePassword}
            />
          )}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>

      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;