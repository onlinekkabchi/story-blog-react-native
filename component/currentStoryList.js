import {useEffect, useState} from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import {usePageState} from '../editor/pageContext';
import {useStoryState} from '../editor/storyContext';
import {getPage} from '../editor/storyApi';
import {useStoryDispatch} from '../editor/storyContext';
import Accordion from './accordion';
import {storyStyle} from '../styles/storyStyle';
import {pageIndexStyle} from '../styles/pageIndexStyle';

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
            <Text style={pageIndexStyle.pageIndexNumber}>
              wait for 3 seconds.. 3초만 기다려주세요..
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
