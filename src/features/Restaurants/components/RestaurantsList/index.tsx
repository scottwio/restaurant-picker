import React from 'react';
import {FlatList} from 'react-native';
import {Restaurant} from '../../../../models/restaurants';
import RestaurantItem from '../RestaurantItem';
import styles from './styles';

type RestaurantsListProps = {
  data: Restaurant[];
  onRestaurantPress: (restaurant: Restaurant) => void;
};

const RestaurantsList = ({data, onRestaurantPress}: RestaurantsListProps) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <RestaurantItem item={item} onPress={onRestaurantPress} />
      )}
      contentContainerStyle={styles.content}
      keyExtractor={(i) => i.name}
    />
  );
};

export default RestaurantsList;
