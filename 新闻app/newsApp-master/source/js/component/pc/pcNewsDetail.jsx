import React, {Component} from "react";
import {
  Row,
  Col,
  Card,
} from 'antd';
require("../../../css/newsDetail.css");
import ImgBlock from "../components/imgBlock.jsx";
import OtherComment from "../components/otherComment.jsx";
import NewsDetail from "../components/newsDetail.jsx";

export default class PCNewsDetail extends Component {
  render() {
    return (
      <div className="pcNewsDetail">
        <Row>
          <Col span={4}></Col>
          <Col span={11}>
            <div className="adv" style={{marginTop: "16px"}}>
              <iframe width={750} frameBorder={0} height={150} scrolling="no" src="http://pos.baidu.com/s?hei=150&wid=750&di=u2914722&ltu=http%3A%2F%2Fmini.eastday.com%2Fmobile%2F161028201752132.html%3Fqid%3Djuheshuju&tcn=1502865821&ari=2&dtm=HTML_POST&ti=%E9%99%88%E4%BC%9F%E9%9C%86%E7%9C%8B%E7%A7%80%E4%BA%A4%E8%B0%88%E8%A2%AB%E5%AB%8C%E5%BC%83%EF%BC%81%E6%97%81%E8%BE%B9%E8%A7%82%E4%BC%97%E8%A1%A8%E6%83%85%E4%BA%AE%E4%BA%86%EF%BC%8C%E7%B4%A0%E8%B4%A8%E9%97%AE%E9%A2%98%E8%BF%98%E6%98%AF%E5%8F%A6%E6%9C%89%E9%9A%90%E6%83%85&cja=false&ps=0x416&ccd=24&exps=111000&dri=1&chi=1&dis=0&pcs=1583x770&dai=1&dc=2&par=1600x860&cmi=5&pis=-1x-1&cce=true&psr=1600x900&cdo=-1&cfv=0&col=zh-CN&cec=UTF-8&pss=1583x2519&tlm=1481361258&drs=3&ant=0&tpr=1502865820895&cpl=4"/>
            </div>
            <br/>
            <NewsDetail  uniquekey={this.props.match.params.newId}></NewsDetail>

          </Col>
          <Col span={4} offset={1}>
            <article className="guanggao" style={{marginTop: "16px"}}>
              <ImgBlock type="top" count="10" width="125px" title="头条" />
            </article>
            <div className="pastTimes" style={{marginTop: "20px"}}>
              <Card title="精彩评论">
                <OtherComment uniquekey={this.props.match.params.newId}></OtherComment>
              </Card>
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    )
  }
}
