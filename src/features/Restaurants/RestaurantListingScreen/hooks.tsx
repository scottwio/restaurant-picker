import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {RequestStatus} from '../../../models/requestStatus';
import {Restaurant} from '../../../models/restaurants';

const url =
  'https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.pending);

  const load = useCallback(async () => {
    try {
      setStatus(RequestStatus.pending);
      const {data: res} = await axios.get(url);
      setRestaurants(res.data.restaurant.items);
      setStatus(RequestStatus.resolved);
    } catch (error) {
      setStatus(RequestStatus.rejected);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {restaurants, status};
};
