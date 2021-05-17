import React from 'react'
import {Image, Video, View} from "@tarojs/components";
import border from '../../../img/border.png'
import './videoItemCmt.less'


interface videoItemCmtProps{
  video_name: string,
  video_src: string,
  video_cover_src: string,
  video_description: string,
  video_type: string
}

const VideoItemCmt : React.FunctionComponent<videoItemCmtProps> = function(props){

  const baseUrl : string = 'https://www.maplesyrup.top/video/'

  return(
    <View className='item videoItemCmt'>
      <Image src={border} className='border' />
      <Video src={baseUrl + props.video_src} controls />
      <View className='videoName'>
        {props.video_name}
      </View>
      <View className='videoDescription'>
        {props.video_description}
      </View>
    </View>
  )
}

export default VideoItemCmt
