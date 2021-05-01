import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, OpenData, View} from '@tarojs/components'
import './personalCenterPage.less'


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

  navigateToPCFunctionPage(){

  }

  render(){
    return(
      <View id='personalCenterPage'>
        <View id='pCHeader'>
          <Image id='pCOval' src='https://localhost:8080/img/index/shopPage/persontalCenterPage/oval.png' />
          <Image id='pCLatern' src='https://localhost:8080/img/index/shopPage/persontalCenterPage/latern.png' />
          <View id='pCText'>
            个人中心
          </View>
          <View id='pCInfo'>
            <View id='pCInfoAvatar'>
              <OpenData type='userAvatarUrl' />
            </View>
            <View id='pCInfoNickName'>
              <OpenData type='userNickName' />
            </View>
            <View id='pCInfoID'>

            </View>
          </View>
        </View>
      <View id='pCFunctionBar'>
        <View>
          <Image src='https://localhost:8080/img/index/shopPage/persontalCenterPage/wallet.png' />
          待付款
        </View>
        <View>
          <Image src='https://localhost:8080/img/index/shopPage/persontalCenterPage/delivere.png' />
          待发货
        </View>
        <View>
          <Image src='https://localhost:8080/img/index/shopPage/persontalCenterPage/receipt.png' />
          待收货
        </View>
        <View>
          <Image src='https://localhost:8080/img/index/shopPage/persontalCenterPage/evaluation.png' />
          待评价
        </View>
        <View>
          <Image src='https://localhost:8080/img/index/shopPage/persontalCenterPage/refund.png' />
          售后/退款
        </View>
      </View>
        <View id='pCListContainer'>
          <Image src='https://localhost:8080/img/index/bird.png' className='bird' />
          <View id='pCList'>
            <View className='pCListItem'>
              历史记录
            </View>
            <View className='pCListItem'>
              消息中心
            </View>
            <View className='pCListItem'>
              订阅店铺
            </View>
            <View className='pCListItem'>
              联系我们
            </View>
            <View className='pCListItem'>
              设置
            </View>
          </View>
        </View>
      </View>
    )
  }
}
