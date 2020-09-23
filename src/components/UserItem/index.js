import React, { useEffect } from 'react';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import styles from './styles';

const UserView = ({ item, showUser }) => {
  const { id, first_name } = item;
  return (
    <TouchableOpacity style={styles.cardView} onPress={() => showUser(item)} >
      <View style={styles.cardItemView}>
        <Text style={[styles.labelStyle, { fontWeight: 'bold' }]}>ID</Text>
        <Text style={[styles.labelStyle, { fontWeight: 'bold' }]}>Name</Text>
      </View>
      <View style={[styles.cardItemView, { flex: 5 }]}>
        <Text style={styles.labelStyle}>{id}</Text>
        <Text style={styles.labelStyle}>{first_name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default UserView;