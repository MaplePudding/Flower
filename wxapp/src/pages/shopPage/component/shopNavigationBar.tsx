import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, View} from "@tarojs/components";
import favoriteImg from '../../../img/favorite.png'
import shopCarImg from '../../../img/shop_cart.png'
import centerImg from '../../../img/personal_center.png'
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
        <Image src={shopCarImg} />
       </View>
      <View onClick={() => {shopNavigate("personalCenterPage")}}>
        <Image src={centerImg} />
      </View>
    </View>
  )
}

export default ShopNavigationBar
