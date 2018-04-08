import React,{Component} from "react";
import {Row, Col} from 'antd';
import NewsBlock from "../components/newsBlock.jsx";

export default class PCInternal extends Component{
  render(){
    return (
      <div class="pcIndex">
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <div className="pcinternal">
                <NewsBlock type="guoji" count="60" title="国际" hasTime="true"></NewsBlock>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
