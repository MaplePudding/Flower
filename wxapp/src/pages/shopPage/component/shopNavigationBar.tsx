import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, View} from "@tarojs/components";
import favoriteImg from '../../../img/index/shopPage/shopTabBar/favorite.png'
import personalCenterImg from '../../../img/index/shopPage/shopTabBar/personal_center.png'
import shopCartImg from '../../../img/index/shopPage/shopTabBar/shop_cart.png'
import './shopNavigationBar.less'


function shopNavigate(targetType:string){
  const pageStack = Taro.getCurrentPages();
  const currentPageRoute = pageStack[pageStack.length - 1].route;

  if(currentPageRoute === "pages/shopPage/shopPage"){
    Taro.navigateTo({
      url:`./${targetType}/${targetType}`
    })
  }else{
    Taro.redirectTo({
      url: `./${targetType}/${targetType}`
    })
  }
}

const ShopNavigationBar:React.FunctionComponent = function (){
  return(
    <View className='shopNavigationBar'>
      <View onClick={() => {shopNavigate("favoritePage")}}>
        <Image src={favoriteImg} />
      </View>
      <View onClick={() => {shopNavigate("shopCartPage")}}>
        <Image src={shopCartImg} />
       </View>
      <View onClick={() => {shopNavigate("personalCenterPage")}}>
        <Image src={personalCenterImg} />
      </View>
    </View>
  )
}

export default ShopNavigationBar
