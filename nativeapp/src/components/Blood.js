import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Blood({ bloodgroup }) {
  return (
    <View style={styles.blood_box}>
      <Text style={styles.blood_type}>
        {bloodgroup ? Object.values(bloodgroup)[1] : null}{' '}
        <Text style={styles.blood_unit}>
          {bloodgroup ? Object.values(bloodgroup)[2] : null}Unit
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blood_box: {
    width: 50,
    height: 50,
    flexDirection: 'row',
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#f7475b',
  },
  blood_type: {
    textAlign: 'center',
    fontFamily: 'Bold',
    fontSize: 13,
    color: '#fff',
  },
  blood_unit: {
    textAlign: 'center',
    fontFamily: 'Medium',
    fontSize: 13,
    color: '#fff',
  },
});
