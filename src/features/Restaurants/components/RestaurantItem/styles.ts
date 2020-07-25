import {StyleSheet} from 'react-native';
import Theme from '../../../../styles';

export default StyleSheet.create({
  container: {
    margin: Theme.Spacing.small,
    marginBottom: 0,
    backgroundColor: Theme.Colors.white,
    borderRadius: 6,
    overflow: 'hidden',
  },
  text: {
    padding: Theme.Spacing.small,
  },
  btn: {
    textAlign: 'center',
    width: 160,
  },
  btnText: {
    textAlign: 'center',
  },
  image: {
    height: 100,
    width: '100%',
  },
});
