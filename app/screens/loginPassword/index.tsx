import React, { FC, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import type { NavigatorParamList } from '../../navigators'
import { LoginPassword } from './loginPassword'
import api from '../../services/api'
import { isPasswordValid } from'../../utils/validation'

export const LoginPasswordScreen: FC<NativeStackScreenProps<NavigatorParamList, "loginPassword">> = ({ route, navigation }) => {

  // State Variables
  const [password, setpassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)

  // Event Handlers
  const onPressContinue = async () => {
    setIsLoading(true)
    try {
      const { userEmail, userExists } = route.params
      const authorize = userExists ? api.userLogin : api.userSignup
      const userId = await authorize(userEmail, password)
      // TODO: Save user ID to local storage and take user to main app experience.
    } catch(error: any) {
      // TODO: Handle error
      console.log(error.message)
    }
    setIsLoading(false)
  }
  const onChangePassword = (input: string) => {
    setpassword(input)
    setIsValidPassword(isPasswordValid(input))
  }

  // Render UI
  return (
    <LoginPassword
      onPressContinue={onPressContinue}
      isLoading={isLoading}
      password={password}
      isValidPassword={isValidPassword}
      onChangePassword={onChangePassword}
      userExists={route.params.userExists}
    />
  )

}
