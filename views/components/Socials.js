import {
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Socials = (img, username, url) => {
  const isDarkMode = useColorScheme() === 'dark';

  const h4 = {
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: 24,
  };

  return (
    <TouchableOpacity key={img} onPress={() => Linking.openURL(url)}>
      <View style={styles.home}>
        <View style={styles.parent}>
          <Image
            style={styles.image}
            source={{
              uri: img,
            }}
          />
        </View>
        <View style={styles.view2}>
          <Text style={h4}>{username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Socials;

const styles = StyleSheet.create({
  parent: {
    height: 70,
    width: 70,
    backgroundColor: '#ffffff',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00000',
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
  },
  image: {height: 40, width: 40},
  view2: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 24,
    justifyContent: 'center',
  },
  home: {display: 'flex', flexDirection: 'row', marginTop: 24},
});
