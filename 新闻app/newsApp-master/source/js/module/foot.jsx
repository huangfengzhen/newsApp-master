import React,{Component} from "react";
import MediaQuery from 'react-responsive';
import PCFoot from "../component/pc/pcFoot.jsx";
import MobileFoot from "../component/mobile/mobileFoot.jsx";

export default class Foot extends Component{
  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <PCFoot/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileFoot/>
        </MediaQuery>
      </div>
    )
  }
}
