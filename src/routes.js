import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Dashboard from './pages/Dashboard';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main: createStackNavigator(
        {
          Main,
          Dashboard,
        },
        {
          defaultNavigationOptions: {
            headerTransparent: true,
            headerTitle: '',
          },
        }
      ),
    },
    {
      initialRouteName: 'Main',
    }
  )
);

export default Routes;
