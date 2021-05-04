import React, {Component} from 'react'
import {Image, Input, View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import ShopTabBar from './component/shopNavigationBar'
import CommodityItemCmt from './commodityItemCmt/commodityItemCmt'
import './shopPage.less'

interface shopProps{

}

interface shopState{
  commodityList: any
  searchContent: string
  type: string
}

export default class shopCpt extends Component<shopProps, shopState>{
  constructor(props) {
    super(props)
    this.state = {
      commodityList: [],
      searchContent: '',
      type: '',
    }
  }

  componentWillMount() {
    //this.getCommodities();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  getCommodities(){
    Taro.request({
      url: 'https://maplesyrup.top/commodity',
      success: (res) =>{
        this.setState({
          commodityList: res.data
        })
      }
    })
  }

  initialCommodityList(commodityArr, addToCart){
    if(!commodityArr){
      commodityArr = []
    }

    return(
      <View id='shopContainer'>
        {
          commodityArr.map((value) =>{
            if(value.commodity_name.indexOf(this.state.searchContent) != -1 && value.type.indexOf(this.state.type) != -1){
              value.addToCart = addToCart;
              return CommodityItemCmt(value)
            }
          })
        }
      </View>
    )
  }

  filteCommodityByType(type:string){
    this.setState({type: type})
  }

  addToCart(cartItem){
    let currentCart = Taro.getStorageSync('cart')

    if(!currentCart){
      Taro.setStorageSync('cart', [])
      currentCart = Taro.getStorageSync('cart')
    }
    currentCart.push(cartItem)
    Taro.setStorageSync('cart', currentCart)
  }


  render(){
    return(
      <View id='shopPage'>
        <View id='shopPageHeader'>
        <Image id='shopBird' src='https://47.117.127.171/img/index/shopPage/shop_bird.png' />
        <Image id='shopSeal' src='https://ftp.bmp.ovh/imgs/2021/05/cbec8789cb8bbca6.png' className='seal' />
        <Input id='shopSearch' onInput={(event) =>{this.setState({type: '', searchContent: event.target.value})}} />
        <Image id='shopLycoris' src='https://ftp.bmp.ovh/imgs/2021/05/025443ba2ddd3a78.png' className='lycoris' />
        <View id='shopFilterBar'>
          <View className='shopFilterBarItem'>
            <Image src='https://47.117.127.171/img/index/shopPage/navi_cac.png' onClick={() =>{this.filteCommodityByType('cac')}} />
          </View>
          <View className='shopFilterBarItem'>
            <Image src='https://47.117.127.171/img/index/shopPage/navi_horticulture.png' onClick={() =>{this.filteCommodityByType('horticulture')}} />
          </View>
          <View className='shopFilterBarItem'>
            <Image src='https://47.117.127.171/img/index/shopPage/navi_makeup.png' onClick={() =>{this.filteCommodityByType('makeup')}} />
          </View>
        </View>
        </View>
        {this.initialCommodityList(this.state.commodityList, this.addToCart)}
        <View id='shopBottom'>
          <Image id='shopBottomTree' src='https://ftp.bmp.ovh/imgs/2021/05/248ecc0f3b57c341.png' className='tree' />
          <Image id='shopBottomBird' src='https://ftp.bmp.ovh/imgs/2021/05/55e8d2e01f17e3af.png' className='bird' />
        </View>
        <ShopTabBar />
      </View>
    )
  }
}
