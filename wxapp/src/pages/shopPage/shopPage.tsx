import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, Input, View} from '@tarojs/components'
import shopBird from '../../img/index/shopPage/shop_bird.png'
import shopSeal from '../../img/index/shopPage/shop_seal.png'
import shopLycoris from '../../img/index/shopPage/shop_ lycoris.png'
import shopNaviCac from '../../img/index/shopPage/navi_cac.jpg'
import shopNaviHc from '../../img/index/shopPage/navi_horticulture.jpg'
import shopNaviMu from '../../img/index/shopPage/navi_makeup.jpg'
import shopBottomTree from '../../img/index/shopPage/shop_tree.png'
import shopBottomBird from '../../img/index/shopPage/shop_bird.png'
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
        <Image id='shopSeal' src={shopSeal} />
        <Input id='shopSearch' />
        <Image id='shopLycoris' src={shopLycoris} />
        <View id='shopNaviBar'>
          <View className='shopNaviBarItem'>
            <Image src={shopNaviCac} />
          </View>
          <View className='shopNaviBarItem'>
            <Image src={shopNaviHc} />
          </View>
          <View className='shopNaviBarItem'>
            <Image src={shopNaviMu} />
          </View>
        </View>
        </View>
        <View id='shopContainer'>

        </View>
        <View id='shopBottom'>
          <Image src={shopBottomTree} />
          <Image src={shopBottomBird} />
        </View>
        <ShopTabBar />
      </View>
    )
  }
}
