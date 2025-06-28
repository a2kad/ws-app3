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
      
      <Text style={styles.header}>Nos produits</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>

        <TouchableOpacity style={styles.item} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/computer.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Ordinateurs Reconditionnés</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/laptop.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Ordinateurs Portables Reconditionnés</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/smartphone.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Smartphone Reconditionnés</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/touch-screen.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Écrans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/mouse.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Equipement Informatique & Multimédia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkProducts}>
          <Image
            source={require('../assets/image/products/repaired.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Réparation</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <Text style={styles.header}>Nos formations</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.item} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/windows.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Environnement Windows</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/linux-ubuntu.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Environnement Ubuntu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/paper-plane.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Messagerie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/padlock.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Internet & Sécurité Informatique</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/programming.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>Logiciels & Applications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/settings.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>E-Administration</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={openLinkEducations}>
          <Image
            source={require('../assets/image/formation/medical-team.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>E-Sante</Text>
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
