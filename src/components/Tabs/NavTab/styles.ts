import {HDP, RF} from '../../../helpers/index';
import {colors} from '../../../themes/colours';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    height: HDP(64),
    // paddingVertical: HDP(20),
    marginHorizontal: HDP(48),
    backgroundColor: '#F3F3F3',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: HDP(37),
    opacity: 0.9,
  },
  activeTab: {
    borderTopColor: colors.red,
    justifyContent: 'center',
    padding: HDP(20),
    borderTopWidth: HDP(3),
  },
  inActiveTab: {
    justifyContent: 'center',
    padding: HDP(20),
  },
  tabText: {
    color: '#2E3A59',
    fontSize: RF(12),
    fontWeight: '600',
  },
});

export default styles;