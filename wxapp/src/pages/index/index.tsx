import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {View, Image, Swiper, SwiperItem, Input, Video} from '@tarojs/components'
import indexPageTree from '../../img/index/tree.png'
import indexPageBird from '../../img/index/bird.png'
import indexPageFlower from '../../img/index/flower.png'
import slidTestImg from '../../img/index/slidTestImg.png'
import naviVideoImg from '../../img/index/naviVideo.jpg'
import naviShopImg from '../../img/index/naviShop.jpg'
import naviDcsImg from '../../img/index/naviDcs.jpg'
import indexItemBorder from '../../img/index/indexItemBorder.png'
import indexStarImg from '../../img/index/star.png'
import lycorisImg from '../../img/index/lycorisImg.png'
import sealImg from '../../img/index/sealImg.png'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {
    this.getUserBaseInfo();
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

  getUserBaseInfo(){
    Taro.login({
      success: function (res){
        if(res.code){
          Taro.request({
            url: "https://localhost:8080/userInfo",
            data: {
              code: res.code,
              appid: 'wx5d558374846339a8'
            },
            success: function (){

            }
          })
        }else{
          console.log("Login Error");
        }
      }
    })
  }

  render() {
    return (
      <View id='indexWindow'>
        <View id='indexHeader'>
          <Image id='indexPageTreeImg'  src={indexPageTree} className='tree' />
          <Image id='indexPageBirdImg' src={indexPageBird} className='bird' />
          <Image id='indexPageFlowerImg' src={indexPageFlower} />
          <Image id='indexStarImg' src={indexStarImg} className='star' />
          <Image id='indexSealImg' src={sealImg} className='seal' />
          <Image id='indexLycorisImg' src={lycorisImg} className='lycoris' onClick={() => {this.navigateToSearchPage()}} />
          <Input />
        </View>
        <Swiper id='indexSwiper' indicatorDots >
          <SwiperItem>
            <View className='indexSwiperItem'>
              <Image src={slidTestImg} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='indexSwiperItem'>
              <Image src={slidTestImg} />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='indexSwiperItem'>
              <Image src={slidTestImg} />
            </View>
          </SwiperItem>
        </Swiper>
        <View id='indexNavigation'>
          <View onClick={() => this.navigateToTargetPage("videoPage")}>
            <Image src={naviVideoImg} onClick={() => this.navigateToTargetPage("videoPage")} />
          </View>
          <View>
            <Image src={naviShopImg} onClick={() => this.navigateToTargetPage("shopPage")} />
          </View>
          <View>
            <Image src={naviDcsImg} onClick={() => this.navigateToTargetPage("dcsPage")} />
          </View>
        </View>
        <View id='indexPopularPost'>
          <View id='indexPopularPostC' className='indexPopularPostChild'>
            <View className='indexPopularPostItem'>
              <Image src={indexItemBorder} />

            </View>
          </View>
          <View id='indexPopularPostV' className='indexPopularPostChild'>

          </View>
        </View>
      </View>
    )
  }
}
