import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RestaurantNavigation from './features/Restaurants/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <RestaurantNavigation />
    </NavigationContainer>
  );
};

export default App;
