import React from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreensNavigation} from '../constants/navigation';
import Cart from './Cart';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Colors from '../constants/colors';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreensNavigation.Cart}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Carrinho',
          tabBarLabelStyle: {color: Colors.PRIMARY},
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <EntypoIcon name={'shopping-cart'} size={20} color={Colors.GREY} />
          ),
        }}
        name={ScreensNavigation.Cart}
        component={Cart}
      />

      {/*<Tab.Screen
        options={{
          tabBarLabel: 'Histórico',
          tabBarLabelStyle: {color: Colors.PRIMARY},
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <EntypoIcon name={'list'} size={20} color={Colors.GREY} />
          ),
        }}
        name={ScreensNavigation.Cart}
        component={Cart}
      />*/}
    </Tab.Navigator>
  );
}

export default Home;
