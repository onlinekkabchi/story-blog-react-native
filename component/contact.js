import {View, Text} from 'react-native';
import {headerStyle} from '../styles/headerStyle';

export default function Contact() {
  return (
    <View>
      <Text style={headerStyle.headerTitleMini}>
        email: onlinekkabchi@gmail.com
      </Text>
      <Text style={headerStyle.headerTitleMini}>
        github : https://github.com/onlinekkabchi
      </Text>
    </View>
  );
}
