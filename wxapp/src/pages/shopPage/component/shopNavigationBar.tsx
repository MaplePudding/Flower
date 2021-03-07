import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, View} from "@tarojs/components";
import favoriteImg from '../../../img/index/shopPage/shopTabBar/favorite.png'
import personalCenterImg from '../../../img/index/shopPage/shopTabBar/personal_center.png'
import shopCartImg from '../../../img/index/shopPage/shopTabBar/shop_cart.png'
import './shopNavigationBar.less'

function shopNavigate(){

}

const ShopNavigationBar:React.FunctionComponent = function (){
  return(
    <View className='shopNavigationBar'>
      <View onClick={() => {shopNavigate()}}>
        <Image src={favoriteImg} />
      </View>
      <View onClick={() => {shopNavigate()}}>
        <Image src={shopCartImg} />
       </View>
      <View onClick={() => {shopNavigate()}}>
        <Image src={personalCenterImg} />
      </View>
    </View>
  )
}

export default ShopNavigationBar
