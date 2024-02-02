import React, {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../constants/colors';

interface Props {
  value: string;
  style?: StyleProp<ViewStyle>;
  placeholder: string;
  secureTextEntry: boolean;
  onChangeText: (value: string) => void;
}

const InputForm = (props: Props) => {
  const {value, placeholder, secureTextEntry, style, onChangeText} = props;
  return (
    <View style={style}>
      <Text style={styles.placeholderText}>{placeholder}</Text>
      <TextInput
        value={value}
        textAlign="left"
        textAlignVertical="center"
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        keyboardType="default"
        onChangeText={onChangeText}
        multiline={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeholderText: {color: Colors.BLACK, fontWeight: '300', fontSize: 12},
});

export default InputForm;
