import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, Input, View} from '@tarojs/components'
import laternImg from '../../img/index/videoPage/latern.png'
import configImg from '../../img/index/videoPage/config.png'
import sealImg from '../../img/index/sealImg.png'
import lycorisImg from '../../img/index/lycorisImg.png'
import starImg from '../../img/index/star.png'
import flowerCulture from '../../img/index/videoPage/flower_culture.jpg'
import flowerMorphology from '../../img/index/videoPage/flower_morphology.jpg'
import videoItemBorder from '../../img/index/indexItemBorder.png'
import videoBottomTree from '../../img/index/tree.png'
import videoBottomBird from '../../img/index/bird.png'
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
          <Image id='videoLatern' src={laternImg} />
          <Image id='videoConfig' src={configImg} onClick={() =>{this.activeSideBar()}} />
          <Image id='videoLycoris' src={lycorisImg} className='lycoris' />
          <Image id='videoSeal' src={sealImg} className='seal' />
          <Image id='videoStar' src={starImg} className='star' />
          <Input id='videoInput'  />
          <SideBar sideBarStatus={this.state.sideBarStatus} />
        </View>
        <View id='videoFilterBar'>
          <View className='videoFilterBarItem'>
            <Image src={flowerCulture} />
          </View>
          <View className='videoFilterBarItem'>
            <Image src={flowerMorphology} />
          </View>
        </View>
        <View id='videoContainer'>

        </View>
        <View id='videoBottom'>
          <Image id='videoBottomTree' src={videoBottomTree} className='tree' />
          <Image id='videoBottomBird' src={videoBottomBird} className='bird' />
        </View>
      </View>
    )
  }
}
