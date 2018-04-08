import React, {Component} from "react";
import {Row, Col,BackTop } from 'antd';

export default class PcFoot extends Component {
  render() {
    return (
      <Row class="footer">
        <Col span={2}></Col>
        <Col span={20} >
          <p>&copy;&nbsp;2016 ReactNews. All Rights Reserved.</p>
          <BackTop />
        </Col>
        <Col span={2}></Col>
      </Row>
    )
  }
}
