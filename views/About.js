import {
  StyleSheet,
  Text,
  Dimensions,
  useColorScheme,
  View,
  ScrollView,
} from 'react-native';
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
    paddingBottom: 24,
  };

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const skills = [
    {skill: 'CSS', percentage: 70},
    {skill: 'Javascript', percentage: 50},
    {skill: 'Figma', percentage: 32},
    {skill: 'HTML', percentage: 90},
    {skill: 'MYSQL', percentage: 50},
    {skill: 'PHP', percentage: 20},
    {skill: 'Python', percentage: 40},
  ];

  const sk = [];

  for (let index = 0; index < skills.length; index++) {
    const element = skills[index];

    sk.push(Skill(element.skill, element.percentage));
  }

  const parent = {
    display: 'flex',
    paddingTop: 80,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: isPortrait() ? 'column' : 'row',
    flex: 1,
  };

  const child1 = {
    flex: isPortrait() ? 0 : 3,
    marginRight: isPortrait() ? 0 : 50,
    justifyContent: isPortrait() ? 'flex-start' : 'center',
  };

  const subParent = {
    flex: 5,
    marginTop: isPortrait() ? 60 : 0,
    flexDirection: 'column',
    display: 'flex',
    marginBottom: 10,
  };

  return (
    <View style={parent}>
      <View style={child1}>
        <Text style={h1}>About me</Text>
        <Text style={h4}>
          A react native developer who is highly responsible, deadline oriented
          and good analytical skills.
        </Text>
      </View>
      <View style={subParent}>
        <Text style={h4b}>Skills</Text>
        <Text style={h5}>Proficient in</Text>
        <ScrollView style={styles.scroll}>{sk}</ScrollView>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  subParent: {
    flex: 5,
    marginTop: 60,
    flexDirection: 'column',
    display: 'flex',
    marginBottom: 10,
  },
  scroll: {
    flex: 1,
  },
});
