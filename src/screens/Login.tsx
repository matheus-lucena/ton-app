import React from 'react';
import {
    Dimensions,
  StyleProp,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


function Login(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter}}>
       <Text>Login</Text>
    </View>
  );
}

export default Login;
