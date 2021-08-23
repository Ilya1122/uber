import React from 'react'
import { GOOGLE_MAPS_APIKEY } from '@env'
import {useDispatch} from 'react-redux'
import { View, SafeAreaView, Image} from 'react-native'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import NavOptions from '../../components/NavOptions'
import NavFavourites from '../../components/NavFavourites/NavFavourites'
import { setDestination, setOrigin } from '../../slices/navSlice'
import { styles } from './style'

const HomeScreen = () => {
    const dispatch = useDispatch()
  const setGoAdress = (data, details) => {
    dispatch(setOrigin({
      location: details?.geometry?.location,
      description: data?.description,
    }))
    dispatch(setDestination(null))
  }
    return (
        <SafeAreaView style={styles?.container}>
           <View style={styles?.wrapperHome}>
               <Image style={styles?.logo} source={{ uri: 'https://links.papareact.com/gzs' }}/>
               <GooglePlacesAutocomplete
                   styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
                   onPress={(data, details= null) => setGoAdress(data, details)}
                   minLength={3}
                   fetchDetails={true}
                   returnKeyType={"search"}
                   enablePoweredByContainer={false}
                   query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }}
                   placeholder='Where From?'
                   debounce={400}
                   nearbyPlacesAPI='GooglePlacesSearch'
               />
               <NavOptions />
               <NavFavourites />
           </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
