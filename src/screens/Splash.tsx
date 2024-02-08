import React, {StyleSheet, Text, View} from 'react-native';
import {AppDispatch} from '../redux/store';
import {useEffect} from 'react';
import {getTokenThunk} from '../redux/auth/thunk';
import {useDispatch} from 'react-redux';

function Splash() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTokenThunk());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
