import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {Image, Input, View} from '@tarojs/components'
import './sideBar.less'

interface SideBarProps{
  sideBarStatus: string
}

const SideBar:React.FunctionComponent<SideBarProps> = function(props){

  console.log(props)
  return(
    <View id='sideBar' className={props.sideBarStatus?'sideBarExtend sideBar':'sideBarShrink sideBar'}>

    </View>
  )
}

export default SideBar
