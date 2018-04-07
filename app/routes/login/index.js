import React, { Component } from 'react';
import styles from './index.css';
import { Form, Input, Button, Icon, Checkbox } from 'antd';

const FormItem = Form.Item;

@Form.create()
export default class Login extends Component {

  onSummit = (e) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err, value) => {
        if (!err) {
          this.props.history.push('/');
        }
      });
  }

  render() {

    return (
      <div className={styles.login}>
        <div className={styles.body}>
          <h2>COOPTEAM</h2>
          {this.renderForm()}
        </div>
      </div>
    );
  }

  renderForm() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.onSummit} className={styles.loginForm}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入邮箱或手机号' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'gray' }} />}
              placeholder="邮箱/手机号"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'gray' }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </FormItem>
        <FormItem>
          <div className={styles.loginBtn}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <Button
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </div>
        </FormItem>
      </Form>
    );
  }

}