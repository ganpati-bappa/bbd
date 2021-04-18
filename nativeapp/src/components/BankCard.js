import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';

import Blood from './Blood';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function BankCard({ bank }) {
  return (
    <TouchableNativeFeedback key={bank._id}>
      <View style={styles.event_card}>
        <View style={styles.card_detail}>
          <View style={styles.card_info}>
            <View style={styles.info_text_row}>
              <Text style={styles.info_name_text}>{bank.bloodbank_name}</Text>
            </View>
            <View style={styles.info_text_row}>
              <Text style={styles.info_loc_text}>
                {bank.location ? Object.values(bank.location)[1] : null}
              </Text>
            </View>
            <View style={styles.info_text_row}>
              <Text style={styles.info_disc_text}>{bank.disc}</Text>
            </View>
          </View>
          <Image
            style={styles.card_img}
            source={require('../assets/images/findDonor.jpg')}
          />
        </View>

        <ScrollView
          style={styles.blood_view}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {bank.blood.map(bloodgroup => (
            <Blood bloodgroup={bloodgroup} />
          ))}
        </ScrollView>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  event_card: {
    width: 0.9 * Width,
    height: 0.3 * Height,
    flexDirection: 'column',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 2,
    overflow: 'hidden',
    marginVertical: 20,
  },
  card_detail: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
    margin: 10,
  },
  card_img: {
    width: 0.3 * Width,
    height: '100%',
  },
  blood_view: {
    width: '100%',
    height: '40%',
  },
  card_info: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  info_name_text: {
    width: 0.4 * Width,
    fontFamily: 'Bold',
    textAlign: 'justify',
    fontSize: 15,
    color: '#4f4a4a',
  },
  info_loc_text: {
    fontFamily: 'Medium',
    width: 0.4 * Width,
    textAlign: 'justify',
    fontSize: 13,
    color: '#4f4a4a',
  },
  info_disc_text: {
    width: 0.4 * Width,
    textAlign: 'justify',
    fontSize: 12,
    color: '#4f4a4a',
  },
});
