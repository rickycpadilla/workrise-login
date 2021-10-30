import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView } from 'react-native'
import { Button } from '../../components'

type Props = {
  onPressContinue: () => void
}

export const Splash = (props: Props) => {
  return (
    <ImageBackground
      style={styles.bgImage}
      source={require('../../assets/images/hand.jpg')}
    >
      <View style={styles.darkOverlay}/>
      
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')} 
            resizeMode='contain'
          />
          <View style={{flex: 1}} />
          <Text style={styles.text}>{"Let's Get to Work"}</Text>
          <Button
            title='Get Started'
            onPress={props.onPressContinue}
          />
          <Text style={styles.termsText}>{'By continuing you agree to the Workrise Terms & Conditions'}</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 22,
  },
  darkOverlay: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: '60%',
  },
  text: {
    fontWeight: '800',
    color: 'white',
    fontStyle: 'italic',
    fontSize: 32,
    marginBottom: 28,
  },
  termsText: {
    fontSize: 12,
    color: 'white',
    marginTop: 12,
  }
})
