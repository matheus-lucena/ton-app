import {useEffect} from 'react';
import React, {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors, {HOME_GRADIENT} from '../constants/colors';
import Button from '../components/Button';
import ItemList from '../components/home/ItemList';
import Section from '../components/Section';
import {ItemState} from '../entity/Item';
import {AppDispatch, RootState} from '../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../redux/home/slice';
import {fetchList} from '../redux/home/thunk';

const {height} = Dimensions.get('window');

const Home = () => {
  const buyItems: ItemState[] = useSelector(
    (state: RootState) => state.home.buyItems,
  );
  const items: ItemState[] = useSelector(
    (state: RootState) => state.home.items,
  );
  const total: number = useSelector((state: RootState) => state.home.total);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={HOME_GRADIENT}
        style={styles.linearGradientContainer}>
        <Text style={styles.linearGradientText}>Olá, </Text>
        <Text style={styles.nameText}>Matheus.Lucena</Text>
      </LinearGradient>
      <View style={styles.listContainer}>
        <Section title="Disponíveis">
          <Text style={styles.sectionDescription}>
            As melhores taxas do mercado
          </Text>
        </Section>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollList}>
          {items.map(item => (
            <ItemList
              count={buyItems.find(_value => _value.sn === item.sn)?.count}
              onPressAdd={() => dispatch(increment(item))}
              onPressSub={() => dispatch(decrement(item))}
              key={item.sn}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.buyResume}>
        <View style={styles.priceContainer}>
          <Text>Total</Text>
          <Text style={styles.textPrice}>R$ {total.toFixed(2)}</Text>
        </View>

        <Button
          onPress={() => {
            console.log('BUY');
          }}
          text={'Comprar'}
          style={styles.buyButton}
          text_style={styles.buyButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  linearGradientContainer: {
    height: height * 0.12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  priceContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  buyButton: {
    backgroundColor: Colors.PRIMARY,
    width: '30%',
    height: '70%',
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
    marginRight: 30,
  },
  buyButtonText: {
    color: Colors.WHITE,
    fontWeight: '600',
  },
  listContainer: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15,
    marginTop: -height * 0.02,
    flex: 1,
  },
  linearGradientText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 15,
  },
  buyResume: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height * 0.08,
    alignItems: 'center',
  },
  sectionDescription: {
    fontSize: 14,
    color: Colors.GREY,
  },
  scrollList: {
    marginHorizontal: 25,
    marginTop: 15,
  },
  textPrice: {fontWeight: 'bold', color: 'black'},
  nameText: {color: Colors.WHITE},
});

export default Home;
