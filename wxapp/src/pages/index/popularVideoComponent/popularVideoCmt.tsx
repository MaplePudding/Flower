import React from "react";
import {Image, Video, View} from "@tarojs/components";
import border from '../../../img/border.png'
import './popularVideoCmt.less'
import '../../../global/global.less'

interface popularVideoCmtProps{
  popular_video_src: string,
  popular_video_cover: string,
  popular_video_name: string,
  popular_video_description: string
}

const PopularVideoCmt : React.FunctionComponent<popularVideoCmtProps> = function(props){

  const urlBase:string = 'https://47.117.127.171/popularVideo/'

  return(
    <View className='popularVideoItem item'>
      <Image src={border} className='border popularVideoItemBorder' />
      <Video src={urlBase + props.popular_video_src} controls />
      <View className='popularVideoName'>
        {props.popular_video_name}
      </View>
      <View className='popularVideoDes'>
        {props.popular_video_description}
      </View>
    </View>
  )
}

export default PopularVideoCmt
