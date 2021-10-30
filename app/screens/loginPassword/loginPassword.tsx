import React from 'react'
import { View, Text, StyleSheet, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { Button } from '../../components'

type Props = {
  onPressContinue: () => void
  isLoading: boolean
  password: string
  isValidPassword: boolean
  onChangePassword: (input: string) => void
  userExists: boolean
}

export const LoginPassword = (props: Props) => {
  const {
    onPressContinue,
    isLoading,
    password,
    isValidPassword,
    onChangePassword,
    userExists,
  } = props
  const question = userExists ? "What's your password?" : 'Create password'
  const buttonTitle = userExists ? 'Login' : 'Sign Up'
  return (
    <SafeAreaView style={{ flex: 1}}>
      <KeyboardAvoidingView behavior='height' style={{ flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>{question}</Text>
          <TextInput
            style={styles.passwordInput}
            onChangeText={onChangePassword}
            value={password}
            placeholder='your password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
          />
          <View style={{flex: 1}} />
          <Button
            disabled={!isValidPassword || isLoading}
            title={buttonTitle}
            onPress={onPressContinue}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 22
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'stretch',
    marginVertical: 12,
  },
  passwordInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    alignSelf: 'stretch',
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: 'white'
  },
})
