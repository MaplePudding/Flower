import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, Input, OpenData, View} from '@tarojs/components'
import './sideBar.less'

interface SideBarProps{
  sideBarStatus: string
}

const SideBar:React.FunctionComponent<SideBarProps> = function(props){

  console.log(props)
  return(
    <View id='sideBar' className={props.sideBarStatus?'sideBarExtend sideBar':'sideBarShrink sideBar'}>
      <View id='sideBarHeader'>
        <View id='sideBarAvatar'>
          <OpenData type='userAvatarUrl' />
        </View>
        <View id='sideBarInfo'>
          <View id='sideBarNickName'>
            <OpenData type='userNickName' />
          </View>
          <View id='sideBarID'>
            ID
          </View>
        </View>
      </View>
      <View id='sideBarList'>
        <View>
          我的收藏
        </View>
        <View>
          离线缓存
        </View>
        <View>
          我的足迹
        </View>
        <View>
          设置
        </View>
      </View>
    </View>
  )
}

export default SideBar
