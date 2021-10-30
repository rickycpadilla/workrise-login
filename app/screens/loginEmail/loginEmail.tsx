import React from 'react'
import { View, Text, StyleSheet, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { Button } from '../../components'

type Props = {
  onPressContinue: () => void
  isLoading: boolean
  email: string
  isValidEmail: boolean
  onChangeEmail: (input: string) => void
}

export const LoginEmail = (props: Props) => {
  const { onPressContinue, isLoading, email, isValidEmail, onChangeEmail } = props
  return (
    <SafeAreaView style={{ flex: 1}}>
      <KeyboardAvoidingView behavior='height' style={{ flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>{"What's your email?"}</Text>
          <TextInput
            style={styles.emailInput}
            onChangeText={onChangeEmail}
            value={email}
            placeholder='name@email.com'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCompleteType='email'
            autoCorrect={false}
          />
          <View style={{ flex: 1}} />
          <Button
            disabled={!isValidEmail || isLoading}
            title="Continue"
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
  emailInput: {
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
