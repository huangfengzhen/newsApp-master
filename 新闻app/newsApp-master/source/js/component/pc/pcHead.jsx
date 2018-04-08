import React, {Component} from "react";
import {
  Row,
  Col,
  Menu,
  Icon,
  Button,
  Form,
  Input,
  Modal,
  Checkbox,
  Tabs
} from 'antd';
import {Link} from "react-router-dom";
const FormItem = Form.Item;
// import logo from "../../../image/logo.png";

class PcHead extends Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      hasLogined: false,
      userNickName: "未知名字",
      userid: 0,
      modalVisible: false,
      confirmDirty: false,
      formLayout: 'horizontal'
    }
  }
  handleClick(e) {
    // console.log('click ', e);
    if (e.key == "loginOut") {
      this.setState({modalVisible: true});
      return;
    }
    this.setState({current: e.key});

  }
  handleOk() {
    this.setState({modalVisible: false})
  }
  handleCancel() {
    this.setState({modalVisible: false})
  }
  // 登录表单
  loginFn(values) {
    // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=" + values.userName + "&password=" + values.password + "", {method: 'Get'}).then(response => response.json()).then(data => {
    //   if (data != null) {
    //     localStorage.userNickName = data.NickUserName;
    //     localStorage.userid = data.UserId;
    //     this.setState({userNickName: data.NickUserName, userid: data.UserId, modalVisible: false, hasLogined: true})
    //   }
    // }).catch(e => console.log("error", e));

    let that=this;
    jq.ajax({
      url:"http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=" + values.userName + "&password=" + values.password ,
      async:true, //异步请求
      dataType:'json',
      success: function(data){
          if (data != null) {
            localStorage.userNickName = data.NickUserName;
            localStorage.userid = data.UserId;
            that.setState({userNickName: data.NickUserName, userid: data.UserId, modalVisible: false, hasLogined: true})
          }
      }
    });
  }
  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields([
      "userName", "password"
    ], (err, values) => {
      // console.log("登录表单 错误为");
      // console.log(err);
      if (!err) {
        // console.log("登录表单 数值为");
        // console.log(values); //{userName: "wuweijun", password: "888888"}
        // 登录接口
        // http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=456&password=789 返回值 成功是json格式的字符串 不成功是null
        this.loginFn.call(this, values);
      }
    });
  }
  // 注册表单
  handleRegisterSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields([
      "r_userName", "r_password", "r_comparePassword"
    ], (err, values) => {
      if (!err) {
        // console.log("注册表单 数值为");
        // 注册接口
        // console.log(values); //{r_userName: "123", r_password: "223", r_comparePassword: "223"}
        // http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=789&r_password=123&r_confirmPassword=123
        // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=" + values.r_userName + "&r_password=" + values.r_password + "&r_confirmPassword=" + values.r_comparePassword + "", {method: 'Post'}).then(response => {
        //   values["userName"] = values.r_userName;
        //   values["password"] = values.r_password;
        //   this.loginFn.call(this, values);
        // }).catch(e => console.log("error", e));


        let that=this;
        jq.ajax({
          url:"http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=" + values.r_userName + "&r_password=" + values.r_password + "&r_confirmPassword=" + values.r_comparePassword  ,
          async:true, //异步请求
          dataType:'json',
          success: function(data){
              values["userName"] = values.r_userName;
              values["password"] = values.r_password;
              that.loginFn.call(this, values);
          }
        });
      }
    });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('r_password')) {
      callback('两次密码不一样');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['r_comparePassword'], {force: true});
    }
    callback();
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({
      confirmDirty: this.state.confirmDirty || !!value
    });
  }
  handloginOUt() {
    localStorage.userNickName = "";
    localStorage.userid = "";
    this.setState({hasLogined: false});
  }
  componentWillMount() {
    if (localStorage.userNickName) {
      this.setState({hasLogined: true, userNickName: localStorage.userNickName, userid: localStorage.userid})
    }
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    const UserShow = this.state.hasLogined
      ? (
        <Menu.Item key="loginIn" class="resgister">
          <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
          &nbsp;&nbsp;
           <Button><Link to="/personal">
           个人中心
          </Link></Button>

          &nbsp;&nbsp;
          <Button type="danger" onClick={this.handloginOUt.bind(this)}>退出</Button>
        </Menu.Item>
      )
      : (
        <Menu.Item key="loginOut" class="resgister">
          <Icon type="user"/>注册/登录
        </Menu.Item>
      );
    return (
      <div class="pcHead">
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a class="logo">
              <img src={require("../../../image/logo.png")}/>
              <span>My React News</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
              <Menu.Item key="top">
                <Link to="/">
                  <Icon type="heart-o"/>头条
                </Link>
              </Menu.Item>
              <Menu.Item key="disport">
                <Link to="/disport">
                  <Icon type="coffee"/>娱乐
                </Link>
              </Menu.Item>
              <Menu.Item key="caijing">
                <Link to="/caijing">
                  <Icon type="coffee"/>财经
                </Link>
              </Menu.Item>
              <Menu.Item key="domestic">
                <Link to="/domestic">
                  <Icon type="global"/>国内
                </Link>
              </Menu.Item>
              <Menu.Item key="sports">
                <Link to="/sports">
                  <Icon type="rocket"/>体育
                </Link>
              </Menu.Item>
              <Menu.Item key="guoji" >
                <Link to="/internal">
                  <Icon type="appstore"/>国际
                </Link>
              </Menu.Item>
              <Menu.Item key="keji" >
                <Link to="/junshi">
                  <Icon type="appstore"/>军事
                </Link>
              </Menu.Item>
              {UserShow}
            </Menu>
            <Modal title="用户中心" visible={this.state.modalVisible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)} okText="关闭" cancelText="取消">
              <Tabs defaultActiveKey="1" type="card">
                <Tabs.TabPane tab="登录" key="1">
                  <Form onSubmit={this.handleLoginSubmit.bind(this)} className="head-login-form" layout={this.state.formLayout}>
                    <FormItem label="请输入用户名">
                      {getFieldDecorator('userName', {
                        rules: [
                          {
                            required: true,
                            message: '请输入你的用户名!'
                          }
                        ]
                      })(
                        <Input prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>} placeholder="Username"/>
                      )}
                    </FormItem>
                    <FormItem label="请输入密码">
                      {getFieldDecorator('password', {
                        rules: [
                          {
                            required: true,
                            message: '请输入密码!'
                          }
                        ]
                      })(
                        <Input prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>} type="password" placeholder="Password"/>
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                      })(
                        <Checkbox>记住密码</Checkbox>
                      )}
                      <a className="login-form-forgot" href="">找回忘记密码</a>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                      </Button>
                    </FormItem>
                  </Form>
                </Tabs.TabPane>
                <Tabs.TabPane tab="注册" key="2">
                  <Form onSubmit={this.handleRegisterSubmit.bind(this)} className="head-login-form" layout={this.state.formLayout}>
                    <FormItem label="请输入用户名">
                      {getFieldDecorator('r_userName', {
                        rules: [
                          {
                            required: true,
                            message: '请输入你的用户名!'
                          }
                        ]
                      })(
                        <Input prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>} placeholder="用户名"/>
                      )}
                    </FormItem>
                    <FormItem label="请输入密码">
                      {getFieldDecorator('r_password', {
                        rules: [
                          {
                            required: true,
                            message: '请输入密码!'
                          }
                        ]
                      })(
                        <Input prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>} type="password" placeholder="密码"/>
                      )}
                    </FormItem>
                    <FormItem label="请再次输入密码">
                      {getFieldDecorator('r_comparePassword', {
                        rules: [
                          {
                            required: true,
                            message: '请再次输入密码!'
                          }, {
                            validator: this.checkPassword
                          }
                        ]
                      })(
                        <Input prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>} onBlur={this.handleConfirmBlur.bind(this)} type="password" placeholder="再次输入密码"/>
                      )}
                    </FormItem>
                    <FormItem>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        注册
                      </Button>
                    </FormItem>
                  </Form>
                </Tabs.TabPane>
              </Tabs>
            </Modal>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}

export default PcHead = Form.create()(PcHead);
