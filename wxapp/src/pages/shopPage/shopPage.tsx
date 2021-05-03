import React, {Component} from 'react'
import {Image, Input, View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import ShopTabBar from './component/shopNavigationBar'
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
      type: ''
    }
  }

  componentWillMount() {
    this.getCommodities();
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
      url: 'https://localhost:8080/commodity',
      success: (res) =>{
        this.setState({
          commodityList: res.data
        })
      }
    })
  }

  initialCommodityList(commodityArr){
    if(!commodityArr){
      commodityArr = []
    }

    return(
      <View id='shopContainer'>
        {
          commodityArr.map((value) =>{
            if(value.commodity_name.indexOf(this.state.searchContent) != -1 && value.type.indexOf(this.state.type) != -1){
              return
            }
          })
        }
      </View>
    )
  }

  filteCommodityByType(type:string){
    this.setState({type: type})
  }

  render(){
    return(
      <View id='shopPage'>
        <View id='shopPageHeader'>
        <Image id='shopBird' src='https://localhost:8080/img/index/shopPage/shop_bird.png' />
        <Image id='shopSeal' src='https://localhost:8080/img/index/sealImg.png' className='seal' />
        <Input id='shopSearch' onInput={(event) =>{this.setState({type: '', searchContent: ''})}} />
        <Image id='shopLycoris' src='https://localhost:8080/img/index/lycorisImg.png' className='lycoris' />
        <View id='shopFilterBar'>
          <View className='shopFilterBarItem'>
            <Image src='https://localhost:8080/img/index/shopPage/navi_cac.jpg' onClick={() =>{this.filteCommodityByType('cac')}} />
          </View>
          <View className='shopFilterBarItem'>
            <Image src='https://localhost:8080/img/index/shopPage/navi_horticulture.jpg' onClick={() =>{this.filteCommodityByType('horticulture')}} />
          </View>
          <View className='shopFilterBarItem'>
            <Image src='https://localhost:8080/img/index/shopPage/navi_makeup.jpg' onClick={() =>{this.filteCommodityByType('makeup')}} />
          </View>
        </View>
        </View>
        <View id='shopContainer'>

        </View>
        <View id='shopBottom'>
          <Image id='shopBottomTree' src='https://localhost:8080/img/index/tree.png' className='tree' />
          <Image id='shopBottomBird' src='https://localhost:8080/img/index/bird.png' className='bird' />
        </View>
        <ShopTabBar />
      </View>
    )
  }
}
