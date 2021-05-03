import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Button, ScrollView, View} from '@tarojs/components'
import CartItemCmt from "./cartItemCmt/cartItemCmt";
import './shopCartPage.less'
import VideoItemCmt from "../../videoPage/videoItemComponent/videoItemCmt";

export default class shopCpt extends Component{
  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  initialCartList(){

    const cartList = Taro.getStorageSync('cart')

    return(
      <ScrollView id='shopCartContainer' scrollY>
        {
          cartList.map((value) =>{
            return CartItemCmt(value)
          })
        }
      </ScrollView>
    )
  }

  getTotal(){
    const cartList = Taro.getStorageSync('cart')
    return cartList.reduce((acc, item) =>{
      return acc + parseInt(item.price)
    }, 0)
  }

  render(){
    return(
      <View id='shopCartPage'>
        <View id='shopCartHeader'>
          <View>购物车</View>
          <Button>清空购物车</Button>
        </View>
        {this.initialCartList()}
        <View id='shopCartBottom'>
          <View id='shopCartTotal'>
            合计:${this.getTotal()}
          </View>
          <Button id='shopCart'>
            结算
          </Button>
        </View>
      </View>
    )
  }
}
