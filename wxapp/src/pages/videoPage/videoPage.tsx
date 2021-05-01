import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, Input, View} from '@tarojs/components'
import SideBar from "./sideBar/sideBar";
import './videoPage.less'

export default class videoCpt extends Component{
  constructor(props) {
    super(props)
    this.state = {
      sideBarStatus: false
    }
  }

  getVideo(){

  }

  filteVideo(){

  }

  activeSideBar(){
    this.setState({
      sideBarStatus: !this.state.sideBarStatus
    })
  }

  componentWillMount() {
    this.getVideo();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render(){
    return(
      <View id='videoPage'>
        <View id='videoPageHeader'>
          <Image id='videoLatern' src='https://localhost:8080/img/index/videoPage/latern.png' />
          <Image id='videoConfig' src='https://localhost:8080/img/index/videoPage/config.png' onClick={() =>{this.activeSideBar()}} />
          <Image id='videoLycoris' src='https://localhost:8080/img/index/lycorisImg.png' className='lycoris' />
          <Image id='videoSeal' src='https://localhost:8080/img/index/sealImg.png' className='seal' />
          <Image id='videoStar' src='https://localhost:8080/img/index/star.png' className='star' />
          <Input id='videoInput'  />
          <SideBar sideBarStatus={this.state.sideBarStatus} />
        </View>
        <View id='videoFilterBar'>
          <View className='videoFilterBarItem'>
            <Image src='https://localhost:8080/img/index/videoPage/flower_culture.jpg' />
          </View>
          <View className='videoFilterBarItem'>
            <Image src='https://localhost:8080/img/index/videoPage/flower_morphology.jpg' />
          </View>
        </View>
        <View id='videoContainer'>

        </View>
        <View id='videoBottom'>
          <Image id='videoBottomTree' src='https://localhost:8080/img/index/tree.png' className='tree' />
          <Image id='videoBottomBird' src='https://localhost:8080/img/index/bird.png' className='bird' />
        </View>
      </View>
    )
  }
}
