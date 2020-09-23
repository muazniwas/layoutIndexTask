import React, { Component } from 'react';
import {
  View, Text, ScrollView, Alert, Modal, TextInput, SafeAreaView, FlatList, Dimensions
} from 'react-native';
import CustomButton from './../CustomButton';
import UserItem from './../UserItem';
import UserPopup from './../UserPopup';
import styles from './styles';
import { fetchAllUsers, fetchSingleUser } from '../../api/fetchUsers';
import AsyncStorage from '@react-native-community/async-storage';

export default class UserInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      modalVisible: false,
      userItem: {},
      userId: -1,
      currentPage: 1,
      totalPages: 0,
    }
    this.hideModal = this.hideModal.bind(this);
    this.showUser = this.showUser.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    const { currentPage } = this.state;
    this.getData().then(users => {
      if (users) {
        this.setState({ users });
      }
    });
    fetchAllUsers(currentPage)
      .then(res => {
        this.setState({
          users: res.data,
          totalPages: res.total_pages
        });
        this.storeData(res.data).then();
      })
      .catch(err => {
        Alert.alert(
          "Error",
          '',
          [
            { text: "OK" }
          ],
        );
      });
  }

  storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('users', jsonValue);
    } catch (e) {

    }
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('users');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {

    }
  }

  fetchMoreData(info) {
    const { currentPage, totalPages, users } = this.state;
    const newPage = currentPage + 1;
    console.log(newPage);
    if (newPage <= totalPages) {
      fetchAllUsers(newPage)
        .then(res => {
          const newUsers = [...users, ...res.data];
          this.setState({
            users: newUsers,
            currentPage: newPage,
          });
          this.storeData(newUsers).then();
        })
    }
  }

  showUser(item) {
    this.setState({
      modalVisible: true,
      userItem: item
    })
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }

  getUser() {
    const { userId, users } = this.state;
    fetchSingleUser(userId)
      .then(res => {
        if (res.data) {
          this.showUser(res.data);
        }
        else if (users.length > 0) {
          const userItem = users.find((i) => i.id === parseInt(userId));
          if (userItem) {
            this.showUser(userItem);
          } else {
            Alert.alert(
              "No user found",
              '',
              [
                { text: "OK" }
              ],
            );
          }
        }
        else {
          Alert.alert(
            "No user found",
            '',
            [
              { text: "OK" }
            ],
          );
        }
      })
      .catch(err => {
        const userItem = users.find((i) => i.id === userItem);
        if (userItem) {
          this.showUser(userItem);
        } else {
          Alert.alert(
            "Error",
            '',
            [
              { text: "OK" }
            ],
          );
        }
      });
  }

  render() {
    const { users, modalVisible, userItem } = this.state;
    return (
      <SafeAreaView style={styles.scrollview}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder={'User ID'}
            onChangeText={id => this.setState({ userId: id })}
          />
          <View style={styles.btnContainer}>
            <CustomButton onTouch={this.getUser} buttonTitle={'Search'} />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            ListHeaderComponent={
              <Text style={styles.titleStyle}>AVAILABLE USERS</Text>
            }
            data={users}
            renderItem={({ item }) => <UserItem item={item} showUser={this.showUser} />}
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.01}
            onEndReached={info => this.fetchMoreData(info)}
          />
        </View>
        {
          (modalVisible) && (
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
            >
              <UserPopup hideModal={this.hideModal} user={userItem} />
            </Modal>
          )
        }
      </SafeAreaView>
    )
  }

}
