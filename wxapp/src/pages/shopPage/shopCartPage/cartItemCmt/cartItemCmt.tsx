import React from 'react'
import {Image, View} from "@tarojs/components";
import './cartItemCmt.less'

interface cartProps{
  commodityName:string
  commoditySrc:string
  commodityDescription:string
  price:number
}

const CartItemCmt:React.FunctionComponent<cartProps> = function (props){

  const baseUrl = 'https://localhost:8080/shopItem/'
  return(
    <View className='cartItem'>
      <Image src={baseUrl + props.commoditySrc} />
      <View className='cartItemContent'>
        <View className='cartItemName'>
          {props.commodityName}
        </View>
        <View className='cartItemDescription'>
          {props.commodityDescription}
        </View>
        <View className='cartItemPrice'>
          {props.price}
        </View>
      </View>
    </View>
  )
}

export default CartItemCmt
