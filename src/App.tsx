import React from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreensNavigation} from './constants/navigation';
import Home from './screens/Home';
import Login from './screens/Login';
import Splash from './screens/Splash';
import {RootState, store} from './redux/store';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const isAutenticated: boolean | undefined = useSelector(
    (state: RootState) => state.auth.isAutenticated,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreensNavigation.Splash}>
        {isAutenticated && (
          <Stack.Screen name={ScreensNavigation.Home} component={Home} />
        )}
        {isAutenticated !== undefined && !isAutenticated && (
          <>
            <Stack.Screen name={ScreensNavigation.Login} component={Login} />
          </>
        )}
        {isAutenticated === undefined && (
          <Stack.Screen name={ScreensNavigation.Splash} component={Splash} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
