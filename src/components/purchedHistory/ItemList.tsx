import React, {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';
import {PurchedItem} from '../../entity/shop';

interface Props {
  item: PurchedItem;
}

const ItemList = (props: Props) => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            width={25}
            height={40}
            source={{uri: item.products[0].image_url}}
          />
        </View>
        <View style={styles.itemDescription}>
          <Text style={{}}>Total R$: {item.total.toFixed(2)}</Text>
          <Text style={{}}>
            Quantidade Total:{' '}
            {item.products
              .map(pdt => pdt.count)
              .reduce((total, current) => total + current)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: Colors.LIGHT_GREY,
    marginTop: 5,
  },
  imageContainer: {
    margin: 5,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  itemDescription: {
    paddingLeft: 25,
    marginVertical: 1,
  },
  text: {
    fontWeight: '400',
    color: Colors.GREY,
  },
});

export default ItemList;
