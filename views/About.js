import {StyleSheet, Text, useColorScheme, View, ScrollView} from 'react-native';
import React from 'react';
import Skill from './components/Skill';

const About = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const h1 = {
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: 64,
    fontWeight: 'bold',
  };

  const h4 = {
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: 24,
  };

  const h4b = {
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  };

  const h5 = {
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: 20,
  };

  return (
    <View style={styles.parent}>
      <Text style={h1}>About me</Text>
      <Text style={h4}>
        A react native developer who is highly responsible, deadline oriented
        and good analytical skills.
      </Text>
      <View
        style={{
          flex: 1,
          marginTop: 60,
          flexDirection: 'column',
          display: 'flex',
        }}>
        <Text style={h4b}>Skills</Text>
        <Text style={h5}>Proficient in</Text>
        <ScrollView
          style={{
            flex: 1,
          }}>
          <Skill />
        </ScrollView>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  parent: {
    display: 'flex',
    paddingTop: 80,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'column',
    flex: 1,
  },
});
