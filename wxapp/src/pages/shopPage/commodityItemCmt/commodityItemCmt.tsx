import React from 'react'
import {Button, Image, View} from "@tarojs/components";
import border from '../../../img/border.png'
import './commodityItemCmt.less'

interface commodityItemProps{
  commodity_name: string
  commodity_src: string
  commodity_description: string
  commodity_num: number
  type: string
  price: number
  sales: number
  addToCart: any
}

const CommodityItemCmt:React.FunctionComponent<commodityItemProps> = function(props){

  const baseUrl:string = 'https://47.117.127.171/shopItem/'
  return(
    <View className='commodityItem item'>
      <Image src={border} className='border CommodityItemBorder' />
      <Image src={baseUrl + props.commodity_src} className='commodityCover' />
      <View className='commodityName'>
        {props.commodity_name}
      </View>
      <View className='commodityDescription'>
        {props.commodity_description}
      </View>
      <View className='commodityNum'>
        <View className='commodityPrice' >
          ￥{props.price}
        </View>
        <View className='commoditySales' >
          {props.sales}+人付款
        </View>
      </View>
      <View className='commodityBtns'>
        <Button className='commodityBtnF'>
          购买
        </Button>
        <Button className='commodityBtnS' onClick={() =>{props.addToCart({commodityName: props.commodity_name, commoditySrc: props.commodity_src, commodityDescription: props.commodity_description, price: props.price})}}>
          加入购物车
        </Button>
      </View>
    </View>
  )
}

export default CommodityItemCmt
