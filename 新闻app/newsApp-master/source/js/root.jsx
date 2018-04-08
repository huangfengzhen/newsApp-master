const path = require("path");
import React, {Component} from "react";
import ReactDOM from "react-dom";
import MediaQuery from 'react-responsive';
// import {Router, Route, hashHistory,Switch,Link} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
import 'antd/dist/antd.css';
require('../css/pc.css');
require('../css/mobile.css');
import "fastclick/lib/fastclick.js";
require("./viewport.js")

import {
  HashRouter as Router, StaticRouter, // for server rendering
  Route,
  Link,
  Switch
} from 'react-router-dom';

// 头部尾部是内部做了响应式处理
import Head from "./module/head.jsx";//头部
import Foot from "./module/foot.jsx";//尾部
// pc
import PCIndex from "./component/pc/pcIndex.jsx";//首页
import PCDisport from "./component/pc/pcDisport.jsx";//娱乐
import PCDomestic from "./component/pc/pcDomestic.jsx";//国内
import PCPersonal from "./component/pc/pcPersonal.jsx";//个人中心
import PCSports from "./component/pc/pcSports.jsx";//体育
import PCJunshi from "./component/pc/pcJunshi.jsx";//军事
import PCInternal from "./component/pc/pcInternal.jsx";//国际
import PCNewsDetail from "./component/pc/pcNewsDetail.jsx";//新闻详情
import PCCaijing from "./component/pc/pcCaijing.jsx";//新闻详情

// 移动端
import MobileIndex from "./component/mobile/mobileIndex.jsx";
import MobileDisport from "./component/mobile/mobileDisport.jsx";
import MobileDomestic from "./component/mobile/mobileDomestic.jsx";
import MobilePersonal from "./component/mobile/mobilePersonal.jsx";
import MobileSports from "./component/mobile/mobileSports.jsx";
import MobileJunshi from "./component/mobile/mobileJunshi.jsx";
import MobileInternal from "./component/mobile/mobileInternal.jsx";
import MobileNewsDetail from "./component/mobile/mobileNewsDetail.jsx";
import MobileCaijing from "./component/mobile/mobileCaijing.jsx";

// 之前出错的问题是忘了组件首字母写大写
// 正常情况要class写成className  但是我安装了react-html-attrs 写在babel依赖里面所以可以直接写

export default class Root extends Component {
  render() {
    return (

      <Router history={history}>

        <div class="newsApp">
          <Head/>

          <MediaQuery query='(min-device-width: 1224px)'>
            <Switch>
              {/* exact关键字，这个关键字是将"/"做唯一匹配，否则"/"和"/xxx"都会匹配到path为"/"的路由  react-router-dom 4.x版本*/}
              <Route component={PCIndex} path="/" exact></Route>
              <Route component={PCDisport} path="/disport"></Route>
              <Route component={PCCaijing} path="/caijing"></Route>
              <Route component={PCDomestic} path="/domestic"></Route>
              <Route component={PCPersonal} path="/personal"></Route>
              <Route component={PCSports} path="/sports"></Route>
              <Route component={PCJunshi} path="/junshi"></Route>
              <Route component={PCInternal} path="/internal"></Route>
              <Route component={PCNewsDetail} path="/getNews/:newId"></Route>
            </Switch>
          </MediaQuery>
          <MediaQuery query='(max-device-width: 1224px)'>
            <Switch>
              <Route component={MobileIndex} path="/" exact></Route>
              <Route component={MobileDisport} path="/disport"></Route>
              <Route component={MobileCaijing} path="/caijing"></Route>
              <Route component={MobileDomestic} path="/domestic"></Route>
              <Route component={MobilePersonal} path="/personal"></Route>
              <Route component={MobileSports} path="/sports"></Route>
              <Route component={MobileJunshi} path="/junshi"></Route>
              <Route component={MobileInternal} path="/internal"></Route>
              <Route component={MobileNewsDetail} path="/getNews/:newId"></Route>
            </Switch>
          </MediaQuery>
          <Foot/>
        </div>
      </Router>

    )
  }
}
ReactDOM.render(
  <Root/>, document.getElementById("new_app"));
