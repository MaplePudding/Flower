import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import personImg from '../../../img/index/shopPage/persontalCenterPage/person.png'
import laternImg from '../../../img/index/shopPage/persontalCenterPage/latern.png'
import ovalImg from '../../../img/index/shopPage/persontalCenterPage/oval.png'
import bird from '../../../img/index/bird.png'
import delivereImg from '../../../img/index/shopPage/persontalCenterPage/delivere.png'
import evaluationImg from '../../../img/index/shopPage/persontalCenterPage/evaluation.png'
import receiptImg from '../../../img/index/shopPage/persontalCenterPage/receipt.png'
import refundImg from '../../../img/index/shopPage/persontalCenterPage/refund.png'
import walletImg from '../../../img/index/shopPage/persontalCenterPage/wallet.png'
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
          <Image id='pCOval' src={ovalImg} />
          <Image id='pCLatern' src={laternImg} />
          <View id='pCText'>
            个人中心
          </View>
          <View id='pCInfo'>
            <Image src={personImg} />
            <View>
              userName
            </View>
          </View>
        </View>
        <View id='pCFunctionBar'>
          <View>
            <Image src={walletImg} />
            待付款
          </View>
          <View>
            <Image src={delivereImg} />
            待发货
          </View>
          <View>
            <Image src={receiptImg} />
            待收货
          </View>
          <View>
            <Image src={evaluationImg} />
            待评价
          </View>
          <View>
            <Image src={refundImg} />
            售后/退款
          </View>
        </View>
        <View id='pCListContainer'>
          <Image src={bird} className='bird' />
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
