import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RestaurantListingScreen} from './RestaurantListingScreen';
import RestaurantItemScreen from './RestaurantItemScreen';
import {Restaurant} from '../../models/restaurants';

export type RestaurantNavParamList = {
  RestaurantListing: undefined;
  RestaurantItem: {
    restaurant: Restaurant;
  };
};

const Stack = createStackNavigator<RestaurantNavParamList>();

export enum RestaurantScreens {
  listing = 'RestaurantListing',
  item = 'RestaurantItem',
}

const RestaurantNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={RestaurantScreens.listing}>
      <Stack.Screen
        options={{title: 'Restaurants'}}
        name={RestaurantScreens.listing}
        component={RestaurantListingScreen}
      />

      <Stack.Screen
        options={({route}) => ({title: route.params.restaurant.name})}
        name={RestaurantScreens.item}
        component={RestaurantItemScreen}
      />
    </Stack.Navigator>
  );
};

export default RestaurantNavigation;
