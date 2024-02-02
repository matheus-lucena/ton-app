import { StyleProp, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import Colors from "../constants/colors"

interface Props{
    value: string
    style?: StyleProp<ViewStyle>
    placeholder: string
    secureTextEntry: boolean
    onChangeText: ( (value: string) => void)
}

const InputForm = (props: Props) => {
    const { value, placeholder, secureTextEntry, style, onChangeText } = props
    return (
        <View style={style}>
            <Text style={{color: Colors.BLACK, fontWeight: '300', fontSize: 12}}>{placeholder}</Text>
            <TextInput
                value={value}
                textAlign='left'
                textAlignVertical='center'
                autoCapitalize='none'
                secureTextEntry={secureTextEntry}
                keyboardType='default'
                onChangeText={onChangeText}
                multiline={false}
            />
        </View>
    )
}

export default InputForm