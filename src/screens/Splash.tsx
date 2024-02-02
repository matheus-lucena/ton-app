import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreensNavigation from "../constants/navigation";

interface Props{
  navigation: NativeStackNavigationProp<any>
}

const Splash = (props: Props) => {
  const {navigation} = props
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 5000);

  if (!timePassed) {
    return (
      <View style={styles.splash}>
        <Text style={styles.text}>Splash Screen</Text>
      </View>
    );
  }
  navigation.navigate(ScreensNavigation.Home);
};

const styles = StyleSheet.create({
  splash: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  }
});

export default Splash;