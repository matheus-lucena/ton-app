import React, {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  text: string;
  style?: StyleProp<ViewStyle> | undefined;
  text_style?: StyleProp<TextStyle> | undefined;
  onPress: () => void;
}

const Button = (props: Props) => {
  const {text, style, text_style, onPress} = props;
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <Text style={text_style}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
