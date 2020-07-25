import React, {useCallback} from 'react';
import RestaurantsList from '../components/RestaurantsList';
import Container from '../../../components/Container';
import {useRestaurants} from './hooks';
import {Restaurant} from '../../../models/restaurants';
import {RestaurantScreens, RestaurantNavParamList} from '../navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {RequestStatus} from '../../../models/requestStatus';
import {ActivityIndicator} from 'react-native';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import {TestIDs} from '../../../testing-utils/testIDs';

type RestaurantListingScreenNavProps = StackNavigationProp<
  RestaurantNavParamList,
  RestaurantScreens.listing
>;

type RestaurantListingScreenProps = {
  navigation: RestaurantListingScreenNavProps;
};

export const RestaurantListingScreen = ({
  navigation,
}: RestaurantListingScreenProps) => {
  const {restaurants, status} = useRestaurants();

  const onRestaurantPress = useCallback(
    (restaurant: Restaurant) =>
      navigation.navigate(RestaurantScreens.item, {restaurant}),
    [navigation],
  );

  return (
    <Container>
      {status === RequestStatus.rejected && <ErrorMessage />}
      {status === RequestStatus.pending && (
        <ActivityIndicator testID={TestIDs.Global.Loading} size={'large'} />
      )}
      {status === RequestStatus.resolved && (
        <RestaurantsList
          data={restaurants}
          onRestaurantPress={onRestaurantPress}
        />
      )}
    </Container>
  );
};

export default RestaurantListingScreen;
