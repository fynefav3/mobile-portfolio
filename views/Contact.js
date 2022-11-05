import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import React from 'react';
import Socials from './components/Socials';

const Contact = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const h1 = {
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: 64,
    fontWeight: 'bold',
  };
  const h4 = {
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: 26,
  };

  const socials = [
    {
      img: 'https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png',
      url: 'https://www.linkedin.com/in/ihuoma-agbaru-6775041ba',
      username: 'Ihuoma Agbaru',
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      url: 'https://github.com/fynefav3',
      username: 'fynefav3',
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/5968/5968534.png',
      url: 'mailto:agbaruihuoma@gmail.com',
      username: 'Ihuoma Favour Agbaru',
    },
    {
      img: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png',
      url: 'https://twitter.com/ihuoma_js',
      username: 'ihuoma_js',
    },
    {
      img: 'https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png',
      url: 'https://facebook.com/ihuomafavour',
      username: 'Ihuoma Favour Agbaru',
    },
  ];

  const socialMedia = [];

  for (let index = 0; index < socials.length; index++) {
    const element = socials[index];

    socialMedia.push(Socials(element.img, element.username, element.url));
  }

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const parent = {
    display: 'flex',
    paddingTop: 80,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: isPortrait() ? 'column' : 'row',
    flex: 1,
  };

  const child1 = {
    marginRight: isPortrait() ? 0 : 50,
    justifyContent: isPortrait() ? 'flex-start' : 'center',
  };

  return (
    <View style={parent}>
      <View style={child1}>
        <Text style={h1}>Let's Chat</Text>
        <Text style={h4}>I'm open for a chat.</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/document/d/1HTl3GJvSBHgn_6Hvk9uvA4yL__XdC-ZHH_M2q8tVHUc/edit?usp=sharing',
            )
          }>
          <Text style={styles.resume}>Download Resume</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>{socialMedia}</ScrollView>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  resume: {
    color: '#ff1a1a',
    paddingTop: 30,
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  scroll: {flex: 7, marginTop: 50},
});
