import {StyleSheet, Text, useColorScheme, View, Image} from 'react-native';
import React from 'react';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const h1 = {
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: 64,
    fontWeight: 'bold',
  };

  const h4 = {color: isDarkMode ? '#ffffff' : '#000000', fontSize: 22};

  return (
    <View style={styles.parent}>
      <View style={styles.child1}>
        <Text style={h1}>Hello{'\n'}I'm Ihuoma</Text>
        <Text style={h4}>I build great mobile apps</Text>
      </View>
      <View style={styles.child2}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dl6pfjd5w/image/upload/v1667655552/my%20image/8F02DC7A-8194-4032-B923-E78876BFBE15_1_201_a-removebg-preview_ruzjm7.png',
          }}
          style={styles.img}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
  },
  child1: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'center',
    padding: 24,
  },
  child2: {flex: 3, justifyContent: 'flex-end'},
  img: {width: '100%', height: '100%', resizeMode: 'contain'},
});
