import React,{Component} from "react";
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
import { Drawer, List} from 'antd-mobile';

import {Link} from "react-router-dom";

export default class MobileHead extends Component{
  render(){
    return (
      <div className="MobileHead">
        <a class="logo">
          <img src={require("../../../image/logo.png")}/>
          <span>My React News</span>
          <Icon type="ellipsis" style={{fontSize:".3rem",float:"right","marginTop":".15rem"}}/>
        </a>
      </div>
    )
  }
}
