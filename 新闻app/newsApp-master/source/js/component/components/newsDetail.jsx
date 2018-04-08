import React, {Component} from "react";
import Selfcomment from "./selfComment.jsx";
const jq=require("jquery");

export default class NewsDetail extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      pagecontent: "",
    }
  }
  componentWillMount() {
    // var method = {
    //   method: "Get"
    // };
    // fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.uniquekey}`, method).then(response => response.json()).then(json => {
    //   this.setState({data: json, pagecontent: json.pagecontent});
    //   document.title = json.title;
    // }).catch(e => console.log("error", e));


    let that=this;
    jq.ajax({
      url:`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${that.props.uniquekey}` ,
      async:true, //异步请求
      dataType:'json',
      success: function(data){
        that.setState({data: data, pagecontent: data.pagecontent});
      }
    });
  }
  render(){
    return (
      <div className="newscontainer">
        <div className="pagecontent" dangerouslySetInnerHTML={{__html: this.state.pagecontent}}></div>
        <br/>
        <div className="other">
          <Selfcomment uniquekey={this.props.uniquekey}/>
        </div>
      </div>
    )
  }
}
