import { createStackNavigator, createAppContainer} from 'react-navigation';
import Login from '../components/Login/Login';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
}, {headerMode: 'none'});
// Hide the header from AppNavigator stack


const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
