import React, {Component} from 'react'
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
          <Image id='pCOval' src='https://i.loli.net/2021/05/05/Qvcwmd8geJ9Zyi1.png' />
          <Image id='pCLatern' src='https://i.loli.net/2021/05/05/q9ylJfIoKADV2jY.png' />
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
          <Image src='https://i.loli.net/2021/05/05/GBThOPl97iymqLw.png' />
          待付款
        </View>
        <View>
          <Image src='https://i.loli.net/2021/05/05/aYJoXZpPAQtKcbl.png' />
          待发货
        </View>
        <View>
          <Image src='https://i.loli.net/2021/05/05/zyBQeNw2tqlpRZE.png' />
          待收货
        </View>
        <View>
          <Image src='https://i.loli.net/2021/05/05/WEKMfOQBz7obZCD.png' />
          待评价
        </View>
        <View>
          <Image src='https://i.loli.net/2021/05/05/ojQ37D28mFZYvn9.png' />
          售后/退款
        </View>
      </View>
        <View id='pCListContainer'>
          <Image src='https://ftp.bmp.ovh/imgs/2021/05/55e8d2e01f17e3af.png' className='bird' />
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
