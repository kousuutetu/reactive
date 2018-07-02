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
      backgroundColor: '#303030',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontSize: 18,
    }
  }
});