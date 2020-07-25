export interface Restaurant {
  name: string;
  url: string;
  geo: Geo;
}

export type Address = {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
};

export type Geo = {
  address: Address;
};

export const restaurantExample: Restaurant = {
  name: 'Example Name',
  url: 'https://www.example.co.uk/',
  geo: {
    address: {
      streetAddress: 'Example street',
      addressLocality: 'Example locality',
      postalCode: 'Example Postcode',
    },
  },
};
