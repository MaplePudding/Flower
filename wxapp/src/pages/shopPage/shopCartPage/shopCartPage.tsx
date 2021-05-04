import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Button, ScrollView, View} from '@tarojs/components'
import CartItemCmt from "./cartItemCmt/cartItemCmt";
import './shopCartPage.less'

interface shopCartProps{

}

interface shopCartState{
  timer: number
}

export default class shopCpt extends Component<shopCartProps, shopCartState>{
  constructor(props) {
    super(props)
    this.state = {
      timer: 0
    }
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
      <ScrollView id='shopCartContainer' scrollY enableFlex>
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

  clear(){
    Taro.setStorageSync('cart', [])
    this.setState({timer: this.state.timer + 1})
  }

  render(){
    return(
      <View id='shopCartPage'>
        <View id='shopCartHeader'>
          <View>购物车</View>
          <Button onClick={() =>{this.clear()}}>清空购物车</Button>
        </View>
        {this.initialCartList()}
        <View id='shopCartBottom'>
          <View id='shopCartTotal'>
            合计:
            <View>${this.getTotal()}</View>
          </View>
          <Button id='Settlement'>
            结算
          </Button>
        </View>
      </View>
    )
  }
}
