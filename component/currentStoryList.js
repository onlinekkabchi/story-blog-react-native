import {useEffect, useState} from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import {usePageState} from '../editor/pageContext';
import {useStoryState} from '../editor/storyContext';
import {getPage} from '../editor/storyApi';
import {useStoryDispatch} from '../editor/storyContext';
import Accordion from './accordion';
import {storyStyle} from '../styles/storyStyle';

export default function CurrentStoryList() {
  const pagestate = usePageState();
  const storystate = useStoryState();
  const storydispatch = useStoryDispatch();

  useEffect(() => {
    const greaterStd = new Number(pagestate) * 10;
    const lessthanStd = (new Number(pagestate) + 1) * 10;
    const storyquery = {
      greater: greaterStd,
      lessthan: lessthanStd,
    };
    getPage(storyquery, storydispatch);
  }, [pagestate]);

  return (
    <ScrollView>
      <View>
        {storystate.length > 1 ? (
          storystate.map((item, index) => (
            // <View key={index}>
            //   <Text>{item.storyTitle}</Text>
            // </View>

            <Accordion
              key={index}
              id={item.order}
              title={item.storyTitle}
              content={item.storyContent}
            />
          ))
        ) : (
          // <View>
          //   <Text>story</Text>
          // </View>
          <View>
            <Text>no story</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
