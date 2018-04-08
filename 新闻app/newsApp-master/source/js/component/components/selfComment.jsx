import React, {Component} from "react";
import {
  Button,
  Form,
  Icon,
  Input,
  notification
} from 'antd';
const FormItem = Form.Item;
const jq=require("jquery");


class Selfcomment extends Component {

  openNotification(type,mes,des,duration){
    notification[type]({
      message: mes,
      description: des,
      duration: duration,
    });
  }
  componentDidMount(){
    if(!localStorage.userid){
      this.openNotification("warning",'警告信息','您还没有登录哦',0);
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values);
      if(localStorage.userid){
        // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey+"&commnet="+values.textarea+"")
        // .then(response=>{
        //   if(response.status==200){
        //     this.openNotification("success",'发送成功','您成功发送了评论了哟',0);
        //   };
        //
        // })
        // .catch(e=>console.log("error",e));

        let that=this;
        jq.ajax({
          url:"http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+localStorage.userid+"&uniquekey="+that.props.uniquekey+"&commnet="+values.textarea ,
          async:true, //异步请求
          dataType:'json',
          success: function(data){
            that.openNotification("success",'发送成功','您成功发送了评论了哟',0);
          }
        });

      }else{
        this.openNotification("error",'','您要先登录才能发表评论呢',0);
      }
    }
  });

  }
  handClick(e){
    if(localStorage.userid){
      // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey)
      // .then(response=>response.json())
      // .then(json=>{
      //   json?this.openNotification("success",'收藏成功了哟','有个好消息告诉你,您收藏的新闻成功了呢,可以点击个人中心进去查看呢',0):null;
      // })
      // .catch(e=>console.log("error",e));


      let that=this;
      jq.ajax({
        url:"http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+that.props.uniquekey,
        async:true, //异步请求
        dataType:'json',
        success: function(data){
         data?that.openNotification("success",'收藏成功了哟','有个好消息告诉你,您收藏的新闻成功了呢,可以点击个人中心进去查看呢',0):null;
        }
      });
    }else{
      this.openNotification("error",'警告信息','您没有登录所以收藏不了我呢',0);
    }
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)} style={{textAlign:"center"}}>
        <FormItem label="看完这篇文章您有什么感想">
          {getFieldDecorator('textarea', {
            rules: [{ required: true, message: '别那么赖,写点评论噻!' }],
          })(
            <Input.TextArea autosize={{
              minRows: 3,
              maxRows: 6
            }} placeholder="我有一个梦想,要写下来"></Input.TextArea>
          )}

        </FormItem>
        <FormItem >
          <Button type="primary" htmlType="submit">发送您的评论</Button>&nbsp;&nbsp;
          <Button type="primary" htmlType="button" onClick={this.handClick.bind(this)}>收藏该文章</Button>
        </FormItem>
      </Form>
    )
  }
}




export default Selfcomment = Form.create()(Selfcomment);
