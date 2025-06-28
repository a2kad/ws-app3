import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Button, Platform, StyleSheet, Linking, AppState, Image, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import HighScoreScreen from '../screens/HighScoreScreen';
import LowScoreScreen from '../screens/LowScoreScreen';
import { Ionicons } from '@expo/vector-icons';
import ContactsScreen from '../screens/ContactsScreen';

const openLinkProducts = () => {
  Linking.openURL('https://www.asso-websolidarite.org/boutique_solidaire.html');
};

const openLinkEducations = () => {
  Linking.openURL('https://www.asso-websolidarite.org/qui_sommes_nous.html');
};

const BoutiqueScreen = () => (
  <View style={{ flex: 1 }}>
    <Image
      source={require('../assets/image/produits-bg.jpg')}
      style={{ width: '100%', height: '45%' }}
      resizeMode="cover"
    />
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Products</Text>
      <Text style={{ fontSize: 16, color: '#555', marginBottom: 16, textAlign: 'left' }}>
        Récuperation, reconditionnement & vente d'ordinateurs à prix solidaires
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
    </View>
  </View>
);

const EducationScreen = () => (
  <View style={{ flex: 1 }}>
    <Image
      source={require('../assets/image/formation-bg.jpg')}
      style={{ width: '100%', height: '45%' }}
      resizeMode="cover"
    />
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Nos Ateliers Numériques</Text>
      {/* <Text style={{ fontSize: 16, color: '#555', marginBottom: 16, textAlign: 'left' }}>
        Récuperation, reconditionnement & vente d'ordinateurs à prix solidaires
      </Text> */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
  </View>
);

const Drawer = createDrawerNavigator();

const ResetWrapper = ({ navigation }) => {
  const [step, setStep] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      setStep('start');
    }, [])
  );

  console.log('Текущее состояние step:', step);

  if (step === 'start') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <Text style={{ fontSize: 18, marginBottom: 24, textAlign: 'center' }}>
          Réinitialiser les progrès et recommencer ?
        </Text>
        <Button
          title="Réinitialiser"
          onPress={async () => {
            await AsyncStorage.removeItem('alreadyLaunched');
            setStep('onboarding');
          }}
        />
      </View>
    );
  }

  if (step === 'onboarding') {
    return <OnboardingScreen onFinish={(ok) => setStep(ok ? 'high' : 'low')} />;
  }

  if (step === 'high') {
    return <HighScoreScreen onContinue={() => navigation.navigate('Accueil')} />;
  }

  if (step === 'low') {
    return <LowScoreScreen onContinue={() => navigation.navigate('Accueil')} />;
  }

  return null;
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 16, paddingHorizontal: 16, justifyContent: 'flex-start' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, paddingHorizontal: 8 },
  scrollViewContainer: { alignItems: 'center', paddingHorizontal: 8 },
  item: { alignItems: 'center', marginRight: 24 },
  image: { width: 250, height: 250 },
  itemText: { marginTop: 8, fontSize: 20 },
});

export default function DrawerNavigator() {
  //const [step, setStep] = useState('start');

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#374151',
        drawerInactiveTintColor: '#374151',
        drawerActiveBackgroundColor: '#FACC15',
        drawerInactiveBackgroundColor: 'transparent',
        drawerItemStyle: {
          borderRadius: 8,
          marginVertical: 4,
        },
      }}
    >
      <Drawer.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Boutique Solidaire"
        component={BoutiqueScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="pricetag-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Formations"
        component={EducationScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Questionnaire"
        component={ResetWrapper}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="refresh-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}