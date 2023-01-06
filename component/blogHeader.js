import {View, Text} from 'react-native';
import {headerStyle} from '../styles/headerStyle';

export default function BlogHeader() {
  return (
    <View style={headerStyle.headerContainer}>
      <Text style={headerStyle.headerTitle}>프론트 개발자의 괴담블로그</Text>
    </View>
  );
}
