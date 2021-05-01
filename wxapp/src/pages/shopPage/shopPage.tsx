import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, Input, View} from '@tarojs/components'

import ShopTabBar from './component/shopNavigationBar'
import './shopPage.less'

export default class shopCpt extends Component{
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.getShopItems();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  getShopItems(){

  }

  render(){
    return(
      <View id='shopPage'>
        <View id='shopPageHeader'>
        <Image id='shopBird' src='https://localhost:8080/img/index/shopPage/shop_bird.png' />
        <Image id='shopSeal' src='https://localhost:8080/img/index/sealImg.png' className='seal' />
        <Input id='shopSearch' />
        <Image id='shopLycoris' src='https://localhost:8080/img/index/lycorisImg.png' className='lycoris' />
        <View id='shopFilterBar'>
          <View className='shopFilterBarItem'>
            <Image src='https://localhost:8080/img/index/shopPage/navi_cac.jpg' />
          </View>
          <View className='shopFilterBarItem'>
            <Image src='https://localhost:8080/img/index/shopPage/navi_horticulture.jpg' />
          </View>
          <View className='shopFilterBarItem'>
            <Image src='https://localhost:8080/img/index/shopPage/navi_makeup.jpg' />
          </View>
        </View>
        </View>
        <View id='shopContainer'>

        </View>
        <View id='shopBottom'>
          <Image id='shopBottomTree' src='https://localhost:8080/img/index/tree.png' className='tree' />
          <Image id='shopBottomBird' src='https://localhost:8080/img/index/bird.png' className='bird' />
        </View>
        <ShopTabBar />
      </View>
    )
  }
}
