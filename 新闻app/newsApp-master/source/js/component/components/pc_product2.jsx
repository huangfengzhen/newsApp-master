import React from "react";
import "../../../css/pcProduct.css";

export default function PcProduct2() {
  return (
    <div className="new_pics" id="new_pics">
      <ul className="new_pic_lst">
        <li data-sudaclick="blk_photo_wit">
          <h3 className="new_pic_tit"><a href="http://photo.sina.com.cn/wit/" target="_blank">看见</a></h3>
          <div className="new_pic_box">
            <a href="http://slide.news.sina.com.cn/x/slide_1_64237_192212.html" target="_blank" className="zt_pic_w"><img src="http://www.sinaimg.cn/dy/slidenews/1_simg/2017_30/0a03d2587a2c000ff7da65f00f8804d0.jpg" width={260} height={174} /><span className="ct_txt">阜新：一座煤城的艰难转型</span></a>
          </div>
        </li>
        <li data-sudaclick="blk_photo_mortal">
          <h3 className="new_pic_tit"><a href="http://slide.news.sina.com.cn/s_list_1_65716.html" target="_blank">新青年</a></h3>
          <div className="new_pic_box">
            <a href="http://slide.news.sina.com.cn/slide_1_65716_196277.html/d/8" target="_blank" className="zt_pic_w"><img src="http://n.sinaimg.cn/news/1_ori/upload/3ad618a7/20170808/TJb8-fyitapp2882917.jpg" width={260} height={174} /><span className="ct_txt">盲人电影讲解员：把光影说出来</span></a>
          </div>
        </li>
        <li data-sudaclick="blk_photo_hist">
          <h3 className="new_pic_tit"><a href="http://photo.sina.com.cn/hist/" target="_blank">记忆</a></h3>
          <div className="new_pic_box">
            <a href="http://slide.news.sina.com.cn/j/slide_1_45272_193257.html" target="_blank" className="zt_pic_w"><img src="http://www.sinaimg.cn/dy/slidenews/1_simg/2017_30/efb8758e1142f1b24ae1444547162650.jpg" width={260} height={174} /><span className="ct_txt">建国后我军打过哪些大仗？</span></a>
          </div>
        </li>
      </ul>
      <div className="ct_p_01 clearfix" id="blk_xlsp_01" data-sudaclick="sh2_video">
        <div className="ct_box"><a href="http://video.sina.com.cn/p/news/s/doc/2017-08-10/194366843273.html?cre=videopc&mod=soci&loc=1&r=0&doct=0&rfunc=100&tj=none" target="_blank"><img src="http://p.ivideo.sina.com.cn/video/251/482/922/251482922_432_243.jpg" /><s className="play_icon" /><span className="ct_txt" style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>千难万险不怕  他们涉险前行</span></a></div><div className="ct_box"><a href="http://video.sina.com.cn/p/news/s/doc/2017-08-10/222066844329.html?cre=videopc&mod=soci&loc=2&r=0&doct=0&rfunc=100&tj=none" target="_blank"><img  src="http://p.ivideo.sina.com.cn/video/251/483/543/251483543_432_243.jpg" /><s className="play_icon" /><span className="ct_txt" style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>国际军事比赛2017“航空飞镖”闭幕  中国空军获优胜团体奖</span></a></div></div>
    </div>
  )
}
