import React, {Component} from 'react'
import {Image, View} from '@tarojs/components'
import errorImg from '../../img/404.jpg'
import './dcsPage.less'

export default class dcsCpt extends Component{
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
      <View id='dcsPageCpt'>
        <Image src={errorImg} />
      </View>
    )
  }
}
