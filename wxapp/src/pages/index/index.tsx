import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {View, Image, Swiper, SwiperItem, Input} from '@tarojs/components'
import PopularVideoCmt from "./popularVideoComponent/popularVideoCmt";
import PopularItemCmt from "./popularItemComponent/popularItemCmt"
import solidTestImg from "../../img/slidTestImg.png"
import './index.less'

interface indexProps{

}

interface indexState{
  popularVideoList: any
  popularItemList: any
  searchContent: string
}

export default class Index extends Component<indexProps, indexState> {

  constructor(props) {
    super(props);
    this.state = {
      popularVideoList: [],
      popularItemList:[],
      searchContent: ''
    }
  }

  componentWillMount() {

    this.getUserOpenId()
    this.getPopularVideo()
    this.getPopularItems()

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  navigateToTargetPage(targetType:string){
    Taro.navigateTo({
      url: `../${targetType}/${targetType}`
    })
  }

  indexSearch(searchContent:string){
    this.setState({
      searchContent: searchContent
    })
  }


  async getUserOpenId(){
    Taro.login({
      success: function (res){
        if(res.code){
          Taro.request({
            url: "https://www.maplesyrup.top/userInfo",
            data: {
              code: res.code,
              appid: 'wx5d558374846339a8'
            },
            success: function (resOpenID){
              console.log(resOpenID);
            }
          }).catch((error) =>{console.log(error)})
        }else{
          console.log("Login Error");
        }
      }
    }).catch((error) =>{
      console.log(error)
    })
  }

  getPopularVideo(){
    Taro.request({
      url: 'https://www.maplesyrup.top/popularVideo',
      success:  (res) =>{
        this.setState({
          popularVideoList: res.data
        })
        console.log(res)
      }
    }).catch((error) =>{
      console.log(error)
    })
  }

  getPopularItems(){
    Taro.request({
      url: 'https://www.maplesyrup.top/popularItem',
      success:  (res) => {
        this.setState({
            popularItemList: res.data
          }
        )
        console.log(res)
      }
    }).catch((error) =>{
      console.log(error)
    })
  }

  initialPopularVideoList(popularVideoArr){
    if(popularVideoArr == false){
      popularVideoArr = []
    }
    return(
      <View id='indexPopularPostV' className='indexPopularPostChild'>
        {popularVideoArr.map((value) =>{
          if(value.popular_video_name.indexOf(this.state.searchContent) != -1) {
            return PopularVideoCmt(value)
          }
        })}
      </View>
    )
  }

  initialPopularItemList(popularItemArr){
    if(popularItemArr == false){
      popularItemArr = []
    }
    return(
      <View id='indexPopularPostV' className='indexPopularPostChild'>
        {popularItemArr.map((value) =>{
          if(value.popular_item_name.indexOf(this.state.searchContent) != -1) {
            return PopularItemCmt(value)
          }
        })}
      </View>
    )
  }

  render() {
    return (
      <View id='indexWindow'>
        <View id='indexHeader'>
          <Image id='indexPageTreeImg'  src='https://ftp.bmp.ovh/imgs/2021/05/248ecc0f3b57c341.png' className='tree' />
          <Image id='indexPageBirdImg' src='https://ftp.bmp.ovh/imgs/2021/05/55e8d2e01f17e3af.png' className='bird' />
          <Image id='indexPageFlowerImg' src='https://ftp.bmp.ovh/imgs/2021/05/b8bbe6c182700028.png' />
          <Image id='indexStarImg' src='https://ftp.bmp.ovh/imgs/2021/05/3b3c2934ac481d2c.png' className='star' />
          <Image id='indexSealImg' src='https://ftp.bmp.ovh/imgs/2021/05/cbec8789cb8bbca6.png' className='seal' />
          <Image id='indexLycorisImg' src='https://ftp.bmp.ovh/imgs/2021/05/025443ba2ddd3a78.png' className='lycoris' onClick={() => {this.indexSearch(this.state.searchContent)}} />
          <Input onInput={(event) =>{this.setState({searchContent: event.target.value})}} />
        </View>
        <Swiper id='indexSwiper' indicatorDots >
          <SwiperItem>
            <View className='indexSwiperItem'>
              <Image src={solidTestImg} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='indexSwiperItem'>
              <Image src={solidTestImg} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='indexSwiperItem'>
              <Image src={solidTestImg} />
            </View>
          </SwiperItem>
        </Swiper>
        <View id='indexNavigation'>
          <View onClick={() => this.navigateToTargetPage("videoPage")}>
            <Image src='https://ftp.bmp.ovh/imgs/2021/05/888cb917a5cc3fb4.jpg' onClick={() => this.navigateToTargetPage("videoPage")} />
          </View>
          <View>
            <Image src='https://ftp.bmp.ovh/imgs/2021/05/8a944974fee119f1.jpg' onClick={() => this.navigateToTargetPage("shopPage")} />
          </View>
          <View>
            <Image src='https://ftp.bmp.ovh/imgs/2021/05/e842d12d03ee56b2.jpg' onClick={() => this.navigateToTargetPage("dcsPage")} />
          </View>
        </View>
        <View id='indexPopularPost'>
            {this.initialPopularItemList(this.state.popularItemList)}
            {this.initialPopularVideoList(this.state.popularVideoList)}
        </View>
      </View>
    )
  }
}
