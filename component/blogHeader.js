import {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {headerStyle} from '../styles/headerStyle';
import Contact from './contact';

export default function BlogHeader() {
  const [contact, setContact] = useState(false);

  const openAndCloseContact = () => {
    if (contact) {
      setContact(false);
    } else {
      setContact(true);
    }
  };
  return (
    <View style={headerStyle.headerContainer}>
      {contact ? (
        <Contact />
      ) : (
        <>
          <Text style={headerStyle.headerTitle}>
            프론트 개발자의 괴담블로그
          </Text>
          <Text style={headerStyle.headerTitleMini}>scary story blog</Text>
        </>
      )}

      <TouchableOpacity
        onPress={openAndCloseContact}
        style={headerStyle.contactButton}>
        <Text style={headerStyle.contactTitle}>contact</Text>
      </TouchableOpacity>
    </View>
  );
}
