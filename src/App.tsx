import React from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreensNavigation} from './constants/navigation';
import Home from './screens/Home';
import Login from './screens/Login';
import Splash from './screens/Splash';
import {RootState, persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const isSignedIn: boolean = useSelector(
    (state: RootState) => state.auth.isSignedIn,
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreensNavigation.Login}>
        {isSignedIn ? (
          <Stack.Screen name={ScreensNavigation.Home} component={Home} />
        ) : (
          <>
            <Stack.Screen name={ScreensNavigation.Login} component={Login} />
            <Stack.Screen name={ScreensNavigation.Splash} component={Splash} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
