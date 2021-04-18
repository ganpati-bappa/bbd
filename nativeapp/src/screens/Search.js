import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BloodType from '../components/BloodType';
import PlacesAutoCom from '../components/PlacesAutoCom';
import BloodCard from '../components/BankCard';
import CampCard from '../components/CampCard';

import { getBank } from '../redux/actions/search';
import { getCamp } from '../redux/actions/search';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function Search({ navigation, route }) {
  const { what } = route.params;
  const [type, setType] = useState('All');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [noSearch, setNoSearch] = useState(true);

  const dispatch = useDispatch();

  const loading = useSelector(state => state.search.loading);
  const banks = useSelector(state => state.search.banks);
  const camps = useSelector(state => state.search.camps);
  const error = useSelector(state => state.search.error);

  const searchBank = () => {
    setNoSearch(false);
    dispatch(getBank({ lat, lng }));
  };
  const searchCamp = () => {
    setNoSearch(false);
    dispatch(getCamp({ lat, lng }));
  };

  return (
    <View style={styles.search_Screen}>
      <View style={styles.search_Header}>
        <View style={styles.searchBox}>
          <View style={styles.search_loc_Box}>
            <PlacesAutoCom
              lat={lat}
              lng={lng}
              setLat={setLat}
              setLng={setLng}
              searchData={what ? searchBank : searchCamp}
            />
          </View>
          <View style={styles.search_type_Box}>
            {!what ? <BloodType setType={setType} type={type} /> : null}
          </View>
        </View>
      </View>

      {loading ? (
        <View style={styles.data_view}>
          <Text>Loading......</Text>
        </View>
      ) : null}

      {banks.length > 0 ? (
        <View style={styles.data_view}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {banks.map(bank => (
              <BloodCard bank={bank} />
            ))}
          </ScrollView>
        </View>
      ) : null}

      {camps.length > 0 ? (
        <View style={styles.data_view}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {camps.map(camp => (
              <CampCard camp={camp} />
            ))}
          </ScrollView>
        </View>
      ) : null}

      {error.length > 0 ? (
        <View style={styles.data_view}>
          <Text>Error</Text>
        </View>
      ) : null}

      {noSearch ? (
        <View style={styles.center_search_img}>
          <Image
            style={styles.search_img}
            source={require('../assets/images/searchimg.png')}
          ></Image>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  search_Screen: {
    flex: 1,
    width: Width,
    height: Height,
    backgroundColor: '#fff',
  },
  search_Header: {
    position: 'absolute',
    top: 30,
    width: 0.9 * Width,
    marginHorizontal: 20,
  },
  back_icon_box: {
    alignSelf: 'center',
    width: 30,
    height: 30,
  },
  searchBox: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f7475b',
  },
  search_loc_Box: {
    alignSelf: 'center',
    width: '75%',
    paddingHorizontal: 10,
  },
  search_type_Box: {
    width: '25%',
    height: 50,
  },

  data_view: {
    zIndex: -5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },

  center_search_img: {
    zIndex: -1,
    width: 0.6 * Width,
    height: 200,
    marginTop: 0.4 * Height,
    alignSelf: 'center',
  },
  search_img: {
    width: '100%',
    height: '100%',
  },
});
