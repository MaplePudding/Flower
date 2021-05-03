import React from "react";
import {Image, View} from "@tarojs/components";
import border from '../../../img/border.png'
import './popularItemCmt.less'
import '../../../global/global.less'

interface popularVideoCmtProps{
  popular_item_src: string,
  popular_item_name: string,
  popular_item_description: string,
}

const PopularVideoCmt : React.FunctionComponent<popularVideoCmtProps> = function(props){

  const urlBase:string = 'https://localhost:8080/popularItem/'

  return(
    <View className='popularItem item'>
      <Image src={border} className='border popularItemBorder' />
      <Image src={urlBase + props.popular_item_src} className='popularItemImg' />
      <View className='popularItemName'>
        {props.popular_item_name}
      </View>
      <View className='popularItemDes'>
        {props.popular_item_description}
      </View>
    </View>
  )
}

export default PopularVideoCmt
