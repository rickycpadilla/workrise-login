import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
  title: string
  onPress: () => void
  disabled?: boolean
}

export const Button = (props: Props) => {
  const { title, disabled, onPress } = props
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: disabled ? 0.5 : 1 }]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: '#1B3C2D',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 4,
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
  },
})
