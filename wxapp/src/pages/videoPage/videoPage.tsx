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
      url: 'https://localhost:8080/video',
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
          <Image id='videoLatern' src='https://localhost:8080/img/index/videoPage/latern.png' />
          <Image id='videoConfig' src='https://localhost:8080/img/index/videoPage/config.png' onClick={() =>{this.activeSideBar()}} />
          <Image id='videoLycoris' src='https://localhost:8080/img/index/lycorisImg.png' className='lycoris' />
          <Image id='videoSeal' src='https://localhost:8080/img/index/sealImg.png' className='seal' />
          <Image id='videoStar' src='https://localhost:8080/img/index/star.png' className='star' />
          <Input id='videoInput' onInput={(event) =>{this.setState({currentType: ''}); this.setState({searchContent: event.target.value})}} />
          <SideBar sideBarStatus={this.state.sideBarStatus} />
        </View>
        <View id='videoFilterBar'>
          <View className='videoFilterBarItem'>
            <Image src='https://localhost:8080/img/index/videoPage/flower_culture.jpg' onClick={() =>{this.filtVideoByType('culture')}} />
          </View>
          <View className='videoFilterBarItem'>
            <Image src='https://localhost:8080/img/index/videoPage/flower_morphology.jpg' onClick={() =>{this.filtVideoByType('morphology')}} />
          </View>
        </View>
        {this.initialVideoList(this.state.videoList)}
        <View id='videoBottom'>
          <Image id='videoBottomTree' src='https://localhost:8080/img/index/tree.png' className='tree' />
          <Image id='videoBottomBird' src='https://localhost:8080/img/index/bird.png' className='bird' />
        </View>
      </View>
    )
  }
}
