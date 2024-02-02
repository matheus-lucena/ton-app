import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors, { HOME_GRADIENT } from '../constants/colors';
import {ITEM, ITEM_LIST} from '../mocks'
import Button from '../components/Button';
import ItemList from '../components/Home/ItemList';
import Section from '../components/Section';
import Item, { ItemState } from '../entity/Item';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/home/slice';

const {height} = Dimensions.get('window')


const Home = (): React.JSX.Element => {
  const items: ItemState[] = useSelector((state: RootState) => state.counterHome.items)
  const dispatch = useDispatch()

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <LinearGradient colors={HOME_GRADIENT} style={{height: height*0.12, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.linearGradientText}>Olá, </Text><Text style={{color: 'white'}}>Matheus.Lucena</Text>
      </LinearGradient>
      <View
          style={styles.listContainer}>
          <Section title="Disponíveis">
              <Text style={styles.sectionDescription}>As melhores taxas do mercado</Text>
          </Section>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollList}>
              {ITEM_LIST.map((item)=> (
                <ItemList count={items.find((_value) => _value.sn == item.sn)?.count} onPressAdd={() => dispatch(increment(item))} onPressSub={() => dispatch(decrement(item))} key={item.sn} item={item} />
              ))}
          </ScrollView>
      </View>
      <View style={styles.buyResume}>
          <View style={{flexDirection: 'column', justifyContent: 'center', paddingLeft: 30}}>
              <Text>Total</Text>
              <Text style={{fontWeight: 'bold', color: 'black'}}>R$ 510,00</Text>
          </View>

          <Button 
            onPress={()=>{
              console.log("BUY")
            }}
            text={'Comprar'} 
            style={styles.buyButton} 
            text_style={styles.buyButtonText}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buyButton: {
    backgroundColor: Colors.PRIMARY, 
    width: '30%', 
    height: '70%', 
    justifyContent: 'center', 
    borderRadius: 15, 
    alignItems: 'center', 
    marginRight: 30
  },
  buyButtonText: {
    color: Colors.WHITE,
    fontWeight: '600'
  },
  listContainer: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15,
    marginTop: -height*0.02,
    flex: 1
  },
  linearGradientText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 15
  },
  buyResume: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height*0.08,
    alignItems: 'center'
  },
  sectionDescription: {
    fontSize: 14,
    color: Colors.GREY
  },
  scrollList: {
    marginHorizontal: 25,
    marginTop: 15
  }
});

export default Home;
