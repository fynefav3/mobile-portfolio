import {StyleSheet, Image, View, Text, useColorScheme} from 'react-native';
import React from 'react';

const Skill = (skill, percent) => {
  const isDarkMode = useColorScheme() === 'dark';
  const h4 = {
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: 24,
  };
  const bar = {
    display: 'flex',
    height: 10,
    width: percent + '%',
    backgroundColor: isDarkMode ? '#ffffff' : '#000000',
    marginTop: 10,
  };

  return (
    <View key={skill} style={styles.home}>
      <View style={styles.parent}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/59/59505.png',
          }}
        />
      </View>
      <View style={styles.view2}>
        <Text style={h4}>{skill}</Text>
        <View style={bar} />
      </View>
    </View>
  );
};

export default Skill;

const styles = StyleSheet.create({
  parent: {
    height: 70,
    width: 70,
    backgroundColor: '#ff1a1a',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {height: 30, width: 30},
  view2: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 24,
    justifyContent: 'center',
  },
  home: {display: 'flex', flexDirection: 'row', marginTop: 24},
});
