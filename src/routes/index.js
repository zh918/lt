// 配置路由信息
import { Navigation } from 'react-native-navigation'

import LoginScreen from '../views/Login/Login'


export function registerScreens(store, Provider) {
  Navigation.registerComponent('lt.LoginScrren', () => LoginScrren, store, Provider)
}
