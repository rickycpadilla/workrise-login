import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { NavigatorParamList } from '../../navigators'
import { Splash } from './splash'

export const SplashScreen: FC<NativeStackScreenProps<NavigatorParamList, 'splash'>> = ({ navigation }) => {
  const onPressContinue = () => {
    navigation.navigate('loginEmail')
  }
  return (
    <Splash
      onPressContinue={onPressContinue}
    />
  )
}
