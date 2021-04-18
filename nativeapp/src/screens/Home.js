import React, { useEffect } from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const registerForPushNotifications = async () => {
    try {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (finalStatus !== 'granted') return;

      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
    } catch (error) {
      console.log('Error getting a token', error);
    }
  };
  // const locationPermission = async () => {
  //   if (Location.hasServicesEnabledAsync()) {
  //     console.log('enabled');
  //   } else {
  //     console.log('not enabled');
  //   }

  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     console.log('Permission to access location was denied');
  //     return;
  //   } else {
  //     console.log('Permission granted');
  //   }
  // };

  useEffect(() => {
    registerForPushNotifications();
    Notifications.addListener(notification => console.log(notification));
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.home_page}>
      <View style={styles.top_area}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Profile')}
          style={styles.profile_box}
        >
          {1 ? (
            <View style={styles.profile_img_back}>
              <Image
                style={styles.profile_img}
                source={require('../assets/images/sofa.png')}
              ></Image>
            </View>
          ) : (
            <Feather name='users' size={30} color='red' />
          )}
        </TouchableHighlight>
        <View style={styles.text_box}>
          <Text style={styles.home_text}>You can save</Text>
          <Text style={styles.home_text}> someone life</Text>
        </View>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('Search', { what: true })}
          style={styles.search_box_btn}
        >
          <EvilIcons name='search' size={35} color='black' />
          <Text style={styles.search_btn_text}>Search Blood Bank...</Text>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.services_view}>
        <View style={styles.box_row}>
          <View style={styles.service_box}>
            <View style={styles.service_box_back}>
              <TouchableHighlight
                onPress={() => navigation.navigate('Search', { what: true })}
                style={styles.first_box}
              >
                <Text style={styles.service_box_text}>
                  Find A Emergency Donor
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.service_box}>
            <View style={styles.service_box_back}>
              <TouchableHighlight
                onPress={() => navigation.navigate('Search', { what: false })}
                style={styles.second_box}
              >
                <Text style={styles.service_box_text}>Find nearby Camps</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={styles.box_row}>
          <View style={styles.service_box}>
            <View style={styles.service_box_back}>
              <TouchableHighlight style={styles.third_box}>
                <Text style={styles.service_box_text}>
                  Become A Emergency Donor
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.service_box}>
            <View style={styles.service_box_back}>
              <TouchableHighlight style={styles.fourth_box}>
                <Text style={styles.service_box_text}>
                  Register As Blood Bank
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.event_view}>
        <View style={styles.event_view_heading}>
          <Text style={styles.main_heading}>Nearby Camps</Text>
          <TouchableOpacity>
            <Text style={styles.sub_heading}>more</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
        ></ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home_page: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 1,
  },
  top_area: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  profile_box: {
    alignSelf: 'flex-end',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile_img: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  profile_img_back: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    padding: 0.1,
    borderWidth: 1.5,
    borderColor: '#ff1f5a',
  },

  home_text: {
    fontSize: 30,
    fontFamily: 'Bold',
    color: '#4f4a4a',
  },
  search_box_btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  search_btn_text: {
    fontSize: 15,
    color: '#4f4a4a',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  services_view: {
    marginVertical: 20,
  },
  box_row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  service_box: {
    width: '50%',
    padding: 20,
  },
  service_box_text: {
    fontSize: 15,
    fontFamily: 'Bold',
    color: '#4f4a4a',
    textAlign: 'center',
  },
  first_box: {
    width: '100%',
    height: 150,
    backgroundColor: '#f7475b',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 30,
  },
  second_box: {
    width: '100%',
    height: 150,
    backgroundColor: '#fccde2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 30,
  },
  third_box: {
    width: '100%',
    height: 150,
    backgroundColor: '#fffeb8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 30,
  },
  fourth_box: {
    width: '100%',
    height: 150,
    backgroundColor: '#c5e3f6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 30,
  },
  service_box_back: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#ff1f5a',
  },
  event_view: {},
  event_view_heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main_heading: {
    fontFamily: 'Bold',
    fontSize: 15,
    color: '#4f4a4a',
  },
  sub_heading: {
    fontSize: 15,
    color: '#ff1f5a',
  },
});
