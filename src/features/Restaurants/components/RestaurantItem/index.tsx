import React, {useRef} from 'react';
import {View, Image} from 'react-native';
import Text from '../../../../components/Text';
import {Restaurant} from '../../../../models/restaurants';
import styles from './styles';
import {randomBetween} from '../../../../utils/randomBetween';
import Images from '../../../../assets/images';
import Button from '../../../../components/Button/Button';

type RestaurantItemProps = {
  item: Restaurant;
  onPress: (restaurant: Restaurant) => void;
};

const RestaurantItem = ({item, onPress}: RestaurantItemProps) => {
  const {address} = item.geo;
  const {current: image} = useRef(Images[`restaurant${randomBetween(7)}`]);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.text}>
        <Text.Heading>{item.name}</Text.Heading>
        <Text.Body>{address.streetAddress}</Text.Body>
        <Text.Body>{address.addressLocality}</Text.Body>
        <Text.Body>{address.postalCode}</Text.Body>
        <Button
          title={'VIEW WEBSITE'}
          testID={'view website'}
          style={styles.btn}
          onPress={() => onPress(item)}
        />
      </View>
    </View>
  );
};

export default React.memo(RestaurantItem);
