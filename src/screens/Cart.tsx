import {useCallback, useEffect, useState} from 'react';
import React, {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors, {HOME_GRADIENT} from '../constants/colors';
import Button from '../components/Button';
import ItemList from '../components/home/ItemList';
import Section from '../components/Section';
import Product, {ProductState} from '../entity/product';
import {AppDispatch, RootState} from '../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../redux/home/slice';
import {fetchList} from '../redux/home/thunk';
import {logout} from '../redux/auth/slice';
import {ProductsResponse} from '../entity/request/product';

const {height} = Dimensions.get('window');

const Cart = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [total, setTotal] = useState<number>(0);

  const buyItems: ProductState[] = useSelector(
    (state: RootState) => state.home.buyItems,
  );
  const items: ProductsResponse | undefined = useSelector(
    (state: RootState) => state.home.items,
  );
  const dispatch = useDispatch<AppDispatch>();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      dispatch(fetchList());
    }, 2000);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchList());
    //dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    let tmpTotal = 0;
    buyItems.map((buyItem: ProductState) => {
      const item = items && items.data.find(_item => _item.sn === buyItem.sn);
      const count = buyItem.count ? buyItem.count : 0;
      tmpTotal += item && item.value ? item.value * count : 0;
    });
    setTotal(tmpTotal);
  }, [buyItems, items, total]);

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
          style={styles.scrollList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {items &&
            items.data &&
            items.data.length > 0 &&
            items.data.map((item: Product) => (
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
            console.log('BUY ' + JSON.stringify(buyItems));
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

export default Cart;
