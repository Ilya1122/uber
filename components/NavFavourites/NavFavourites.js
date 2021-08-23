import React from 'react'
import { FlatList, TouchableOpacity, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { navFavouriteData } from '../../constants'
import { styles } from './style'

const NavFavourites = () => {
   return (
       <FlatList
           data={navFavouriteData}
           keyExtractor={({ id }) => id}
           ItemSeparatorComponent={() => <View style={styles?.itemBorder} />}
           renderItem={({ item: {location, destination, icon} }) => (
               <TouchableOpacity style={styles?.itemBox}>
                   <Icon
                       type='ionicon'
                       color='white'
                       size='10'
                       name={icon}
                       style={styles?.itemIcon}
                   />
                   <View>
                       <Text style={styles?.itemText}>{location}</Text>
                       <Text style={styles?.itemTextDesc}>{destination}</Text>
                   </View>
               </TouchableOpacity>
           )}
       />
   )
};

export default NavFavourites;
