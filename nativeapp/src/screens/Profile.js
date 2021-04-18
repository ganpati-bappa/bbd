import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { logout } from '../redux/actions/auth';

export default function Profile({ navigation }) {
  const error = useSelector(state => state.auth.error);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  console.log(user);
  const LogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <Image
        source={require('../assets/images/login.png')}
        style={styles.center_img}
      />
      <Text style={styles.center_text}>
        Welcome{'!'} <Text style={styles.center_text}>{user.name}</Text>
      </Text>
      <Text style={styles.center_text}>
        BloodGroup{':'}{' '}
        <Text style={styles.center_text}>{user.bloodGroup}</Text>
      </Text>
      <Text style={styles.center_text}>
        Age{':'} <Text style={styles.center_text}>{user.age}</Text>
      </Text>

      <Text style={styles.center_text}>
        Role{':'} <Text style={styles.center_text}>{user.role}</Text>
      </Text>

      <View style={styles.number_input_box}></View>

      {error && <Text style={styles.error_text}>{error.message}</Text>}

      <TouchableOpacity onPress={() => LogOut()} style={styles.send_otp_btn}>
        <Text style={styles.send_otp_btn_text}>LogOut</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center_img: {
    marginVertical: 30,
    width: 200,
    alignSelf: 'center',
    height: '25%',
  },
  center_text: {
    fontSize: 18,
    fontFamily: 'Bold',
    alignSelf: 'center',
    marginHorizontal: 30,
  },
  error_text: {
    fontSize: 10,
    fontFamily: 'Bold',
    alignSelf: 'center',
    marginHorizontal: 40,
  },
  number_input_box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 55,
    borderWidth: 1,
    marginTop: 50,
    paddingHorizontal: 10,
    borderColor: '#f7475b',
    borderRadius: 10,
    paddingVertical: 2,
  },
  number_input: {
    paddingHorizontal: 10,
    width: '100%',
    height: 40,
  },
  send_otp_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7475b',
    marginHorizontal: 55,
    marginVertical: 20,
    borderRadius: 23,
    height: 50,
  },
  send_otp_btn_text: {
    color: '#fff',
    fontSize: 15,
  },
  new_user_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 55,
    marginVertical: 20,
    borderRadius: 23,
    height: 50,
  },
  new_user_btn_text: {
    color: '#f7475b',
    fontSize: 15,
  },
});
