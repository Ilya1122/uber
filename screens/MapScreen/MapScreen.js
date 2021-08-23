import React from 'react'
import { TouchableOpacity, View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {useNavigation} from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import Map from '../../components/Map/Map'
import NavigateCard from '../../components/NavigateCard'
import RideOptionsCard from '../../components/RideOptionsCard'
import { styles } from './style'

const MapScreen = () => {
    const Stack = createStackNavigator()
    const navigation = useNavigation()

    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={styles?.homeIcon}
            >
                <Icon name='menu' />
            </TouchableOpacity>
            <View style={styles?.boxMap}>
                <Map />
            </View>
            <View style={styles?.boxMapNavigator}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigateCard}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='RideOptionsCard'
                        component={RideOptionsCard}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    );
};

export default MapScreen;
