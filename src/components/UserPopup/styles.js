import { StyleSheet, Dimensions } from 'react-native';
import { scaleFont } from './../../utils/scaleFont';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    backgroundColor: '#fff',
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    marginBottom: 10,
  },
  modalTopView: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnContainer: {
    height: '60%',
    width: '30%',
  },
  cardItemView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  aviView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  aviStyle: {
    height: SCREEN_WIDTH * 0.15,
    width: SCREEN_WIDTH * 0.15,
    borderRadius: 50,
  },
  labelStyle: {
    color: '#000',    
    fontSize: scaleFont(15),
    marginVertical: 5,
  },
  topTriangle: {
    position: 'absolute',
    top: 0,
    left: 0,
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
    borderBottomColor: 'rgba(52, 52, 52, 0.8)',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '180deg' }],
  },
  bottomTriangle: {
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
    borderBottomColor: 'rgba(52, 52, 52, 0.8)',
    borderLeftColor: 'transparent',
  },
});

export default styles;