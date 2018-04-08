import React, {Component} from "react";
import {Card} from "antd";
import {Link} from 'react-router-dom';
const jq=require("jquery");

String.prototype.formatTime = function(format) {
  //    /Date(1477485431000)/
  var dateTime = new Date(parseInt(this.slice(6, this.length - 2)));
  format = format.replace("yyyy", dateTime.getFullYear());
  format = format.replace("yy", dateTime.getFullYear().toString().substr(2));
  format = format.replace("MM", dateTime.getMonth() + 1)
  format = format.replace("dd", dateTime.getDate());
  format = format.replace("hh", dateTime.getHours());
  format = format.replace("mm", dateTime.getMinutes());
  format = format.replace("ss", dateTime.getSeconds());
  format = format.replace("ms", dateTime.getMilliseconds())
  return format;
}
export default class NewsBlock extends Component {
  constructor() {
    super();
    this.state = {
      news: "",
      hasTime: false
    }
  }
  componentWillMount() {
    // let method = {
    //   method: 'GET'
    // }
    // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count + "", method).then(response => response.json()).then(json => {
    //   this.setState({news: json});
    // }).catch(e => console.log("error", e));

    let that=this;
    jq.ajax({
      url:"http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + that.props.type + "&count=" + that.props.count ,
      async:true, //异步请求
      dataType:'json',
      success: function(data){
        that.setState({news: data});
      }
    });

    if (this.props.hasTime) {
      this.setState({hasTime: this.props.hasTime});
    }
  }

  render() {
    let timeStyle = {
      display: this.state.hasTime
        ? "block"
        : "none",
      float: "right"
    }
    const news = this.state.news;
    let List = news
      ? (news.map(function(item, index) {
        return (
          <li key={index} class="newsLink">
            <Link to={`/getNews/${item.uniquekey}`} >
              <p >{item.title}</p>
            </Link>
            <p style={timeStyle}>{item.Id.CreationTime.formatTime("yyyy年MM月dd日hh时")}</p>
          </li>
        )
      }))
      : <li>该种类的新闻暂时没有</li>;
    return (
      <Card title={this.props.title}>
        <ul>
          {List}
        </ul>
      </Card>
    );
  }
}
