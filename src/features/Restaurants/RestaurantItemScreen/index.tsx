import React from 'react';
import WebView from '../../../components/WebView';
import {RouteProp} from '@react-navigation/native';
import {RestaurantNavParamList, RestaurantScreens} from '../navigation';

type RestaurantItemScreenRouteProp = RouteProp<
  RestaurantNavParamList,
  RestaurantScreens.item
>;

type RestaurantItemScreenProps = {
  route: RestaurantItemScreenRouteProp;
};

const RestaurantItemScreen = ({route}: RestaurantItemScreenProps) => {
  const {restaurant} = route.params;

  return <WebView uri={restaurant.url} />;
};

export default RestaurantItemScreen;
