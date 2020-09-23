import { StyleSheet, Dimensions } from 'react-native';
import { scaleFont } from './../../utils/scaleFont';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const styles = StyleSheet.create({  
  closeBtnContainer: {
    width: '100%',
    height: '100%',
  },
  closeBtnStyle: {
    backgroundColor: '#2f8dad',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: SCREEN_WIDTH * 0.03,
    borderLeftWidth: SCREEN_WIDTH * 0.03,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    borderLeftColor: 'transparent',
  },
  btnText: {
    color: '#fff',    
    fontSize: scaleFont(16),
    fontWeight: 'bold',
  },
});

export default styles;