import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';

export default function HomeScreen() {

  const openLinkProducts = () => {
    Linking.openURL('https://www.asso-websolidarite.org/boutique_solidaire.html');
  };
  
  const openLinkEducations = () => {
    Linking.openURL('https://www.asso-websolidarite.org/qui_sommes_nous.html');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.item} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/computer.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Computer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/desktop.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Desktop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/gaming.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Gaming</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <Text style={styles.header}>Nos Ateliers Numériques</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.item} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/blogger.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Computer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/erp.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Desktop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/internet-security.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Gaming</Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 16, paddingHorizontal: 16, justifyContent: 'flex-start' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, paddingHorizontal: 8 },
  scrollViewContainer: { alignItems: 'center', paddingHorizontal: 8 },
  item: { alignItems: 'center', marginRight: 24 },
  image: { width: 250, height: 250 },
  itemText: { marginTop: 8, fontSize: 20 },
});
