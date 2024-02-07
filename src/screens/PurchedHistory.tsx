import {useCallback, useEffect, useState} from 'react';
import React, {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';

import Colors from '../constants/colors';
import ItemList from '../components/purchedHistory/ItemList';
import Section from '../components/Section';
import {AppDispatch, RootState} from '../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPurchased} from '../redux/home/thunk';
import {PurchedResponse} from '../entity/shop';
import Header from '../components/Header';

const PurchedHistory = () => {
  const [refreshing, setRefreshing] = useState(false);

  const purchedResponse: PurchedResponse | undefined = useSelector(
    (state: RootState) => state.home.purchedResponse,
  );

  const dispatch = useDispatch<AppDispatch>();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      dispatch(fetchPurchased());
    }, 2000);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPurchased());
  }, [dispatch]);

  return (
    <Header>
      <View style={styles.listContainer}>
        <Section title="Lista de compras">
          <Text style={styles.sectionDescription}>
            Abaixo segue suas últimas compras
          </Text>
        </Section>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {purchedResponse &&
            purchedResponse.data &&
            purchedResponse.data.length > 0 &&
            purchedResponse.data.map(item => (
              <ItemList key={item.id} item={item} />
            ))}
        </ScrollView>
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15,
    flex: 1,
  },
  sectionDescription: {
    fontSize: 14,
    color: Colors.GREY,
  },
  scrollList: {
    marginHorizontal: 25,
    marginTop: 15,
  },
});

export default PurchedHistory;
