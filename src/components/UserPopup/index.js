import React, { useEffect } from 'react';
import {
  View, Text, TouchableHighlight, Image
} from 'react-native';
import CustomButton from './../CustomButton';
import styles from './styles';

const UserPopup = ({ user, hideModal }) => {
  const { id, first_name, last_name, email, avatar } = user;
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.topTriangle} />
        <View style={styles.modalTopView}>
          <View style={styles.aviView}>
            <Image source={{ uri: avatar }} style={styles.aviStyle} />
          </View>
          <View style={styles.cardItemView}>
            <Text style={[styles.labelStyle, { fontWeight: 'bold' }]}>First Name</Text>
            <Text style={[styles.labelStyle, { fontWeight: 'bold' }]}>Last Name</Text>
            <Text style={[styles.labelStyle, { fontWeight: 'bold' }]}>Email</Text>
          </View>
          <View style={[styles.cardItemView, { flex: 2 }]}>
            <Text style={styles.labelStyle}>{first_name}</Text>
            <Text style={styles.labelStyle}>{last_name}</Text>
            <Text style={styles.labelStyle}>{email}</Text>
          </View>
        </View>
        <View style={styles.modalBottomView}>
          <View style={styles.btnContainer}>
            <CustomButton onTouch={hideModal} buttonTitle={'Close'} />
          </View>
        </View>
        <View style={styles.bottomTriangle} />
      </View>
    </View>
  )
}

export default UserPopup;