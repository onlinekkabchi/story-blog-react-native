import {useEffect, useState} from 'react';
import {View, Text, ScrollView, Button, FlatList} from 'react-native';
import {usePageState, usePageDispatch} from '../editor/pageContext';
import {usePageIndexState} from '../editor/pageIndexContext';

import {pageIndexStyle} from '../styles/pageIndexStyle';

function IndexButton({item}) {
  const pagestate = usePageState();
  const pagedispatch = usePageDispatch();
  const [clicked, setClicked] = useState(false);

  const onPressPageIndexButton = () => {
    pagedispatch({type: 'SET_PAGE', index: item});
  };

  useEffect(() => {
    if (pagestate === item) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [clicked, pagestate, item, setClicked]);

  return (
    <View style={pageIndexStyle.pageIndexContainer}>
      <Button
        key={item}
        onPress={onPressPageIndexButton}
        title={item.toString()}
        style={pageIndexStyle.pageIndexNumber}
        color={
          // pagestate === item
          clicked
            ? pageIndexStyle.pageIndexClicked.color
            : pageIndexStyle.pageIndexNumber.color
        }
      />
    </View>
  );
}

export default function PageIndex() {
  const pageindexstate = usePageIndexState();
  const info = () => {
    console.log(pageindexstate);
    console.log(typeof pageindexstate);
    // console.log(pageindexstate.keys());
    // console.log(pageindexstate.values());
  };
  return (
    <>
      {/* <Button title="test button" onPress={info} /> */}
      <View style={pageIndexStyle.pageIndexListContainer}>
        {pageindexstate.length > 1 ? (
          // <Button title="index" />
          <>
            {pageindexstate.map((item, index) => (
              <IndexButton key={index} item={item} />
            ))}
          </>
        ) : (
          <Text style={pageIndexStyle.pageIndexNumber}>
            downloading story... 이야기 받아오는 중...
          </Text>
        )}
      </View>
    </>
  );
}
