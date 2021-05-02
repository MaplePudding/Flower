import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {View, Image, Swiper, SwiperItem, Input, Video} from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props);
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

  navigateToSearchPage(){

  }

  async getUserInfo(){
    await Taro.getUserInfo({
      success: function(res){
        console.log(res);
      }
    })
  }


  async getUserOpenId(){
    Taro.login({
      success: function (res){
        if(res.code){
          Taro.request({
            url: "https://localhost:8080/userInfo",
            data: {
              code: res.code,
              appid: 'wx5d558374846339a8'
            },
            success: function (resOpenID){
              console.log(resOpenID);
            }
          })
        }else{
          console.log("Login Error");
        }
      }
    })
  }

  getPopularVideo(){
    Taro.request({
      url: 'https://localhost:8080/popularVideo',
      success: function (res){
        console.log(res)
      }
    })
  }

  getPopularItems(){
    Taro.request({
      url: 'https://localhost:8080/popularItem',
      success: function (res) {
        console.log(res)
      }
    })
  }

  render() {
    return (
      <View id='indexWindow'>
        <View id='indexHeader'>
          <Image id='indexPageTreeImg'  src='https://localhost:8080/img/index/tree.png' className='tree' />
          <Image id='indexPageBirdImg' src='https://localhost:8080/img/index/bird.png' className='bird' />
          <Image id='indexPageFlowerImg' src='https://localhost:8080/img/index/flower.png' />
          <Image id='indexStarImg' src='https://localhost:8080/img/index/star.png' className='star' />
          <Image id='indexSealImg' src='https://localhost:8080/img/index/sealImg.png' className='seal' />
          <Image id='indexLycorisImg' src='https://localhost:8080/img/index/lycorisImg.png' className='lycoris' onClick={() => {this.navigateToSearchPage()}} />
          <Input />
        </View>
        <Swiper id='indexSwiper' indicatorDots >
          <SwiperItem>
            <View className='indexSwiperItem'>
              <Image src='https://localhost:8080/img/index/slidTestImg.png' />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='indexSwiperItem'>
              <Image src='https://localhost:8080/img/index/slidTestImg.png' />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='indexSwiperItem'>
              <Image src='https://localhost:8080/img/index/slidTestImg.png' />
            </View>
          </SwiperItem>
        </Swiper>
        <View id='indexNavigation'>
          <View onClick={() => this.navigateToTargetPage("videoPage")}>
            <Image src='https://localhost:8080/img/index/naviVideo.jpg' onClick={() => this.navigateToTargetPage("videoPage")} />
          </View>
          <View>
            <Image src='https://localhost:8080/img/index/naviShop.jpg' onClick={() => this.navigateToTargetPage("shopPage")} />
          </View>
          <View>
            <Image src='https://localhost:8080/img/index/naviDcs.jpg' onClick={() => this.navigateToTargetPage("dcsPage")} />
          </View>
        </View>
        <View id='indexPopularPost'>
          <View id='indexPopularPostC' className='indexPopularPostChild'>
            <View className='indexPopularPostItem'>
              <Image src='https://localhost:8080/img/index/indexItemBorder.png' />

            </View>
          </View>
          <View id='indexPopularPostV' className='indexPopularPostChild'>

          </View>
        </View>
      </View>
    )
  }
}
