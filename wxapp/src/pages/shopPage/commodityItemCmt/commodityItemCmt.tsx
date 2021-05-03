import React from 'react'
import {View} from "@tarojs/components";

interface commodityItemProps{
  commodity_name: string
  commodity_src: string
  commodity_description: string
  commodity_num: number
  type: string
  price: number
  sales: number
}

const CommodityItemCmt:React.FunctionComponent<commodityItemProps> = function(props){
  return(
    <View className='commodityItem item'>
      
    </View>
  )
}
