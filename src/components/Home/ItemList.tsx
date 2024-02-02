import { Image, StyleSheet, Text, View } from "react-native"
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Colors from "../../constants/colors";
import Item from "../../entity/Item";

interface Props{
    item: Item
    count?: number
    onPressAdd: ( () => void)
    onPressSub: ( () => void)
}

const ItemList = (props: Props) =>{
    const { item, count, onPressSub, onPressAdd } = props
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        width={25}
                        height={40}
                        source={{uri: item.image_url}}
                    />
                </View>
                <View style={styles.itemDescription}>
                    <Text style={{fontWeight: '400', color: 'black'}}>
                        {item.name}
                    </Text>
                    <Text style={{fontWeight: '400', color: 'grey'}}>
                        S/N: {item.sn}
                    </Text>
                </View>
            </View>
            <View style={styles.itemCartContainer}>
                {count && count > 0 ? (
                    <>
                        <EntypoIcon onPress={onPressSub} name="minus" size={20} color={Colors.PRIMARY} />
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>  { count.toString() }  </Text>
                    </>
                ): null}
                <EntypoIcon onPress={onPressAdd} name="plus" size={20} color={Colors.PRIMARY} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: Colors.LIGHT_GREY,
        marginTop: 5,
        flexDirection: 'row'
    },
    imageContainer:{
        margin: 5
    },
    itemContainer:{
        flexDirection: 'row'
    },
    itemDescription:{
        paddingLeft: 25
    },
    itemCartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
  });
  
export default ItemList