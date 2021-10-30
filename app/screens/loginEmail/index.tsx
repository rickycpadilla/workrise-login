import React, { FC, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import type { NavigatorParamList } from '../../navigators'
import { LoginEmail } from './loginEmail'
import api from '../../services/api'
import { isEmailValid } from'../../utils/validation'

export const LoginEmailScreen: FC<NativeStackScreenProps<NavigatorParamList, "loginEmail">> = ({ navigation }) => {

  // State Variables
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)

  // Event Handlers
  const onPressContinue = async () => {
    setIsLoading(true)
    try {
      const userExists = await api.checkIfUserExists(email)
      navigation.navigate('loginPassword', {userExists, userEmail: email})
    } catch(error: any) {
      // TODO: Handle error
      console.log({error})
    }
    setIsLoading(false)
  }
  const onChangeEmail = (input: string) => {
    setEmail(input)
    setIsValidEmail(isEmailValid(input))
  }

  // Render UI
  return (
    <LoginEmail
      onPressContinue={onPressContinue}
      isLoading={isLoading}
      email={email}
      isValidEmail={isValidEmail}
      onChangeEmail={onChangeEmail}
    />
  )

}
