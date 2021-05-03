import React, {Component} from 'react'
import {Image, View} from '@tarojs/components'
import errorImg from '../../../img/404.jpg'
import './favoritePage.less'

export default class shopCpt extends Component{
  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render(){
    return(
      <View id='favoritePage'>
        <Image src={errorImg} />
      </View>
    )
  }
}
