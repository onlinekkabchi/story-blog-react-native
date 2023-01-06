import {View} from 'react-native';
import CurrentStoryList from './currentStoryList';
import PageIndex from './pageIndex';

export default function StoryPage() {
  return (
    <View>
      <PageIndex />
      <CurrentStoryList />
    </View>
  );
}
