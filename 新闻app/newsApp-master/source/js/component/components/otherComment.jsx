import React, {Component} from "react";
import {Timeline} from 'antd';
const jq=require("jquery");

export default class OtherComment extends Component {
  constructor() {
    super();
    this.state = {
      comments: ""
    }
  }
  componentWillMount() {
    // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey).then(response => response.json()).then(json => {
    //   // console.log(json);
    //   this.setState({comments: json})
    // }).catch(e => console.log("error", e));


    let that=this;
    jq.ajax({
      url:"http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + that.props.uniquekey ,
      async:true, //异步请求
      dataType:'json',
      success: function(data){
        that.setState({comments: data})
      }
    });
  }
  render() {
    const comments=this.state.comments;
    let showcomments=null;
    if(comments.length>30){
      showcomments=comments.slice(0,30)
    }else{
      showcomments=comments.slice(0)
    }
    let comList = comments.length > 0
      ? (
        <Timeline>
          {

            showcomments.map((item, index) => {
              return (
                <Timeline.Item color={index%3==0?"blue":index%3==1?"green":"red"}  key={index}>
                  <p>评论人：{item.UserName}</p>
                  <p style={{overflow:"hidden",overflow:"hidden",whiteSpace:"nowrap" }}>评论内容：{item.Comments=="undefined"?"系统默认觉得棒棒的":item.Comments}</p>
                  <p>评论日期：{item.datetime}</p>
                </Timeline.Item>
                )
            })
          }
        </Timeline>
      )
      : (
        <p>没有评论呢,第一个沙发是你的</p>
      );

    return (
      <div className="otherComment">

        {comList}

      </div>
    )
  }
}
