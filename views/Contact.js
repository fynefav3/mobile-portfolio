import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';

const Contact = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Text>Contact</Text>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
