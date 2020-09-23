import { StyleSheet, Dimensions } from 'react-native';
import { scaleFont } from './../../utils/scaleFont';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 1,
    marginBottom: 10,
  },
  cardItemView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',   
    paddingLeft: 20,    
  },
  labelStyle: {
    color: '#000',    
    fontSize: scaleFont(18),
    marginVertical: 2,
  },
});

export default styles;