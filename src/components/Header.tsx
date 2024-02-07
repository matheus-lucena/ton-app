import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors, {HOME_GRADIENT} from '../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getInfoThunk} from '../redux/auth/thunk';
import {AppDispatch, RootState} from '../redux/store';
import {UserAttributes} from '../entity/request/user';

interface Props {
  children: React.ReactNode;
}

const {height} = Dimensions.get('window');

const Header = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState<string | undefined>();
  const [familyName, setFamilyName] = useState<string | undefined>();

  const user_attributes: UserAttributes[] | undefined = useSelector(
    (state: RootState) => state.auth.user_attributes,
  );

  const {children} = props;
  useEffect(() => {
    dispatch(getInfoThunk());
  }, [dispatch]);

  useEffect(() => {
    setName(user_attributes?.find(attr => attr.Name === 'name')?.Value);
    setFamilyName(
      user_attributes?.find(attr => attr.Name === 'family_name')?.Value,
    );
  }, [user_attributes]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={HOME_GRADIENT}
        style={styles.linearGradientContainer}>
        <Text style={styles.linearGradientText}>Olá, </Text>
        <Text style={styles.nameText}>
          {name}.{familyName}
        </Text>
      </LinearGradient>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  nameText: {color: Colors.WHITE},
  linearGradientContainer: {
    height: height * 0.12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  linearGradientText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 15,
  },
  childrenContainer: {flex: 1, marginTop: -height * 0.02},
});

export default Header;
