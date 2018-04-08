import React, {Component} from "react";
import {Row, Col, Carousel, Tabs, Card,Spin } from 'antd';
const TabPane = Tabs.TabPane;
import NewsBlock from "../components/newsBlock.jsx";
import ImgBlock from "../components/imgBlock.jsx";
import PcProduct from "../components/pc_product.jsx";
import PcProduct2 from "../components/pc_product2.jsx";
import {Link} from 'react-router-dom';

export default class PCIndex extends Component {
  render() {

    return (
      <div class="pcIndex">
        <Row>
          <Col span={2}></Col>
          <Col span={20}>

            <div className="indexMian">
              <div className="mainBox1">
                <div className="leftContainer">
                  <Carousel autoplay>
                    <div>
                      <img src={require("../../../image/carousel_1.jpg")} alt=""/>
                    </div>
                    <div>
                      <img src={require("../../../image/carousel_2.jpg")} alt=""/>
                    </div>
                    <div>
                      <img src={require("../../../image/carousel_3.jpg")} alt=""/>
                    </div>
                    <div>
                      <img src={require("../../../image/carousel_4.jpg")} alt=""/>
                    </div>
                  </Carousel>
                  <div className="newsShow1" style={{marginTop:"14px"}}>
                    <ImgBlock type="junshi" count="9" width="126px"/>
                  </div>
                </div>
                <div className="newsSection">
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="头条新闻" key="1">
                      <NewsBlock type="top" count="29"></NewsBlock>
                    </TabPane>
                    <TabPane tab="国内" key="2">
                      <NewsBlock type="guonei" count="29"></NewsBlock>
                    </TabPane>
                    <TabPane tab="体育" key="3">
                      <NewsBlock type="tiyu" count="29"></NewsBlock>
                    </TabPane>
                    <TabPane tab="财经" key="4">
                      <NewsBlock type="caijing" count="29"></NewsBlock>
                    </TabPane>
                    <TabPane tab="社会" key="5">
                      <NewsBlock type="shehui" count="29"></NewsBlock>
                    </TabPane>
                  </Tabs>
                </div>
                <div className="productSection">
                  <Card title="图片" extra={< a href = "http://photo.sina.com.cn/" > More < /a>}>
                    <PcProduct2/>
                  </Card>
                </div>
                <div className="clear" style={{clear:"both"}}></div>
                <div className="imgBlock" style={{marginTop:"16px"}}>
                  <ImgBlock type="keji" count="10" width="121px" title="科技" />
                  <ImgBlock type="yule" count="20" width="121px" title="娱乐" mtop="16px"/>
                </div>
              </div>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
