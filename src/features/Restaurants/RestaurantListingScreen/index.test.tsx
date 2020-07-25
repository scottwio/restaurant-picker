import React from 'react';
import {render, waitFor, fireEvent} from 'react-native-testing-library';
import RestaurantListingScreen from '.';
import {mockNavigationProps} from '../../../testing-utils/router';
import axios from 'axios';
import {TestIDs} from '../../../testing-utils/testIDs';
import {RestaurantScreens} from '../navigation';
import {Restaurant, restaurantExample} from '../../../models/restaurants';

jest.mock('axios');

const mockedAxios: jest.Mocked<typeof axios> = axios as any;
let mockData: any;
let props: any;
let restaurant: Pick<Restaurant, 'name' | 'url'>;

describe('Restaurant Listing', () => {
  beforeEach(() => {
    props = {...mockNavigationProps};
    restaurant = {...restaurantExample};
    mockData = {
      data: {data: {restaurant: {items: [restaurant]}}},
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should display a list of restaurants', async () => {
    const name = restaurant.name;
    mockedAxios.get.mockResolvedValueOnce(mockData);
    const {getByText} = render(<RestaurantListingScreen {...props} />);
    await waitFor(() => getByText(name));
  });

  it('Should navigate to item page on click and past restaurant clicked in params', async () => {
    mockedAxios.get.mockResolvedValueOnce(mockData);
    const {getByTestId} = render(<RestaurantListingScreen {...props} />);
    const item = await waitFor(() => getByTestId('view website'));
    await fireEvent(item, 'onPress');
    expect(
      props.navigation.navigate,
    ).toHaveBeenCalledWith(RestaurantScreens.item, {restaurant});
  });

  it('Should show error if calls fails', async () => {
    mockedAxios.get.mockRejectedValueOnce({});
    const {findByTestId} = render(
      <RestaurantListingScreen {...mockNavigationProps} />,
    );
    await waitFor(() => findByTestId(TestIDs.Global.Error));
  });
});
