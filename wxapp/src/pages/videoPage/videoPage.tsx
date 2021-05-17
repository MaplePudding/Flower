import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, Input, View} from '@tarojs/components'
import SideBar from "./sideBar/sideBar";
import VideoItemCmt from "./videoItemComponent/videoItemCmt";
import './videoPage.less'

interface videoProps{

}

interface videoState{
  sideBarStatus: boolean
  videoList: any
  searchContent: string
  currentType: string
}

export default class videoCpt extends Component<videoProps, videoState>{
  constructor(props) {
    super(props)
    this.state = {
      sideBarStatus: false,
      videoList: [],
      searchContent: '',
      currentType: ''
    }
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

  getVideo(){
    Taro.request({
      url: 'https://www.maplesyrup.top/video',
      success: (res) =>{
        this.setState({
          videoList: res.data
        })
      }
    })
  }

  activeSideBar(){
    this.setState({
      sideBarStatus: !this.state.sideBarStatus
    })
  }

  initialVideoList(videoList){
    if(!videoList){
      videoList = []
    }

    return(
      <View id='videoContainer'>
        {
          videoList.map((value) =>{
            if(value.video_name.indexOf(this.state.searchContent) != -1 && value.video_type.indexOf(this.state.currentType) != -1){
              return VideoItemCmt(value)
            }
          })
        }
      </View>
    )
  }

  filtVideoByType(type:string){
    this.setState({
      currentType: type
    })
  }

  render(){
    return(
      <View id='videoPage'>
        <View id='videoPageHeader'>
          <Image id='videoLatern' src='https://i.loli.net/2021/05/05/T3dLqCxPhkGJvDE.png' />
          <Image id='videoConfig' src='https://i.loli.net/2021/05/05/lr9POwf6SocMDY1.png' onClick={() =>{this.activeSideBar()}} />
          <Image id='videoLycoris' src='https://ftp.bmp.ovh/imgs/2021/05/025443ba2ddd3a78.png' className='lycoris' />
          <Image id='videoSeal' src='https://ftp.bmp.ovh/imgs/2021/05/cbec8789cb8bbca6.png' className='seal' />
          <Image id='videoStar' src='https://ftp.bmp.ovh/imgs/2021/05/3b3c2934ac481d2c.png' className='star' />
          <Input id='videoInput' onInput={(event) =>{this.setState({currentType: ''}); this.setState({searchContent: event.target.value})}} />
          <SideBar sideBarStatus={this.state.sideBarStatus} />
        </View>
        <View id='videoFilterBar'>
          <View className='videoFilterBarItem'>
            <Image src='https://ftp.bmp.ovh/imgs/2021/05/b2b873056335a238.jpg' onClick={() =>{this.filtVideoByType('culture')}} />
          </View>
          <View className='videoFilterBarItem'>
            <Image src='https://ftp.bmp.ovh/imgs/2021/05/49aba96de20eb239.jpg' onClick={() =>{this.filtVideoByType('morphology')}} />
          </View>
        </View>
        {this.initialVideoList(this.state.videoList)}
        <View id='videoBottom'>
          <Image id='videoBottomTree' src='https://ftp.bmp.ovh/imgs/2021/05/248ecc0f3b57c341.png' className='tree' />
          <Image id='videoBottomBird' src='https://ftp.bmp.ovh/imgs/2021/05/55e8d2e01f17e3af.png' className='bird' />
        </View>
      </View>
    )
  }
}
