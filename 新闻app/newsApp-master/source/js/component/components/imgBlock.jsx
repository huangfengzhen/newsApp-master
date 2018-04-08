import React, {Component} from "react";
import {Card} from 'antd';
import {Link} from 'react-router-dom';
const jq=require("jquery");

export default class ImgBlock extends Component {
  constructor() {
    super();
    this.state = {
      images: ""
    }
  }
  componentWillMount() {
    //github跨域了
    // let method = {
    //   method: 'GET'
    // }
    // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count + "", method).then(response => response.json()).then(json => {
    //   this.setState({images: json});
    // }).catch(e => console.log("error", e));


    let that=this;
    jq.ajax({
      url:"http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + that.props.type+ "&count=" + that.props.count,
      async:true, //异步请求
      dataType:'json',
      success: function(data){
        that.setState({images: data});
      }
    });
  }
  render() {
    let styleText = {
      imageBox: {
        width: this.props.width,
        float: "left",
        marginRight: "10px",
        marginBottom: "10px"
      },
      customImage: {
        cursor: "default"
      },
      customCard: {
        cursor: "default"
      },
      h3: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "#50aee7",
        cursor: "pointer"
      },
      pName: {
        fontSize: "14px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      pDate: {
        fontSize: "12px",
        color: "#ff7f00"
      }
    }
    const images = this.state.images;
    let List = images
      ? (images.map(function(item, index) {
        return (
          <div className="imageBox" key={index} style={styleText.imageBox}>
            <Link to={`/getNews/${item.uniquekey}`}>
              <div className="custom-image">
                <img alt="example" width="100%" src={item.thumbnail_pic_s}/>
              </div>
              <div className="custom-card">
                <h3 style={styleText.h3}>{item.title}</h3>
                <p style={styleText.pName}>{item.author_name}</p>
                <p style={styleText.pDate}>{item.date}</p>
              </div>
            </Link>
          </div>

        )
      }))
      : (
        <div>没有图片</div>
      );
    return (
      <Card title={this.props.title} style={{
        marginTop: this.props.mtop
      }}>
        <div className="wrap" style={{
          marginLeft: "-24px",
          marginRight: "-34px"
        }}>
          {List}
        </div>
      </Card>
    );
  }
}
