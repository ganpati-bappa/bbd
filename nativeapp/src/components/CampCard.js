import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { regDonor } from '../redux/actions/register';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function CampCard({ camp }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.register.loading);
  const error = useSelector(state => state.register.error);

  const RegDonor = () => {
    const id= camp._id
    dispatch(regDonor({id}));
  };

  return (
    <TouchableNativeFeedback key={camp._id}>
      <View style={styles.event_card}>
        <Image
          style={styles.card_img}
          source={require('../assets/images/blood-drive.jpg')}
        ></Image>
        <View style={styles.card_info}>
          <View style={styles.info_text_row}>
            <EvilIcons name='location' size={20} color='red' />
            <Text style={styles.info_main_text}>
              {camp.camp_name ? camp.camp_name : null}
            </Text>
          </View>
          <View style={styles.info_text_row}>
            <Fontisto name='date' size={15} color='red' />
            <Text style={styles.info_main_text}>
              {camp.startDate ? camp.startDate : null}
            </Text>
          </View>
          <View style={styles.info_text_row}>
            <MaterialIcons name='access-time' size={20} color='red' />
            <Text style={styles.info_main_text}>
              {camp.startTime ? camp.startTime : null}{' '}
            </Text>
          </View>
          <View style={styles.info_text_row}>
            <Entypo name='time-slot' size={20} color='red' />
            <Text style={styles.info_main_text}>8 Hour </Text>
          </View>
          <View style={styles.info_text_row}>
            <Text style={styles.info_main_text}>
              {camp.participant.length} Register
            </Text>
          </View>
          <TouchableOpacity onPress={RegDonor} style={styles.reg_btn}>
            {loading ? (
              <Text style={styles.btn_txt}>Processing</Text>
            ) : (
              <Text style={styles.btn_txt}>Register</Text>
            )}
          </TouchableOpacity>
          {error ? <Text style={styles.btn_txt}>errorAccure</Text> : null}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  event_card: {
    width: 0.9 * Width,
    height: 0.3 * Height,
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 2,
    overflow: 'hidden',
    marginVertical: 20,
  },
  card_img: {
    width: '35%',
    height: '100%',
  },
  card_info: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  info_text_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info_title_text: {
    fontFamily: 'Bold',
    fontSize: 10,
    color: '#4f4a4a',
  },
  info_main_text: {
    marginLeft: 5,
    textAlign: 'center',
    fontSize: 12,
    color: '#4f4a4a',
  },
  reg_btn: {
    width: 0.3 * Width,
    height: 40,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  btn_txt: {
    marginHorizontal: 15,
    textAlign: 'center',
    color: '#f7475b',
  },
});
