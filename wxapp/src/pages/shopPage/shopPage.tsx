import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, Input, View} from '@tarojs/components'
import shopBird from '../../img/index/shopPage/shop_bird.png'
import shopSeal from '../../img/index/sealImg.png'
import shopLycoris from '../../img/index/lycorisImg.png'
import shopNaviCac from '../../img/index/shopPage/navi_cac.jpg'
import shopNaviHc from '../../img/index/shopPage/navi_horticulture.jpg'
import shopNaviMu from '../../img/index/shopPage/navi_makeup.jpg'
import shopBottomTree from '../../img/index/tree.png'
import shopBottomBird from '../../img/index/bird.png'
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
        <Image id='shopBird' src={shopBird} />
        <Image id='shopSeal' src={shopSeal} className='seal' />
        <Input id='shopSearch' />
        <Image id='shopLycoris' src={shopLycoris} className='lycoris' />
        <View id='shopFilterBar'>
          <View className='shopFilterBarItem'>
            <Image src={shopNaviCac} />
          </View>
          <View className='shopFilterBarItem'>
            <Image src={shopNaviHc} />
          </View>
          <View className='shopFilterBarItem'>
            <Image src={shopNaviMu} />
          </View>
        </View>
        </View>
        <View id='shopContainer'>

        </View>
        <View id='shopBottom'>
          <Image id='shopBottomTree' src={shopBottomTree} className='tree' />
          <Image id='shopBottomBird' src={shopBottomBird} className='bird' />
        </View>
        <ShopTabBar />
      </View>
    )
  }
}
