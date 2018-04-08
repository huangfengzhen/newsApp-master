import React, {Component} from "react";
import {
  Row,
  Col,
  Tabs,
  Timeline,
  Card,
  Badge,
  Upload,
  Icon,
  Modal
} from 'antd';
import {Link} from 'react-router-dom';
const TabPane = Tabs.TabPane;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

export default class PCPersonal extends Component {
  constructor() {
    super();
    this.state = {
      newsList: "",
      commentsList: "",
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ]
    }
  }
  componentWillMount() {
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid).then(response => response.json()).then(json => {
      this.setState({newsList: json})
    }).catch(e => console.log("error", e));

    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid).then(response => response.json()).then(json => {
      this.setState({commentsList: json})
    }).catch((e) => console.log("error", e));
  }
  handleCancel = () => this.setState({previewVisible: false})

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  }
  handleChange = ({fileList}) => this.setState({fileList})
  render() {
    let selfnewsList = this.state.newsList.length
      ? (this.state.newsList.map((item, index) => {
        return (
          <div className="newItem" key={index}>
            <p className="commentP">{item.Title}
              <Link className="see" to={`/getNews/${item.uniquekey}`}>查看</Link>
            </p>
          </div>
        )
      }))
      : <p>您还没有收藏的新闻呢！赶紧去收藏一条新闻</p>;
    let selfcommentsList = this.state.commentsList.length
      ? (
        <Timeline>
          {this.state.commentsList.map((item, index) => {
            return (
              <Timeline.Item key={index}>
                <p>{!item.Comments
                    ? "您没有写东西"
                    : "您说： " + item.Comments}
                  <span style={{
                    float: "right"
                  }}>您在{item.datetime}发表</span>
                </p>
              </Timeline.Item>
            )
          })
}
        </Timeline>
      )
      : <p>您还没有评论任何新闻呢！赶紧去发布您的见解呗,我们洗耳恭听</p>;
    const {previewVisible, previewImage, fileList} = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div class="pcIndex">
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="收藏列表" key="1">
                <Card className="selfnewsList" title="我收藏的新闻列表" style={{
                  backgroundColor: "#fafbfc"
                }}>
                  {selfnewsList}
                </Card>
              </TabPane>
              <TabPane tab="评论列表" key="2">
                <Card className="selfcommentsList" title="我参与的评论列表" style={{
                  backgroundColor: "#fafbfc"
                }}>
                  {selfcommentsList}
                </Card>
              </TabPane>
              <TabPane tab="我的头像" key="3">
                <Card className="selfnewsList" title="我的头像" style={{
                  backgroundColor: "#fafbfc"
                }}>

                  <Upload action="//jsonplaceholder.typicode.com/posts/" listType="picture-card" fileList={fileList} onPreview={this.handlePreview} onChange={this.handleChange}>
                    {fileList.length >= 3
                      ? null
                      : uploadButton}
                  </Upload>
                  <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{
                      width: '100%'
                    }} src={previewImage}/>
                  </Modal>

                </Card>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
