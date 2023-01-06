import {ScrollView} from 'react-native';
import BlogHeader from './blogHeader';
import StoryPage from './storyPage';
import {PageProvider} from '../editor/pageContext';
import {PageIndexProvider} from '../editor/pageIndexContext';
import {StoryProvider} from '../editor/storyContext';
import {homeStyle} from '../styles/home';

export default function Home() {
  return (
    <PageProvider>
      <PageIndexProvider>
        <StoryProvider>
          <ScrollView
            ontentInsetAdjustmentBehavior="automatic"
            style={homeStyle.homeContainer}>
            <BlogHeader />
            <StoryPage />
          </ScrollView>
        </StoryProvider>
      </PageIndexProvider>
    </PageProvider>
  );
}
