import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  LoginEmailScreen,
  LoginPasswordScreen,
  SplashScreen,
} from '../screens'

const Stack = createNativeStackNavigator()

export type NavigatorParamList = {
  splash: undefined
  loginEmail: undefined
  loginPassword: { userExists: boolean, userEmail: string }
}

const defaultScreenOptions = {
  title: '',
  headerTintColor: '#1B3C2D',
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='splash'
          component={SplashScreen}
          options={{ headerShown: false, ...defaultScreenOptions }}
        />
        <Stack.Screen
          name='loginEmail'
          component={LoginEmailScreen}
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name='loginPassword'
          component={LoginPasswordScreen}
          options={defaultScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
