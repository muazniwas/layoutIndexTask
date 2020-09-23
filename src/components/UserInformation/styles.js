import { StyleSheet, Dimensions } from 'react-native';
import { scaleFont } from './../../utils/scaleFont';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#f0f2f2',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  listContainer: {
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.8,
    paddingTop: 10,
  },
  titleStyle: {
    color: '#000',
    fontSize: scaleFont(16),
    marginVertical: 10,
  },
  searchContainer: {
    backgroundColor: '#fff',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputStyle: {
    height: '60%',
    width: '60%',
    backgroundColor: '#f0f2f2',
    marginRight: 15,
    paddingLeft: 10,
    fontSize: scaleFont(14),
  },
  btnContainer: {
    height: '60%',
    width: '30%',
  },
});

export default styles;