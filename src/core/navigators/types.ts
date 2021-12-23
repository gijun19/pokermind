import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React from 'react'

export type Tab = 'Profile' | 'Feed' | 'Chat'
export type Screen = 'Auth'
export type Modal = 'Example'

export type ScreenLayout = {
  [key in Screen]: ScreenInfo
}

export type TabScreenLayout = {
  [key in Tab]: TabScreenInfo
}

export type BaseScreenInfo = {
  name: string
  component: React.ComponentType<any>
}

export type ScreenInfo = BaseScreenInfo & {
  options: () => NativeStackNavigationOptions
}

export type TabScreenInfo = BaseScreenInfo & {
  options: () => BottomTabNavigationOptions
}

export type ModalScreenInfo = ScreenInfo

export type ModalScreenLayouts = {
  [key in Modal]: ScreenInfo
}
