import { StackNavigator } from 'react-navigation';

import Screen from './screens';

import { colors } from './utils/constant';

export default StackNavigator({
  ...Screen,
}, {
  initialRouteName: 'Home',
  cardStyle: {
    backgroundColor: colors.background,
  },
  navigationOptions: {
    headerStyle: {
      height: 44,
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: colors.main,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontSize: 18,
    }
  }
});