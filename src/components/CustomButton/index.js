import React from 'react';
import {
  View, Text, TouchableHighlight
} from 'react-native';
import styles from './styles';

const CustomButton = ({onTouch, buttonTitle}) => {
  return (
    <TouchableHighlight
      style={styles.closeBtnContainer}
      onPress={() => {
        onTouch();
      }}
    >
      <View style={styles.closeBtnStyle}>
        <View style={styles.triangle} />
        <Text style={styles.btnText}>{buttonTitle}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default CustomButton;