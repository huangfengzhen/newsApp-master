import React,{Component} from "react";
import MediaQuery from 'react-responsive';
import PCHead from "../component/pc/pcHead.jsx";
import MobileHead from "../component/mobile/mobileHead.jsx";

export default class Head extends Component{
  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <PCHead/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileHead/>
        </MediaQuery>
      </div>
    )
  }
}
